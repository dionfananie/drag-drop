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
    background-color: rgba(248, 0, 0, 0.3);
  }
`;
