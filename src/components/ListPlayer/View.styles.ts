import { css } from "@emotion/react";

export const containerUser = css`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  background-color: white;
  border-radius: 12px;
  margin-bottom: 8px;
  box-shadow: 1px 1px 1px rgb(128 128 128 / 14%);
`;

export const active = css`
  box-shadow: 3px 5px 7px 0px rgb(128 128 128 / 14%);
  background-color: rgb(240 171 0 / 33%);
  border: 3px solid rgb(205 163 3);
`;
export const userImage = css`
  border-radius: 100%;
  background-color: rgb(243 243 243);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const userName = css`
  font-family: "Lato", sans-serif;
  color: black;
  font-weight: semi-bold;
  font-size: 22px;
  margin: 0 0 12px;
`;

export const userText = css`
  font-family: "Lato", sans-serif;
  color: black;
  font-size: 14px;
  margin: 0;
`;
