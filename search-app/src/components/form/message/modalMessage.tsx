import { useAppSelector } from '../../../hook';
import { FC } from 'react';

const ModalMessage: FC = () => {
  const showMessage = useAppSelector((state) => state.form.infoMessage);
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
