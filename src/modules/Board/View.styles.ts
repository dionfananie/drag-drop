import { css } from "@emotion/react";

const tile = "120px";

export const board = css`
  width: 1080px;
  height: 960px;
  display: grid;
  grid-template-columns: repeat(9, ${tile});
  grid-template-rows: repeat(8, ${tile});
  background: rgb(219, 219, 219);
  border: 5px solid black;
  margin: auto;
`;
