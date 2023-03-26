import * as React from 'react';

interface RadioBtnProps {
  refer: React.RefObject<HTMLDivElement>;
}
export default class RadioButton extends React.Component<RadioBtnProps> {
  public render() {
    return (
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Please select you will travel:</legend>
        <div ref={this.props.refer} className="radio-block">
          <input type="radio" id="state1" name="state" value="sigle" defaultChecked />
          <label htmlFor="state1">Single</label>

          <input type="radio" id="state2" name="state" value="family" />
          <label htmlFor="state2">With family</label>

          <input type="radio" id="state3" name="state" value="friends" />
          <label htmlFor="state3">With friends</label>
        </div>
      </fieldset>
    );
  }
}
