'use client';
import { usePlan } from '../context/PlanContext';

const PlanButtons = ({ workout }) => {
  const { addToPlan, addToSaved } = usePlan();

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        className="rounded-full bg-[#aaff00] px-5 py-2 text-sm font-bold text-black transition hover:bg-[#c0ff4d]"
      >
        Add to today&apos;s plan
      </button>

      <button
        onClick={() => addToSaved(workout)}
        className="rounded-full border border-[#3a3b44] px-5 py-2 text-sm font-bold text-white transition hover:border-[#aaff00]"
      >
        Save for later
      </button>
    </div>
  );
};

export default PlanButtons;
