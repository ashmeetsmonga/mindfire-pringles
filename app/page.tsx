/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="w-full relative">
      {/* Logo */}
      <div className="fixed h-32 w-32 top-0 left-10 z-50">
        <img className="h-full w-full object-contain" src="/assets/images/logo.png" alt="logo" />
      </div>
      {/* MenuIcon */}
      <div className="fixed h-32 w-32 top-0 right-10 z-50">
        <img className="h-full w-full object-contain" src="/assets/images/menu-icon.png" alt="menu-icon" />
      </div>
      {/* Sky */}
      <div className="fixed top-0 left-0 h-screen w-full -z-10">
        <img className="h-full w-full object-cover" src="/assets/images/sky.png" alt="sky" />
      </div>
      {/* Greenery */}
      <div className="fixed bottom-0 w-full">
        <img className="h-full w-full object-cover" src="/assets/images/greenery.png" alt="greenery" />
      </div>
      {/* Pringles */}
      <div className="z-20 fixed bottom-6 left-1/2 -translate-x-1/2 flex items-end">
        <div className="h-[470px] -mr-8 blue-pringles-animation">
          <img className="h-full w-full object-contain" src="/assets/images/blue-pringles.png" alt="blue-pringles" />
        </div>
        <div className="h-[500px] z-10 green-pringles-animation">
          <img className="h-full w-full object-contain" src="/assets/images/green-pringles.png" alt="green-pringles" />
        </div>
        <div className="h-[470px] -ml-4 orange-pringles-animation">
          <img className="h-full w-full object-contain" src="/assets/images/orange-pringles.png" alt="orange-pringles" />
        </div>
      </div>
      <div className="relative h-screen">
        <div className="z-20 absolute bottom-0 left-[32%] h-48 w-48">
          <img className="h-full w-full object-cover" src="/assets/images/onions.png" alt="onions" />
        </div>
        <div className="z-20 absolute bottom-0 right-[32%] h-52 w-72">
          <img className="h-full w-full object-contain" src="/assets/images/chips.png" alt="chips" />
        </div>
        <div className="z-10 absolute -bottom-2 left-[49%] -translate-x-1/2">
          <img className="h-full object-cover" src="/assets/images/board.png" alt="board" />
        </div>
      </div>
      <div className="absolute top-[100vh] h-screen z-20 bg-green-200 w-full"></div>
      <div className="absolute top-[100vh] h-screen z-20 left-1/2 -translate-x-1/2">
        <img className="h-full w-full object-contain" src="/assets/images/bg-chips.png" alt="bg-chips" />
      </div>
      <div className="absolute top-[200vh] h-screen z-30 bg-blue-200 w-full"></div>
      <div className="absolute top-[200vh] h-screen z-30 left-1/2 -translate-x-1/2">
        <img className="h-full w-full object-contain" src="/assets/images/bg-chips.png" alt="bg-chips" />
      </div>
      <div className="absolute top-[300vh] h-screen z-40 bg-orange-200 w-full"></div>
      <div className="absolute top-[300vh] h-screen z-40 left-1/2 -translate-x-1/2">
        <img className="h-full w-full object-contain" src="/assets/images/bg-chips.png" alt="bg-chips" />
      </div>
      <div className="h-screen z-20 sticky top-0 flex items-center justify-center">
        <p className="text-8xl font-black text-green-600 z-40">Sour Cream & Onion</p>
        <div className="absolute left-1/2 -translate-x-1/2 h-[500px] z-40">
          <img className="h-full w-full object-contain" src="/assets/images/green-pringles.png" alt="green-pringles" />
        </div>
      </div>
      <div className="h-screen z-30 sticky top-0 flex items-center justify-center">
        <p className="text-8xl font-black text-blue-600 z-40">Cheddar Cream & Onion</p>
        <div className="absolute left-1/2 -translate-x-1/2 h-[500px] z-40">
          <img className="h-full w-full object-contain" src="/assets/images/blue-pringles.png" alt="blue-pringles" />
        </div>
      </div>
      <div className="h-screen z-40 sticky top-0 flex items-center justify-center">
        <p className="text-8xl font-black text-orange-600 z-40">Cheddar Cheese</p>
        <div className="absolute left-1/2 -translate-x-1/2 h-[500px] z-40">
          <img className="h-full w-full object-contain" src="/assets/images/orange-pringles.png" alt="orange-pringles" />
        </div>
      </div>
    </div>
  );
}
