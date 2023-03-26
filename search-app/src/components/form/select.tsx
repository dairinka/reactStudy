import * as React from 'react';

export interface ISelectProps {
  refer: React.RefObject<HTMLSelectElement>;
  cityArray: string[];
}

export default class Select extends React.Component<ISelectProps> {
  public render() {
    return (
      <div className="select-block form-block">
        <label htmlFor="city-select" className="select-label form-label">
          Choose city
        </label>
        <select name="city" id="city-select" className="select" ref={this.props.refer}>
          <option value="">--Please choose the option--</option>

          {this.props.cityArray.map((city) => (
            <option key={JSON.parse(city)} value={JSON.parse(city)}>
              {JSON.parse(city)}
            </option>
          ))}

          <option value="all">All city</option>
        </select>
      </div>
    );
  }
}
