import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="container w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
            <button
              onClick={() => setColor("red")}
              className="uppercase outline-none px-4 rounded-full text-white tracking-wider shadow-lg"
              style={{ background: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="uppercase outline-none px-4 rounded-full text-white tracking-wider shadow-lg"
              style={{ background: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="uppercase outline-none px-4 rounded-full text-white tracking-wider shadow-lg"
              style={{ background: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("#FFE700")}
              className="uppercase outline-none px-4 rounded-full text-black tracking-wider shadow-lg "
              style={{ background: "#FFE700" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("#BCF2F6")}
              className="uppercase outline-none px-4 rounded-full text-black tracking-wider shadow-lg"
              style={{ background: "#BCF2F6" }}
            >
              Sky Blue
            </button>
            <button
              onClick={() => setColor("#72BF78")}
              className="uppercase outline-none px-4 rounded-full text-white tracking-wider shadow-lg"
              style={{ background: "#72BF78" }}
            >
              ligth Green
            </button>
            <button
              onClick={() => setColor("#E78F81")}
              className="uppercase outline-none px-4 rounded-full text-white tracking-wider shadow-lg"
              style={{ background: "#E78F81" }}
            >
              Light Brown
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
