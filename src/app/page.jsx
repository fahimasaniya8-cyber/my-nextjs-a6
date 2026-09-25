import Banner from './components/Banner';
import WorkoutCard from './components/WorkoutCard';

const HomePage = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

  const data = await res.json();

  return (
    <main>
      <Banner />

      <section className="bg-[#1b1b1d] px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-extrabold text-white sm:mb-8 sm:text-3xl">
            Workout Library
          </h2>
          <p className="text-[#a1a1a1]  py-8 sm:py-12 -mt-16">
            Welve lifts covering every major muscle group.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
