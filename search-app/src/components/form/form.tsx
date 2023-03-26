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

export interface IFormProps {
  data: ApartmentData[];
  showCard: (newData: FormCardData[]) => void;
}

type formState = { formData: FormCardData; showMessage: boolean };

export default class Form extends React.Component<IFormProps, formState> {
  state = {
    formData: {},
    showMessage: false,
  };

  arrayFormData: FormCardData[] = [];
  cityRef = React.createRef<HTMLSelectElement>();
  priceRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  petRef = React.createRef<HTMLInputElement>();
  stateRef = React.createRef<HTMLDivElement>();
  familyRef = React.createRef<HTMLInputElement>();
  friendsRef = React.createRef<HTMLInputElement>();
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
    const choseState = state[0].value;
    const newData: FormCardData = {
      state: choseState as StateType,
      city: this.cityRef.current?.value as string,
      name: this.nameRef.current?.value as string,
      email: this.emailRef.current?.value as string,
      maxPrice: this.priceRef.current?.value as string,
      pets: this.petRef.current?.checked as boolean,
      startDate: this.dateRef.current?.value as string,
      file: this.fileRef.current?.files ? (this.fileRef.current.files[0] as File) : null,
    };
    await this.setState({ formData: newData, showMessage: !this.state.showMessage });
    this.arrayFormData = [...this.arrayFormData, this.state.formData];
    this.props.showCard(this.arrayFormData);
    this.closeMessage();
    this.clearForm();
  };

  closeMessage = (): void => {
    setTimeout(() => this.setState({ showMessage: !this.state.showMessage }), 1500);
  };

  clearForm = () => {
    this.formRef.current?.reset();
  };

  public render() {
    const currentDate = new Date().toLocaleDateString('en-CA');
    return (
      <form className="form" ref={this.formRef} onSubmit={this.submitForm}>
        <Select refer={this.cityRef} cityArray={this.createDataArray('city')} />
        <Range refer={this.priceRef} priceArray={this.createDataArray('price')} />
        <Input refer={this.dateRef} type="date" inputName="Start from date" default={currentDate} />
        <Input refer={this.petRef} type="checkbox" inputName="With pets" />
        <RadioButton refer={this.stateRef} />
        <Input refer={this.nameRef} type="text" placeholder="Tony" inputName="Your name" />
        <Input
          refer={this.emailRef}
          type="email"
          placeholder="example@gmail.com"
          inputName="Your email"
        />
        <Upload refer={this.fileRef} />
        <Button type="submit" buttonName="Send me" />
        <ModalMessage showMessage={this.state.showMessage} />
      </form>
    );
  }
}
