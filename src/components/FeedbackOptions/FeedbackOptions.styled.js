import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 10px;

  :nth-child(1) {
    color: green;
  }
  :nth-child(2) {
    color: blue;
  }
  :nth-child(3) {
    color: red;
  }
`;
