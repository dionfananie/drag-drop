import { css } from "@emotion/react";

const tile = "120px";

export const tileControl = css`
  position: absolute;
  height: 100%;
  width: 100%;
  border: 1px dashed gray;
  display: inline-block;
  background-color: rgb(0 0 0 / 30%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  z-index: 1;
`;

export const wrapperTiles = css`
  position: absolute;
  cursor: grab;
`;
export const tileItem = css`
  width: 120px;
  height: 120px;
  background-color: rebeccapurple;
  pointer-events: none;
  width: ${tile};
  height: ${tile};
`;

export const degreeItem = (degree: number) => css`
  rotate: ${degree}deg;
`;
