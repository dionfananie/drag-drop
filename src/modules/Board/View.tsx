import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import * as css from "./View.styles";
import Tiles from "../../components/Tiles";
import TilesImage from "../../components/TilesImage";

const Board = () => {
  const arrBoard = new Array(72).fill(Math.random());
  return (
    <div className="wrapper">
      <div className="wrapper-in">
        <TilesImage />
      </div>

      <div className="wrapper-transform">
        <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0} disabled maxScale={10}>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <div className="tools">
                <button type="button" onClick={() => zoomIn()}>
                  Zoom In
                </button>
                <button type="button" onClick={() => zoomOut()}>
                  Zoom Out
                </button>
                <button type="button" onClick={() => resetTransform()}>
                  Reset
                </button>
              </div>
              <TransformComponent>
                <div css={css.board} id="text">
                  {arrBoard.map((_, idx) => {
                    return <Tiles key={`tiles-${idx}`} ids={`div${idx + 1}`} />;
                  })}
                </div>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default Board;
