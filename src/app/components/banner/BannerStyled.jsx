import styled from "styled-components";
import Image from "next/image";
import colors from "../../constants/colors";

export const GraphicBannerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  background-color: #e6f3ff;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
`;

export const SquareOverlay = styled.div`
  position: absolute;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 7rem;
  transform: rotate(45deg);
  top: 40px;
  left: -72px;
  background-color: #e6f3ff;
`;

export const GraphicImage = styled(Image)`
  width: 32rem;
  z-index: 1;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-left: 1.5rem;

  @media (min-width: 1024px) {
    padding-left: 6rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 1.8rem;
  @media (min-width: 1024px) {
    text-align: left;
  }

  h3 {
    text-align: center;
    @media (min-width: 1024px) {
      text-align: left;
    }
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: lg;
  margin-top: 0.5rem;
  margin-bottom: 0.625rem;
  @media (min-width: 1024px) {
    text-align: left;
  }

  .font-bold {
    br.hidden {
      display: inline;
    }
  }
`;

export const BorderSeparator = styled.div`
  gap: 1.25rem;
  padding-top: 1.5rem;
  border-top-width: 2px;
  border-color: rgba(0, 0, 0, 0.2);
  @media (min-width: 1024px) {
    flex-direction: row;
    padding-top: 1.5rem;
  }
`;

export const ButtonAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1.25rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 0;
  }
`;

export const ButtonDemo = styled.button`
  font-size: 12px;
  font-weight: 600;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  color: ${colors.white};
  background-color: ${colors.blue};
  &:hover {
    border: 1px solid ${colors.blue};
    color: ${colors.blue};
    background-color: ${colors.white};
  }
`;

export const CustomImage = styled(Image)`
  margin-top: 2rem;
  @media (min-width: 1024px) {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    margin-right: 5px;
  }
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;
