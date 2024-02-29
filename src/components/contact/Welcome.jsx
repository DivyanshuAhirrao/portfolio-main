import React from "react";

const Welcome = () => {
  return (
    <div className="h-[100vh] w-[100%] flex">
      <aside className="h-[100%] w-[40%] bg-orange-400 flex justify-around items-center flex-col">
        <h2 className="text-[50px] text-center pt-[50px] font-bold">Hello There</h2>
        <div className="bg-white text-[20px] font-mono font-bold h-[400px] w-[320px] flex justify-center items-center">
            I am FrontEnd Developer
        </div>
      </aside>
      <aside className="h-[100%] w-[60%] bg-gray-500 grid grid-cols-2 gap-16 px-20 py-10">
        <div className="bg-red-300 grid place-content-center text-[60px] font-mono rotate-2"> BOX</div>
        <div className="bg-red-300 grid place-content-center text-[60px] font-mono -rotate-3"> BOX</div>
        <div className="bg-red-300 grid place-content-center text-[60px] font-mono rotate-2"> BOX</div>
        <div className="bg-red-300 grid place-content-center text-[60px] font-mono -rotate-3"> BOX</div>
      </aside>
    </div>
  );
};

export default Welcome;
