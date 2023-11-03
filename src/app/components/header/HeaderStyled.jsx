import styled from "styled-components";
import colors from "../../constants/colors";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`;

export const RangeLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px;
`;

export const Logo = styled.div`
  width: 100px;
`;

export const RangeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #e6f3ff;
  margin-bottom: 20px;
  width: 100%;
  height: 20rem;

  .text-leadster-400 {
    font-weight: bold;
    color: ${colors.blue};
    font-size: 10px;
    text-transform: uppercase;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
    border: 2px solid ${colors.blue};
    border-radius: 9% 7% 7% 2% / 23% 45% 51% 5%;
    padding: 5px 10px 5px 10px;
  }
  .text-transparent {
    color: transparent;
    background-image: linear-gradient(
      to right,
      ${colors.blue} 0%,
      ${colors.blue} 70%
    );
    -webkit-background-clip: text;
    background-clip: text;
  }
  .text-3xl {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .slogan {
    position: absolute;
    top: 1px;
    right: -5px;
    width: 15px;
    height: 10px;
  }
  .text-base {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.black};
    margin-top: 10px;
  }
  @media screen and (max-device-width: 480px) {
    height: auto;
    padding: 20px;
    margin-bottom: 10px;

    .text-leadster-400 {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
    .text-3xl {
      font-size: 24px;
    }
    .text-base {
      font-size: 14px;
    }
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  @media screen and (max-device-width: 480px) {
    font-size: 24px;
  }
`;

export const HeaderSubtitle = styled.p`
  font-size: 58px;
  font-weight: bold;
  color: ${colors.blue};
  padding-bottom: 10px;
  @media screen and (max-device-width: 480px) {
    font-size: 40px;
  }
`;

export const HeaderDescription = styled.p`
  font-size: 12px;
  font-weight: 700;
  .header-description {
    font-weight: 800;
    margin-left: 3px;
  }
  @media screen and (max-device-width: 480px) {
    font-size: 10px;
  }
`;

export const HeaderDivider = styled.div`
  height: 1px;
  background-color: ${colors.black};
  opacity: 0.2;
  width: 120%;
  margin: 20px -10% 5px -10%;
  @media screen and (max-device-width: 480px) {
    width: 100%;
    margin: 10px 0 5px 0;
  }
`;
