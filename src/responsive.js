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

export const desktop4 = (props) => {
  return css`
  @media only screen and (max-width: 1280px) {
    ${props}
  }
`;
}


export const desktop2 = (props) => {
  return css`
  @media only screen and (max-width: 1100px) {
    ${props}
  }
`;
}


export const desktop3 = (props) => {
  return css`
  @media only screen and (max-width: 1000px) {
    ${props}
  }
`;
}

export const mobile1 = (props) => {
  return css`
  @media only screen and (max-width: 950px) {
    ${props}
  }
`;
}

export const mobile3 = (props) => {
  return css`
  @media only screen and (max-width: 600px) {
    ${props}
  }
`;
}


export const mobile10 = (props) => {
  return css`
  @media only screen and (max-width: 500px) {
    ${props}
  }
`;
}


export const mobile2 = (props) => {
  return css`
  @media only screen and (max-width: 420px) {
    ${props}
  }
`;
}



export const mobile4 = (props) => {
  return css`
  @media only screen and (max-width: 381px) {
    ${props}
  }
`;
}

export const desktop = (props) => {
    return css`
    @media only screen and (min-width: 871px) {
      ${props}
    }
  `;
}