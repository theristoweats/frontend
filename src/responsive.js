import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 870px) {
      ${props}
    }
  `;
};

export const desktop1 = (props) => {
    return css`
    @media only screen and (max-width: 1088px) {
      ${props}
    }
  `;
}
