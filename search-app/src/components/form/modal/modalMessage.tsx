import * as React from 'react';

type ImodalMessageProps = { showMessage: boolean };
export default class ModalMessage extends React.Component<ImodalMessageProps> {
  public render() {
    if (!this.props.showMessage) {
      return null;
    }
    return (
      <div className="modal-message">
        <p>Thank you. Card was created</p>
      </div>
    );
  }
}
