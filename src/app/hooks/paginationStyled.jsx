import styled from "styled-components";
import colors from "../constants/colors";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width: 70vw;
`;
export const PageNumber = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ selected }) => (selected ? `${colors.blue}` : `${colors.black}`)};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  border: ${({ selected }) => (selected ? `1px solid ${colors.blue}` : `none`)};
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    color: ${colors.blue};
  }
`;
export const PageLabel = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;
export const NavigationButton = styled.div`
  margin: 5px;
&:hover {
 cursor: pointer;
  color: ${colors.blue};
}
`;
