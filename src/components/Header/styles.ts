import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

interface IButtonMenuMobile {
  active?: boolean
}

interface IElementMobile extends IButtonMenuMobile {
  mobile?: boolean
}

export const Header = styled.header`
  width: 100%;
  height: 117px;
  background-color: #000000;
  position: relative;
  position: fixed;
  z-index: 999;
  border-bottom: 0.063rem solid #111;

  @media (max-width: 696px) {
    height: 100px;
  }
`;

export const Alert = styled.div`
  background-color: #8877ff;
  color: #fff;
  padding: 0.25rem 0;
  text-align: center;
  font-size: 0.875rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 1.125rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-top: 1.125rem;
  padding-bottom: 1.125rem;

  @media (max-width: 696px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonMenuMobile = styled.button<IButtonMenuMobile>`
  width: 40px;
  height: 40px;
  background-color: #111;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.2s;
  border: none;
  border-radius: 0.25rem;

  &::after {
    width: 20px;
    height: 2px;

    display: block;
    content: '';
    border-radius: 0.125rem;
    color: #fff;
    background: currentColor;
    box-shadow: 0 7px currentColor, 0 -7px currentColor;
    transition: 0.2s;
  }

  ${(props) => {
    if (props.active) {
      return css`
        box-shadow: 0 0 0.188rem #8877ff;
        &::after {
          width: 4px;
          height: 4px;

          transform: rotate(-90deg);
          border-radius: 50%;
          color: #8877ff;
        }
      `;
    }

    return null;
  }}

  &:hover,
  &:focus {
    box-shadow: 0 0 0.188rem #8877ff;

    &::after {
      color: #8877ff;
    }
  }
`;

const animationMenu = keyframes`
    0%{
        opacity: 0;
        transform: translateX(50px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }
`;

export const Nav = styled.nav<IElementMobile>`
  display: ${(props) => {
    if (props.active || !props.mobile) {
      return 'flex';
    }
    return 'none';
  }};
  gap: 1.25rem;
  align-items: center;

  ${(props) => {
    if (props.mobile) {
      return css`
        background-color: #111;
        padding: 0.75rem 1.5rem;
        border-radius: 0.25rem;
        box-shadow: 0 0 0.188rem #8877ff;

        position: absolute;
        z-index: 999;
        top: 100px;
        right: 20px;
        animation: ${animationMenu} 0.2s forwards;
      `;
    }

    return null;
  }}
`;

export const ListMenu = styled.ul<IElementMobile>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 1rem 1.875rem;

  & li {
    font-family: inherit;
  }

  & li > a {
    padding: 1rem 0px;
  }

  ${(props) => {
    if (props.mobile) {
      return css`
        flex-direction: column;
        gap: 1rem 2.5rem;

        & li > a {
          padding: 0;
        }

        & li > a::after {
          display: none !important;
        }
      `;
    }

    return null;
  }}
`;

export const LinkCustom = styled(Link)`
  display: inline-block;

  position: relative;

  color: #fff;
  font-family: inherit;

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    width: 0px;
    height: 2px;
    content: '';
    display: block;
    background-color: #8877ff;
    margin-top: 0.25rem;
    position: absolute;

    transition: 0.2s;
  }
`;

export const LinkAccount = styled(Link)`
  color: #fff;
  font-family: inherit;

  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem !important;
  background-color: #8877ff;
  border-radius: 0.25rem;

  transition: 0.2s;

  &:hover {
    background-color: #6655dd;
  }
`;

export const LiThemeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
