const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  const workout = await res.json();

  return (
    <main className="min-h-screen bg-[#1b1b1d] px-4 py-12 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl bg-[#15161c] p-8 shadow-lg">
        <h1 className="text-4xl font-bold">{workout.name}</h1>

        <div className="mt-6 space-y-3 text-gray-300">
          <p>
            <span className="font-bold text-white">Equipment:</span>{' '}
            {workout.equipment}
          </p>

          <p>
            <span className="font-bold text-white">Reps:</span> {workout.reps}
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="rounded-md bg-[#aaff00] px-5 py-3 font-bold text-black">
            Add to Today&apos;s Plan
          </button>

          <button className="rounded-md border border-gray-600 px-5 py-3 font-bold">
            Save
          </button>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
