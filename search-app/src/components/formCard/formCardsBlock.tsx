import * as React from 'react';
import { FormCardData } from 'types/type';
import FormCard from './formCard';
import { v4 as uuidv4 } from 'uuid';

export interface IFormCardsBlockProps {
  data: FormCardData[];
}

export default class FormCardsBlock extends React.Component<IFormCardsBlockProps> {
  public render() {
    return (
      <>
        <p className="form-card-desc">User info:</p>
        <div className="form-card-wrapper">
          {this.props.data.map((card) => (
            <FormCard data={card} key={uuidv4()} />
          ))}
        </div>
      </>
    );
  }
}
