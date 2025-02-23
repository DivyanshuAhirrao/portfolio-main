const boxes = [2, -3, 2, -3]; // Rotation angles for each box

const Welcome = () => {
  return (
    <div className="h-screen w-full flex">
      <aside className="h-full w-2/5 bg-orange-400 flex flex-col items-center justify-around">
        <h2 className="text-5xl text-center pt-12 font-bold">Hello There</h2>
        <div className="bg-white text-xl font-mono font-bold h-96 w-80 flex items-center justify-center">
          I am FrontEnd Developer
        </div>
      </aside>
      <aside className="h-full w-3/5 bg-gray-500 grid grid-cols-2 gap-16 p-10">
        {boxes.map((angle, index) => (
          <div
            key={index}
            className={`bg-red-300 grid place-content-center text-6xl font-mono rotate-${angle}`}
          >
            BOX
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Welcome;
