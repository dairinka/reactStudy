import { FC } from 'react';

type ImodalMessageProps = { showMessage: boolean };
const ModalMessage: FC<ImodalMessageProps> = ({ showMessage }) => {
  if (!showMessage) {
    return null;
  }
  return (
    <div className="modal-message">
      <p>Thank you. Card was created</p>
    </div>
  );
};
export default ModalMessage;
