import * as React from 'react';
import Select from './select';
import Range from './range';
import Input from './input';
import RadioButton from './radioButton';
import { ApartmentDataKey, ApartmentData, FormCardData } from '../../types/type';
import { StateType } from '../../types/type';
import Button from './button';
import Upload from './upload';
import ModalMessage from './modal/modalMessage';
import ErrorFormMessage from './errorMessage/errorFormMessage';

export interface IFormProps {
  data: ApartmentData[];
  showCard: (newData: FormCardData[]) => void;
}
interface IErrorState {
  [key: string]: boolean;
}

type formState = { formData: FormCardData; showMessage: boolean; showError: IErrorState };

export default class Form extends React.Component<IFormProps, formState> {
  state = {
    formData: {},
    showMessage: false,
    showError: { city: false, radio: false, name: false, email: false, file: false },
  };
  initialSetError: IErrorState = this.state.showError;
  arrayFormData: FormCardData[] = [];
  cityRef = React.createRef<HTMLSelectElement>();
  priceRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  petRef = React.createRef<HTMLInputElement>();
  stateRef = React.createRef<HTMLDivElement>();
  nameRef = React.createRef<HTMLInputElement>();
  emailRef = React.createRef<HTMLInputElement>();
  fileRef = React.createRef<HTMLInputElement>();
  formRef = React.createRef<HTMLFormElement>();

  createDataArray = (data: ApartmentDataKey): string[] => {
    const dataArray = this.props.data.map((apartment) => JSON.stringify(apartment[data]));
    const uniqueData = new Set(dataArray);
    return [...uniqueData];
  };

  submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const state = [...(this.stateRef.current?.childNodes as NodeListOf<HTMLInputElement>)].filter(
      (el) => el.checked === true
    );
    const choseState = state.length !== 0 ? state[0].value : '';
    const newData: FormCardData = {
      city: this.cityRef.current?.value as string,
      state: choseState as StateType,
      name: this.nameRef.current?.value as string,
      email: this.emailRef.current?.value as string,
      maxPrice: this.priceRef.current?.value as string,
      pets: this.petRef.current?.checked as boolean,
      startDate: this.dateRef.current?.value as string,
      file: this.fileRef.current?.files ? (this.fileRef.current.files[0] as File) : null,
    };
    this.formValidate(newData);
  };

  closeMessage = (): void => {
    setTimeout(() => this.setState({ showMessage: !this.state.showMessage }), 1500);
  };

  clearForm = () => {
    this.formRef.current?.reset();
  };

  formValidate = async (data: FormCardData) => {
    const correctName = data.name ? data.name.charAt(0).toUpperCase() + data.name.slice(1) : null;
    const errObj: IErrorState = {};
    if (!data.city) errObj.city = true;
    if (!data.state) errObj.radio = true;
    if (
      !data.name ||
      data.name.length < 3 ||
      typeof data.name !== 'string' ||
      data.name !== correctName
    )
      errObj.name = true;
    if (!data.email) errObj.email = true;
    if (!data.file) errObj.file = true;
    if (Object.keys(errObj).length > 0) {
      this.setState({ showError: errObj });
    } else {
      await this.setState({
        formData: data,
        showMessage: !this.state.showMessage,
        showError: this.initialSetError,
      });
      this.arrayFormData = [...this.arrayFormData, this.state.formData];
      this.clearForm();
      this.props.showCard(this.arrayFormData);
      this.closeMessage();
    }
  };

  public render() {
    const currentDate = new Date().toLocaleDateString('en-CA');
    return (
      <form className="form" ref={this.formRef} onSubmit={this.submitForm}>
        <Select refer={this.cityRef} cityArray={this.createDataArray('city')} />
        <ErrorFormMessage message="please select option" showError={this.state.showError.city} />
        <Range refer={this.priceRef} priceArray={this.createDataArray('price')} />
        <Input refer={this.dateRef} type="date" inputName="Start from date" default={currentDate} />
        <Input refer={this.petRef} type="checkbox" inputName="With pets" />
        <RadioButton refer={this.stateRef} />
        <ErrorFormMessage message="please select option" showError={this.state.showError.radio} />
        <Input refer={this.nameRef} type="text" placeholder="Tony" inputName="Your name" />
        <ErrorFormMessage
          message="please write correct name"
          showError={this.state.showError.name}
        />
        <Input
          refer={this.emailRef}
          type="email"
          placeholder="example@gmail.com"
          inputName="Your email"
        />
        <ErrorFormMessage message="please write email" showError={this.state.showError.email} />
        <Upload refer={this.fileRef} />
        <ErrorFormMessage message="please upload file" showError={this.state.showError.file} />
        <Button type="submit" buttonName="Send me" />
        <ModalMessage showMessage={this.state.showMessage} />
      </form>
    );
  }
}
