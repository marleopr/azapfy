import styled from "styled-components";
import colors from "../../constants/colors"

export const ChatContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
`;
export const ChatModal = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  border-radius: 10px;
  border-top: 30px solid ${colors.blue};
  background-color: ${colors.white};
`;
export const ChatCloseButton = styled.button`
  position: absolute;
  outline: none;
  font-size: 20px;
  top: 1px;
  right: 10px;
  border: none;
  color: ${colors.gray};
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: ${colors.blue};
  }
`;
export const ChatMsg = styled.p`
  background-color: #f0f0f0;
  color: ${colors.black};
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 20px;
  border: none;
  width: 18rem;
  p{
    font-size: 10px;
  }
`;
export const ChatButton = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0777e8;
  }
`;
