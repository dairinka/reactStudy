import * as React from 'react';

export interface IRangeProps {
  priceArray: string[];
  refer: React.RefObject<HTMLInputElement>;
}

export default class Range extends React.Component<IRangeProps> {
  defineMinMaxPrice = (): number[] => {
    const priceArray: number[] = this.props.priceArray
      .map((el) => JSON.parse(el))
      .sort((a, b) => a - b);
    return [priceArray[0], priceArray[priceArray.length - 1]];
  };

  public render() {
    const [min, max] = this.defineMinMaxPrice();
    return (
      <div className="range-price  form-block">
        <label htmlFor="range-price" className="input-label form-label">
          Choose max price
        </label>
        <div className="range-price__block">
          <span className="min-price range-price__amount">{min}</span>
          <span className="max-price range-price__amount">{max}</span>
          <input
            className="input-range form-input"
            type="range"
            min={min}
            max={max}
            id="range-price"
            step="0.5"
            ref={this.props.refer}
          />
        </div>
      </div>
    );
  }
}
