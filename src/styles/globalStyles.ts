import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    // Reset basic elements dom
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    img{
        max-width: 100%;
        display: block;
        object-fit: cover;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    // Tipografy
    .font-1-xs {
        font: 400 0.75rem/1.35 "Poppins", sans-serif;
    }

    .font-2-xs {
        font: 400 0.875rem/1.43 "Roboto", sans-serif;
    }

    .font-1-s {
        font: 400 1rem/1.5 "Poppins", sans-serif;
    }

    .font-2-s {
        font: 400 1rem/1.5 "Roboto", sans-serif;
    }

    .font-1-m,
    .font-1-m-b {
        font: 400 1.125rem/1.35 "Poppins", sans-serif;
    }

    .font-1-m-b {
        font-weight: 600;
    }

    .font-2-m {
        font: 500 1.125rem/1.35 "Roboto", sans-serif;
    }

    .font-1-l {
        font: 400 1.5rem/1.5 "Poppins", sans-serif;
    }

    .font-2-l,
    .font-2-l-b {
        font: 400 1.5rem/1.5 "Roboto", sans-serif;
    }

    .font-2-l-b {
        font-weight: 500;
        letter-spacing: 0.015em;
        text-transform: uppercase;
    }

    .font-1-xl {
        font: 600 2rem/1.25 "Poppins", sans-serif;
    }

    .font-2-xl {
        font: 500 2rem/1.25 "Roboto", sans-serif;
    }

    .font-1-xxl {
        font: 600 4rem/1.125 "Poppins", sans-serif;
    }

    @media (max-width: 1200px) {
        .font-1-xxl {
            font-size: 3rem;
        }
        .font-2-l,
        .font-2-l-b {
            font-size: 1.125rem;
        }
    }

    @media (max-width: 800px) {
        .font-1-xxl {
            font-size: 2rem;
        }
        .font-1-xl,
        .font-2-xl {
            font-size: 1.5rem;
        }
    }

    // Container
    .container{
        max-width: 1200px;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    // User
    .subtitleSectionUser{
        color: #8877ff;
        font-size: 2.5rem !important;

        margin-bottom: 1.875rem;

        &::after {
            content: '.';
            color: ${(props) => props.theme.colors.text};
        }

        @media (max-width: 600px){
            @media (max-width: 600px) {
                font-size: 1.625rem !important;
            }
        }
    }
    
`;

export default GlobalStyles;
