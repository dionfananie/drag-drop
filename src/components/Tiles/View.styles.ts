import { css } from "@emotion/react";

const tile = "120px";

export const boardItemTiles = css`
  position: relative;
  height: ${tile};
  width: ${tile};
  border: 1px dashed gray;
  display: inline-block;
  margin: 0;
  img {
    height: ${tile};
    width: ${tile};
  }
  &:hover {
  }
`;

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

export const hovered = css`
  background-color: rgb(35 203 35 / 30%);
`;
