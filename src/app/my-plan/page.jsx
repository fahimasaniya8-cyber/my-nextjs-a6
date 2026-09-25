'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { usePlan } from '../context/PlanContext';

const MyPlanPage = () => {
  const [tab, setTab] = useState('today');
  const [sortBy, setSortBy] = useState('duration');

  const { planItems, savedItems, removeFromPlan, removeFromSaved, markAsDone } =
    usePlan();

  const items = tab === 'today' ? planItems : savedItems;

  const totalMinutes = planItems.reduce(
    (sum, w) => sum + Number(w.duration || 0),
    0,
  );

  const totalCalories = planItems.reduce(
    (sum, w) => sum + Number(w.caloriesBurned || 0),
    0,
  );

  // Sort items
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === 'duration') {
        return Number(a.duration || 0) - Number(b.duration || 0);
      }

      if (sortBy === 'calories') {
        return Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0);
      }

      if (sortBy === 'rating') {
        return Number(a.rating || 0) - Number(b.rating || 0);
      }

      return 0;
    });
  }, [items, sortBy]);

  const handleDone = id => {
    markAsDone(id);
    toast.success('Workout marked as done!');
  };

  const handleRemove = id => {
    if (tab === 'today') {
      removeFromPlan(id);
      toast.success('Workout removed from your plan');
    } else {
      removeFromSaved(id);
      toast.success('Workout removed from saved');
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0d0f] px-4 py-8 text-white sm:py-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <h1 className="text-2xl font-extrabold uppercase sm:text-3xl">
          My Plan
        </h1>

        <p className="mt-2 text-sm text-[#9a9ca5]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-[#292a32] bg-[#15161c] p-4 sm:gap-4 sm:p-6">
          <div>
            <p className="text-xs text-[#9a9ca5]">Exercises</p>
            <p className="mt-1 text-lg font-bold text-[#aaff00] sm:text-2xl">
              {planItems.length}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#9a9ca5]">Minutes</p>
            <p className="mt-1 text-lg font-bold sm:text-2xl">{totalMinutes}</p>
          </div>

          <div>
            <p className="text-xs text-[#9a9ca5]">Calories</p>
            <p className="mt-1 text-lg font-bold sm:text-2xl">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex w-fit gap-2 rounded-full bg-[#15161c] p-1">
            <button
              onClick={() => setTab('today')}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                tab === 'today' ? 'bg-[#aaff00] text-black' : 'text-[#9a9ca5]'
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setTab('saved')}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                tab === 'saved' ? 'bg-[#aaff00] text-black' : 'text-[#9a9ca5]'
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-[#9a9ca5]">
              Sort By
            </label>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="rounded-lg border border-[#3a3b44] bg-[#15161c] px-3 py-2 text-xs font-semibold text-white outline-none focus:border-[#aaff00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout List */}
        <div className="mt-4 rounded-xl border border-[#292a32] bg-[#15161c] p-4">
          {sortedItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center sm:py-16">
              <p className="text-sm font-bold uppercase tracking-wide">
                Nothing here yet
              </p>

              <p className="mt-1 text-sm text-[#9a9ca5]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-4 rounded-full bg-[#aaff00] px-5 py-2 text-sm font-bold text-black hover:bg-[#c0ff4d]"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedItems.map(w => (
                <div
                  key={w.id}
                  className="flex flex-col gap-3 rounded-lg bg-[#1b1c22] p-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Workout Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={w.image}
                      alt={w.name}
                      className="h-14 w-14 shrink-0 rounded-lg object-cover"
                    />

                    <div>
                      <p className="font-bold">{w.name}</p>

                      <p className="text-xs text-[#9a9ca5]">{w.equipment}</p>

                      <p className="mt-1 text-xs text-[#9a9ca5]">
                        {w.duration} min · {w.caloriesBurned} kcal · ⭐{' '}
                        {w.rating}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/workouts/${w.id}`}
                      className="rounded-full border border-[#3a3b44] px-4 py-1.5 text-xs font-bold transition hover:border-[#aaff00]"
                    >
                      View Details
                    </Link>

                    {tab === 'today' && (
                      <button
                        onClick={() => handleDone(w.id)}
                        className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                          w.done
                            ? 'bg-[#aaff00] text-black'
                            : 'bg-[#aaff00] text-black hover:bg-[#c0ff4d]'
                        }`}
                      >
                        {w.done ? '✓ Done' : '✓ Mark as Done'}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemove(w.id)}
                      className="px-1 text-lg text-[#9a9ca5] transition hover:text-white"
                      aria-label="Remove workout"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;
