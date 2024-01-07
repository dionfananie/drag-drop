import { css } from "@emotion/react";

const tile = "120px";

export const title = css`
  font-family: "Cinzel", serif;
  font-size: 48px;
  color: rgb(70 70 70);
  margin: 12px 8px 8px;
  font-weight: bold;
`;

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

export const wrapperList = css`
  width: 100%;
  padding: 16px 0 16px 0;
`;

export const wrapperStack = css`
  position: relative;
  display: block;
  z-index: 1;
  width: 120px;
  height: 120px;
`;

export const wrapperBoard = css`
  display: grid;
  grid-template-columns: 1080px auto;
  gap: 16px;
`;
