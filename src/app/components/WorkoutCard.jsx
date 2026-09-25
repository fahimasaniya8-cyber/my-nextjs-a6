import Image from 'next/image';
import Link from 'next/link';

const WorkoutCard = ({ workout }) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="block overflow-hidden rounded-2xl border border-[#292a32] bg-[#15161c] text-white transition hover:-translate-y-1 hover:border-[#aaff00]"
    >
      <div className="relative h-44 w-full sm:h-56">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map(muscle => (
            <span
              key={muscle}
              className="rounded-full bg-[#292d22] px-3 py-1 text-xs font-semibold text-[#aaff00]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-extrabold uppercase sm:text-xl">
          {workout.name}
        </h2>

        <p className="mt-1 text-sm text-[#a1a4ae]">{workout.equipment}</p>

        <div className="mt-3 flex items-center gap-3 text-xs text-[#c4c6ce] sm:text-sm">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
