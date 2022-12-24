import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12.5rem;
  background: ${props => props.theme['gray-700']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    polyline {
      stroke: ${props => props.theme.blue};
    }

    line {
      stroke: ${props => props.theme.purple};
    }
  }
`