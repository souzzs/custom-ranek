import styled from 'styled-components';

interface ICustomList {
  show: boolean
}

export const ListProperties = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: grid;
  gap: 1.875rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const CustomList = styled(List)<ICustomList>`
  display: ${(props) => (props.show ? 'grid' : 'none')};
`;
