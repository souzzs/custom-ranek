/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { userTransaction } from '../../../store/userReducer';
import useControlRedux from '../../../hooks/useControlRedux';
import useInput from '../../../hooks/useInput';

import Input from '../../../components/Form/Input';

import * as C from './styles';

interface IFormPurchaseProps {
  showFormPurchase: boolean
  setShowFormPurchase: React.Dispatch<React.SetStateAction<boolean>>
}

// eslint-disable-next-line max-len
const FormPruchase = ({ showFormPurchase, setShowFormPurchase }: IFormPurchaseProps): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValueCep, ...cep } = useInput('');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const { setValue: setValueCity, ...city } = useInput('');
  const { setValue: setValueState, ...stateUf } = useInput('');

  const { href: hrefProduct } = window.location;
  const { colors } = React.useContext(ThemeContext);
  const navigate = useNavigate();

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);

  const accomplishTransaction = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (data.information && types.page) {
      const dataPurchase = {
        comprador_id: data.information.id,
        vendedor_id: types.page.usuario_id,
        produto: types.page,
        endereco: data.information,
      };

      try {
        await dispatch(userTransaction(dataPurchase));
        navigate('/user/purchases');
      } catch (error) {
        navigate('/');
      }
    }
  };

  React.useEffect(() => {
    if (data.information) {
      const {
        nome,
        email: emailInformation,
        cep: cepInformation,
        numero,
        rua,
        bairro,
        cidade,
        estado,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      } = data.information!;

      setValueName(nome);
      setValueEmail(emailInformation);
      setValueCep(cepInformation);
      setValueRoad(rua);
      setValueNumber(numero);
      setValueDistrict(bairro);
      setValueCity(cidade);
      setValueState(estado);
    }
  }, [
    data.information,
    setValueCep,
    setValueCity,
    setValueDistrict,
    setValueEmail,
    setValueName,
    setValueNumber,
    setValueRoad,
    setValueState,
  ]);

  return (
    <C.Purchase show={showFormPurchase}>
      <C.TitlePurchase className="font-1-xl">Informações de Envio</C.TitlePurchase>
      <C.DescriptionPurchase className="font-2-s">
        <p>
          {/* eslint-disable-next-line max-len */}
          Leia o QR CODE para ganhar o frete grátis. Enviamos com desconto para as sgeuintes regiões: Nordeste, Sudeste,
          Centro Oeste e Sul. Fique antento ao confirmar sua compra.
        </p>
        <QRCodeSVG value={hrefProduct} bgColor={colors.primary} fgColor="#8877ff" size={125} />
      </C.DescriptionPurchase>
      <C.FormPurchase onSubmit={accomplishTransaction}>
        <Input label="Nome" name="name" {...name} />
        <Input label="Email" name="email" type="email" {...email} />
        <Input label="Cep" name="cep" {...cep} />
        <Input label="Rua" name="road" {...road} />
        <Input label="Número" name="number" {...number} />
        <Input label="Bairro" name="district" {...district} />
        <Input label="Cidade" name="city" {...city} />
        <Input label="Estado" name="state" {...stateUf} />
        <C.Buttons>
          <button className="basicStyleButtonOrLink" type="submit">
            Finalizar compra
          </button>
          <button className="basicStyleButtonOrLink" type="button" onClick={() => setShowFormPurchase(false)}>
            Cancelar compra
          </button>
        </C.Buttons>
      </C.FormPurchase>
    </C.Purchase>
  );
};

export default FormPruchase;
