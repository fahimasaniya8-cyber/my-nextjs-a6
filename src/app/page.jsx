import Banner from './components/Banner';
import WorkoutLibrary from './components/WorkoutLibrary';

const HomePage = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

  const data = await res.json();

  return (
    <main>
      <Banner />

      <section id="library" className="bg-[#1b1b1d] px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <WorkoutLibrary data={data} />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
