const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d0f]">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-[#aaff00]"></span>

        <p className="mt-4 text-sm font-semibold text-white">
          Loading workouts...
        </p>
      </div>
    </div>
  );
};

export default Loading;
