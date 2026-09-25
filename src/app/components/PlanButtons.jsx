'use client';

import { toast } from 'react-toastify';
import { usePlan } from '../context/PlanContext';

const PlanButtons = ({ workout }) => {
  const { planItems, savedItems, addToPlan, addToSaved } = usePlan();

  const handleAddToPlan = () => {
    const exists = planItems.find(w => w.id === workout.id);

    if (exists) {
      toast.error('Already in your plan');
      return;
    }

    if (planItems.length >= 5) {
      toast.error('Your plan is full');
      return;
    }

    addToPlan(workout);
    toast.success("Added to today's plan!");
  };

  const handleSave = () => {
    const exists = savedItems.find(w => w.id === workout.id);

    if (exists) {
      toast.error('Already saved');
      return;
    }

    addToSaved(workout);
    toast.success('Workout saved for later!');
  };

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <button
        onClick={handleAddToPlan}
        className="rounded-full bg-[#aaff00] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#c0ff4d]"
      >
        Add to today&apos;s plan
      </button>

      <button
        onClick={handleSave}
        className="rounded-full border border-[#3a3b44] px-5 py-2.5 text-sm font-bold text-white transition hover:border-[#aaff00]"
      >
        Save for later
      </button>
    </div>
  );
};

export default PlanButtons;
