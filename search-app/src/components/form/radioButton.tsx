import * as React from 'react';

interface RadioBtnProps {
  refer: React.RefObject<HTMLDivElement>;
}
type radioBtnState = { selectInput: string };
export default class RadioButton extends React.Component<RadioBtnProps, radioBtnState> {
  constructor(prop: RadioBtnProps) {
    super(prop);
    this.state = {
      selectInput: '',
    };
  }
  changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.setState({ selectInput: e.target.value });
  };
  public render() {
    return (
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Please select you will travel:</legend>
        <div onChange={this.changeState} ref={this.props.refer} className="radio-block">
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
