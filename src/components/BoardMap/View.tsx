import React, { ReactNode } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import * as css from "./View.styles";
import Controls from "./components/Controls";

const Board = ({ children }: { children: ReactNode }) => {
  return (
    <div css={css.WrapperBoard}>
      <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0} disabled maxScale={10}>
        <Controls />
        <TransformComponent>{children}</TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Board;
