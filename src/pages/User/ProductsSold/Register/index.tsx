/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { productAnnounce } from '../../../../store/productReducer';
import useControlRedux from '../../../../hooks/useControlRedux';
import useInput from '../../../../hooks/useInput';

import Input from '../../../../components/Form/Input';
import Loader from '../../../../components/Loader';
import Subtitle from '../../../../components/Subtitle';
import ToastError from '../../../../components/ToastError';

import * as C from './styles';

interface PhotoData {
  name: string
  file: File
}

const Register = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValuePrice, ...price } = useInput('');
  const { setValue: setValueDescription, ...description } = useInput('');
  const { setValue: setValuePhotos, ...photos } = useInput(null);
  const [dataPhotos, setDataPhotos] = React.useState<PhotoData[]>([]);
  const [orientationPhotos, setOrientationPhotos] = React.useState<null | string>(null);
  const navigate = useNavigate();

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);

  const validateInputs = (): boolean => {
    const inputsText = name.validateAt() && price.validateAt() && description.validateAt();
    const photosAmount = dataPhotos.length === 3;

    const validate = !!(inputsText && photosAmount);

    return validate;
  };

  const handleSaleProduct = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (validateInputs()) {
      const dataProduct = {
        name: name.value,
        price: price.value,
        description: description.value,
        photos: dataPhotos,
      };
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const idUser = data.information!.id;

      try {
        await dispatch(productAnnounce({ dataProduct, id: idUser }));
      } catch (errorAnnounce) {
        navigate('/pageNotFound');
      } finally {
        setValueName('');
        setValuePrice('');
        setValueDescription('');
        setDataPhotos([]);
      }
    }
  };

  const onChangeFiles = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const element = e.target;
    const filesPhoto = element.files;

    if (filesPhoto) {
      const captureData: PhotoData = {
        name: filesPhoto[0].name,
        file: filesPhoto[0],
      };
      setDataPhotos([...dataPhotos, captureData]);

      element.value = '';
      toast.success('Imagem adiciona com sucesso.');
    }
  };

  const clearPhotos = (): void => {
    setDataPhotos([]);
    toast.success('Todas as fotos foram removidas. Adicione fotos novas.');
  };

  React.useEffect(() => {
    const l = dataPhotos.length;

    if (!l) setOrientationPhotos('Adicione uma foto frontal do produto. 1/3.');
    else if (l === 1) setOrientationPhotos('Adicione uma foto traseira do produto. 2/3.');
    else setOrientationPhotos('Adicione uma foto ampla do produto. 3/3.');
  }, [dataPhotos]);

  return (
    <C.Register className="container">
      <Subtitle text="Anuncie seus produtos" />
      <C.FormAddProduct onSubmit={handleSaleProduct}>
        <Input label="Nome" name="nome" type="text" {...name} />
        <Input label="Preco (R$)" name="price" type="text" {...price} />
        <div>
          <Input
            label="Fotos"
            name="photos"
            type="file"
            {...photos}
            onChange={onChangeFiles}
            disabled={dataPhotos.length >= 3}
          />
          <C.ContainerActionsFiles>
            {/* eslint-disable-next-line max-len */}
            {dataPhotos.length > 0 && <C.ButtonClearPhotos onClick={clearPhotos}>Limpar</C.ButtonClearPhotos>}
            <C.Orientation className="font-2-xs" amountPhotos={dataPhotos.length}>
              {orientationPhotos}
            </C.Orientation>
          </C.ContainerActionsFiles>
        </div>
        <Input label="Descrição" name="description" type="text" {...description} />
        <button className="basicStyleButtonOrLink" type="submit">
          Vender
        </button>
      </C.FormAddProduct>
      <ToastError />
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
    </C.Register>
  );
};

export default Register;
