'use client';

import { useMemo, useState } from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutLibrary = ({ data }) => {
  const [sortBy, setSortBy] = useState('duration');

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (sortBy === 'duration') {
        return Number(a.duration) - Number(b.duration);
      }

      if (sortBy === 'calories') {
        return Number(a.caloriesBurned) - Number(b.caloriesBurned);
      }

      if (sortBy === 'rating') {
        return Number(a.rating) - Number(b.rating);
      }

      return 0;
    });
  }, [data, sortBy]);

  return (
    <>
      {/* Heading + Sort */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            THE LIBRARY
          </h2>

          <p className="mt-2 text-sm text-[#a1a1a1]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-[#a1a1a1]">
            Sort By
          </label>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="rounded-lg border border-[#3a3b44] bg-[#15161c] px-3 py-2 text-sm font-semibold text-white outline-none focus:border-[#aaff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Workout Cards */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {sortedData.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </>
  );
};

export default WorkoutLibrary;
