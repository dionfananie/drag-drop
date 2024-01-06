import React, { DragEvent } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const Board = () => {
  function allowDrop(ev: DragEvent) {
    ev.preventDefault();
  }

  function drag(ev: DragEvent<HTMLDivElement>) {
    ev.dataTransfer.setData("text", (ev.target as HTMLDivElement).id);
  }

  function drop(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    const target = ev.target as HTMLDivElement;
    const data = ev.dataTransfer.getData("text");
    const el = document.getElementById(data);
    if (el) target.appendChild(el);
  }

  const arrBoard = new Array(72).fill(Math.random());
  return (
    <div className="wrapper">
      <div className="wrapper-in">
        <div id="images">
          <div id="drag4" className="tile-item" draggable="true" onDragStart={drag}></div>
          <div id="drag5" className="tile-item" draggable="true" onDragStart={drag}></div>
          <div id="drag6" className="tile-item" draggable="true" onDragStart={drag}></div>
          <div id="drag7" className="tile-item" draggable="true" onDragStart={drag}></div>
          <div id="drag8" className="tile-item" draggable="true" onDragStart={drag}></div>
          <div id="drag9" className="tile-item" draggable="true" onDragStart={drag}></div>
          <div id="drag10" className="tile-item" draggable="true" onDragStart={drag}></div>
          <div id="drag11" className="tile-item" draggable="true" onDragStart={drag}></div>
          <div id="drag12" className="tile-item" draggable="true" onDragStart={drag}></div>
        </div>
      </div>
      <div className="wrapper-transform">
        <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0} disabled maxScale={10}>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <div className="tools">
                <button
                  type="button"
                  onClick={() => zoomIn()}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Zoom In
                </button>
                <button
                  type="button"
                  onClick={() => zoomOut()}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Zoom Out
                </button>
                <button
                  type="button"
                  onClick={() => resetTransform()}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Reset
                </button>
              </div>
              <TransformComponent>
                <div className="board" id="text">
                  {arrBoard.map((_, idx) => {
                    return <div key={`tiles-${idx}`} id={`div${idx + 1}`} onDrop={drop} onDragOver={allowDrop}></div>;
                  })}
                </div>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
      {/* <div className="board" id="text">
        {arrBoard.map((_, idx) => {
          return <div key={`tiles-${idx}`} id={`div${idx + 1}`} onDrop={drop} onDragOver={allowDrop}></div>;
        })}
      </div> */}
    </div>
  );
};

export default Board;
