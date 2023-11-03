import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const RangeButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 600;
  width: 100%;
  @media screen and (max-device-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Button = styled.button`
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid #007eff;
    color: #007eff;
  }
  &:active {
    color: #ffffff;
    background-color: #007eff;
  }
  @media screen and (max-device-width: 480px) {
    width: 12rem;
  }
`;
export const SelectInput = styled.select`
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  margin: 5px;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    border: 1px solid #007eff;
    color: #007eff;
  }
`;
export const RangeSelect = styled.div`
  margin-left: 5rem;
  @media screen and (max-device-width: 480px) {
    margin-left: 0;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
