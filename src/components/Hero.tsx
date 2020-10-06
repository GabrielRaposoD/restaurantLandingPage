export function Hero() {
  return (
    <div className='over-flow-hidden relative z-40 flex flex-row items-center justify-center max-h-screen min-h-screen'>
      <div className='absolute top-0 z-0 max-h-screen min-h-screen overflow-hidden bg-black'>
        <img
          src='img/bg.jpg'
          alt=''
          className='md:overflow-hidden xl:h-auto md:mt-0 object-cover min-h-screen opacity-50'
        />
      </div>

      <div className='realative z-30 flex flex-col items-center justify-center text-white'>
        <h1 className='teste text-6xl font-semibold text-center text-transparent'>
          Welcome to
        </h1>
        <p className='hover:border-primary-500 px-2 py-10 text-6xl font-bold text-white transition-all duration-1000 ease-in-out border-t-8 border-b-8 border-l-8 rounded-full cursor-pointer'>
          AKIO
        </p>
        <button className='hover:bg-white hover:text-primary-900 hover:broder-primary-500 px-8 py-2 mt-10 text-xl font-semibold text-white transition-all duration-500 ease-in-out bg-transparent border border-white rounded-full'>
          Look At Our Menu
        </button>
      </div>
    </div>
  );
}
