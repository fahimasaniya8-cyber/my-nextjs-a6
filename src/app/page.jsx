import Banner from './components/Banner';
import WorkoutCard from './components/WorkoutCard';

const HomePage = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

  const data = await res.json();

  return (
    <main>
      <Banner />

      <section className="bg-[#1b1b1d] px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-extrabold text-white">
            Workout Library
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map(workout => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
