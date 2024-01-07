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

export const hovered = css`
  background-color: rgb(35 203 35 / 30%);
`;
