import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ApartmentDataKey } from '../../types/type';
import { FormFields } from '../../types/type';
import { useAppDispatch } from '../../hook';
import { addFormData } from '../../store/formSlice';
import { showInfoMessage } from '../../store/formSlice';
import cardData from '../../data/data';

import Select from './select';
import Range from './range';
import Input from './input';
import RadioButton from './radioButton';
import Button from './button';
import Upload from './upload';
import ModalMessage from './message/modalMessage';

const Form: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>();

  const createDataArray = (data: ApartmentDataKey): string[] => {
    const dataArray = cardData.map((apartment) => JSON.stringify(apartment[data]));
    const uniqueData = new Set(dataArray);
    return [...uniqueData];
  };

  const closeMessage = (): void => {
    setTimeout(() => dispatch(showInfoMessage(false)), 1000);
  };

  const submitForm = async (data: FormFields) => {
    const correctData = Object.assign(data, {
      file: URL.createObjectURL((data.file as FileList)[0]),
    }) as FormFields;
    dispatch(addFormData(correctData));
    closeMessage();
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
        validationSchema={{ required: 'Please choose the date' }}
        required={true}
      />
      <Input
        name="pets"
        type="checkbox"
        labelName="With pets"
        errors={errors}
        register={register}
        required={false}
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
        validationSchema={{
          required: 'Please write name',
          pattern: {
            value: /[А-ЯA-Z]\w{4,}/,
            message: 'Name must be capitalized and more than 4 letters',
          },
        }}
        required={true}
      />
      <Input
        name="email"
        type="email"
        placeholder="example@gmail.com"
        labelName="Your email"
        errors={errors}
        register={register}
        validationSchema={{ required: 'Please write your email' }}
        required={true}
      />
      <Upload
        name="file"
        errors={errors}
        register={register('file', { required: 'Please upload the file' })}
      />
      <Button type="submit" buttonName="Send me" />
      <ModalMessage />
    </form>
  );
};

export default Form;
