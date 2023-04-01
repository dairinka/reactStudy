import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ApartmentDataKey, ApartmentData } from '../../types/type';
import { FormCardData, StateType } from '../../types/type';
import Select from './select';
import Range from './range';
import Input from './input';
import RadioButton from './radioButton';
import Button from './button';
import Upload from './upload';
import ModalMessage from './message/modalMessage';

export interface IFormProps {
  dataList: ApartmentData[];
  showCard: (newData: FormCardData) => void;
}

export type FormFields = {
  city: string;
  userName: string;
  email: string;
  state: StateType;
  maxPrice: string;
  pets: boolean;
  startDate: string;
  file: FileList;
};

const Form: FC<IFormProps> = ({ dataList, showCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>();

  const [showMessage, setShowMessage] = useState(false);

  const createDataArray = (data: ApartmentDataKey): string[] => {
    const dataArray = dataList.map((apartment) => JSON.stringify(apartment[data]));
    const uniqueData = new Set(dataArray);
    return [...uniqueData];
  };

  const closeMessage = (): void => {
    setTimeout(() => setShowMessage(!showMessage), 1500);
  };

  const submitForm = async (data: FormFields) => {
    setShowMessage(true);
    closeMessage();
    const newData: FormCardData = {
      city: data.city,
      state: data.state,
      name: data.userName,
      email: data.email,
      maxPrice: data.maxPrice,
      pets: data.pets,
      startDate: data.startDate,
      file: data.file[0],
    };
    showCard(newData);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(submitForm)}>
      <Select
        name="city"
        cityArray={createDataArray('city')}
        errors={errors}
        register={register('city', { required: 'Please select the city' })}
      />
      <Range
        name="maxPrice"
        priceArray={createDataArray('price')}
        errors={errors}
        register={register('maxPrice')}
      />
      <Input
        name="startDate"
        type="date"
        labelName="Start from date"
        errors={errors}
        register={register}
        rules={{ required: true, errorMessage: 'Please choose the date' }}
      />
      <Input
        name="pets"
        type="checkbox"
        labelName="With pets"
        errors={errors}
        register={register}
        rules={{ required: false }}
      />
      <RadioButton
        errors={errors}
        register={register('state', { required: 'Please select option' })}
      />
      <Input
        name="userName"
        type="text"
        placeholder="Tony"
        labelName="Your name"
        errors={errors}
        register={register}
        rules={{ required: true, errorMessage: 'Please write correct name' }}
      />
      <Input
        name="email"
        type="email"
        placeholder="example@gmail.com"
        labelName="Your email"
        errors={errors}
        register={register}
        rules={{ required: true, errorMessage: 'Please write your email' }}
      />
      <Upload errors={errors} register={register('file', { required: 'Please upload the file' })} />
      <Button type="submit" buttonName="Send me" />
      <ModalMessage showMessage={showMessage} />
    </form>
  );
};

export default Form;
