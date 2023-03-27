import { css } from "@emotion/react";

export const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 20px auto;
  width: 400px;
`;

export const Ul = css`
  border: 1px solid #dbdbdb;
  margin: 10px;

  display: flex;
  flex-direction: column;

  height: 200px;

  overflow: auto;
`;

export const Li = css`
  display: flex;
  justify-content: space-between;
  margin: 1px;
  border: 1px solid #dbdbdb;
`;
export const Header = css`
  text-align: center;
`;
