import styled, { css } from 'styled-components';

interface ITitleStyle {
  mB: string | undefined
  colorFixed: boolean | undefined
}

export const Title = styled.h1<ITitleStyle>`
  ${({ mB }) => css`
    margin-bottom: ${mB};
  `}
  position: relative;
  color: ${(props) => (props.colorFixed ? '#fff' : props.theme.colors.text)};
`;

export const Decoration = styled.p`
  font-family: inherit;
  color: #8877ff;
  position: absolute;
  display: inline-block;
`;
