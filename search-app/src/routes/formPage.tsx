import * as React from 'react';
import cardData from '../data/data';
import { FormCardData } from '../types/type';
import Form from '../components/form/form';
import FormCardsBlock from '../components/formCard/formCardsBlock';

type formPageState = { arrayCards: FormCardData[] };
export default class FormPage extends React.Component<object, formPageState> {
  constructor(prop: formPageState) {
    super(prop);
    this.state = {
      arrayCards: [],
    };
  }

  handleFormCardData = async (newArray: FormCardData[]) => {
    await this.setState({ arrayCards: [...newArray] });
  };
  public render() {
    return (
      <div className="form-page">
        <p className="form-description">
          Fill the form below for recieve information about free apartment
        </p>
        <Form data={cardData} showCard={this.handleFormCardData} />
        {this.state.arrayCards.length ? <FormCardsBlock data={this.state.arrayCards} /> : null}
      </div>
    );
  }
}
