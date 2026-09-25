const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  const workout = await res.json();

  return (
    <main className="min-h-screen bg-[#0d0d0f] px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm text-[#6b6e78]">Details Page</p>

        {/* Card */}
        <div className="rounded-2xl border border-[#292a32] bg-[#15161c] p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            {/* Information */}
            <div>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
                {workout.name}
              </h1>

              <p className="mt-2 text-sm text-[#9a9ca5]">
                {workout.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {workout.muscleGroups.map(muscle => (
                  <span
                    key={muscle}
                    className="rounded-full border border-[#aaff00]/30 bg-[#1c2415] px-3 py-1 text-xs font-bold text-[#aaff00]"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Info table */}
              <div className="mt-6 divide-y divide-[#292a32] overflow-hidden rounded-lg border border-[#292a32]">
                <Row label="Equipment" value={workout.equipment} />
                <Row label="Difficulty" value={workout.difficulty} />
                <Row label="Sets" value={workout.sets} />
                <Row label="Reps" value={workout.reps} />
                <Row label="Duration" value={`${workout.duration} min`} />
                <Row
                  label="Calories"
                  value={`${workout.caloriesBurned} kcal`}
                />
                <Row label="Rating" value={`⭐ ${workout.rating}`} />
              </div>

              {/* Instructions */}
              <section className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#9a9ca5]">
                  Instructions
                </h2>

                <ol className="mt-4 space-y-3">
                  {workout.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-[#c4c6ce]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#292d22] text-xs font-bold text-[#aaff00]">
                        {index + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#aaff00] px-5 py-2 text-sm font-bold text-black transition hover:bg-[#c0ff4d]">
                  Add to today&apos;s plan
                </button>

                <button className="rounded-full border border-[#3a3b44] px-5 py-2 text-sm font-bold text-white transition hover:border-[#aaff00]">
                  Save for later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Row = ({ label, value }) => (
  <div className="flex items-center justify-between bg-[#1b1c22] px-4 py-3 text-sm">
    <span className="text-[#9a9ca5]">{label}</span>
    <span className="font-semibold text-white">{value}</span>
  </div>
);

export default WorkoutDetailsPage;
