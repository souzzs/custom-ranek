import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Form = styled.form`
  width: 100%;

  padding: 3.75rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.875rem;

  @media (max-width: 800px) {
    padding: 1.875rem 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PositionColumn = styled.div`
  grid-column: 1/2;
`;
