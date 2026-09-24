import Image from 'next/image';

import WorkoutImage from '../../assest/banner.png';

const Banner = () => {
  return (
    <section className="bg-[#1b1b1d] px-4 py-8 md:px-10 md:py-10">
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-2xl border border-[#292a32] bg-[#15161c] px-8 py-12 text-white md:min-h-[448px] md:grid-cols-2 md:px-14 md:py-16">
        <div className="relative z-10 space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#aaff00]">
            Workout Library
          </p>

          <h1 className="max-w-xl text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-6xl">
            Train with intent. Log every set.
          </h1>

          <p className="max-w-lg text-base leading-6 text-[#a1a4ae]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="/workouts"
            className="inline-flex min-h-10 items-center rounded-md bg-[#aaff00] px-6 text-xs font-bold uppercase tracking-wide text-[#11120d] transition hover:bg-[#c0ff4d]"
          >
            Browse workouts
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md md:absolute md:inset-y-0 md:right-8 md:flex md:w-[40%] md:max-w-none md:items-center md:justify-center">
          <Image
            src={WorkoutImage}
            alt="Athlete training with a dumbbell"
            width={600}
            height={450}
            priority
            className="h-auto max-h-[360px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
