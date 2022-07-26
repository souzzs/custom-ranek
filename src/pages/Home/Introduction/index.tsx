import React from 'react';
import { Link } from 'react-router-dom';

import useMedia from '../../../hooks/useMedia';

import Title from '../../../components/Title';

import imageEmphasis from '../../../assets/introduction.png';

import * as C from './styles';

const Introduction = (): JSX.Element => {
  const changeMargin = useMedia('(max-width: 800px)');

  return (
    <C.Introduction>
      <C.Container className="container">
        <C.TextContent>
          <Title mB={changeMargin ? '1rem' : '2rem'} colorFixed>
            Produtos usados & originais
          </Title>
          <C.Description className="font-2-l">
            {/* eslint-disable max-len */}
            Na ranek prezamos sempre a segurança e a qualidade. Explore o mundo e economize com os melhores ofertadas.
          </C.Description>
          <Link to="/products" className="basicStyleButtonOrLink">
            Produtos
          </Link>
        </C.TextContent>
        <C.ImageEmphasis src={imageEmphasis} alt="Product example store" />
      </C.Container>
    </C.Introduction>
  );
};

export default Introduction;
