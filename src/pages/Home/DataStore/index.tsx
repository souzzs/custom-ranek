import React from 'react';

import * as C from './styles';

const DataStore = (): JSX.Element => (
  <C.DataStore>
    <C.Shadow />
    <C.Container>
      <C.NumberData>
        <C.TextNumber>1500</C.TextNumber>
        <C.TextInformation>vendas</C.TextInformation>
      </C.NumberData>
      <C.NumberData>
        <C.TextNumber>6890</C.TextNumber>
        <C.TextInformation>dias</C.TextInformation>
      </C.NumberData>
      <C.NumberData>
        <C.TextNumber>965</C.TextNumber>
        <C.TextInformation>trabalhadores</C.TextInformation>
      </C.NumberData>
      <C.NumberData>
        <C.TextNumber>80</C.TextNumber>
        <C.TextInformation>caminhões</C.TextInformation>
      </C.NumberData>
    </C.Container>
  </C.DataStore>
);

export default DataStore;