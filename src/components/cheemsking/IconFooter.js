import styled from "styled-components";

export default function IconFooter({ color, children }) {
  return <StyledIcon background={color}>{children}</StyledIcon>;
}

const StyledIcon = styled.div`
  height: 90px;
  width: 90px;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
