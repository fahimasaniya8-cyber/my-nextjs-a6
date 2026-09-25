import Image from 'next/image';
import Link from 'next/link';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#292a32] bg-[#15161c] text-white transition hover:-translate-y-1 hover:border-[#aaff00]">
      <div className="relative h-56 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />

        <span className="absolute right-3 top-3 rounded-full bg-[#aaff00] px-3 py-1 text-xs font-bold uppercase text-black">
          {workout.difficulty}
        </span>
      </div>

      <div className="p-5">
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

        <h2 className="text-xl font-extrabold uppercase">{workout.name}</h2>

        <p className="mt-2 text-sm text-[#a1a4ae]">{workout.equipment}</p>

        <div className="mt-5 grid grid-cols-3 border-y border-[#292a32] py-4 text-center">
          <div>
            <p className="text-xs text-[#a1a4ae]">Duration</p>
            <p className="mt-1 font-bold">{workout.duration} min</p>
          </div>

          <div className="border-x border-[#292a32]">
            <p className="text-xs text-[#a1a4ae]">Calories</p>
            <p className="mt-1 font-bold">{workout.caloriesBurned} kcal</p>
          </div>

          <div>
            <p className="text-xs text-[#a1a4ae]">Rating</p>
            <p className="mt-1 font-bold">⭐ {workout.rating}</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <span className="text-[#a1a4ae]">
            Sets: <b className="text-white">{workout.sets}</b>
          </span>

          <span className="text-[#a1a4ae]">
            Reps: <b className="text-white">{workout.reps}</b>
          </span>
        </div>

        <Link
          href={`/workouts/${workout.id}`}
          className="mt-5 block rounded-md bg-[#aaff00] py-3 text-center text-sm font-bold uppercase text-black transition hover:bg-[#c0ff4d]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WorkoutCard;
