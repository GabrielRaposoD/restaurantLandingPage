export function Hero() {
  return (
    <div className='over-flow-hidden relative z-40 flex flex-row items-center justify-center max-h-screen min-h-screen'>
      <div className='absolute top-0 z-0 max-h-screen min-h-screen overflow-hidden bg-black'>
        <img src='img/bg.jpg' alt='' className='overflow-hidden opacity-50' />
      </div>

      <div className='realative z-30 flex flex-col items-center justify-center text-white'>
        <h1 className='teste text-6xl font-semibold text-center'>
          Welcome to <br />
          <span className='teste font-bold text-transparent border-t-4 border-b-4 cursor-pointer'>
            AKIO
          </span>
        </h1>
        <button className='hover:bg-white hover:text-transparent hover:broder-primary-500 px-4 py-2 mt-10 text-xl font-semibold text-white transition-all duration-500 ease-in-out bg-transparent border border-white rounded-lg'>
          Look At Our Menu
        </button>
      </div>
    </div>
  );
}
