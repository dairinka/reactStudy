import { FC } from 'react';
import { UseFormRegisterReturn, FieldErrors, Path } from 'react-hook-form';
import { FormFields } from '../../types/type';
import ErrorFormMessage from './message/errorFormMessage';

interface IUploadProps {
  name: Path<FormFields>;
  errors: FieldErrors<FormFields>;
  register: UseFormRegisterReturn<'file'>;
}

const Upload: FC<IUploadProps> = ({ errors, register }) => {
  return (
    <>
      <div className="upload-block">
        <label htmlFor="upload-img" className="input-label form-label">
          Upload your passport
        </label>
        <input type="file" multiple accept="image/*" id="upload-img" {...register} />
      </div>
      {errors.file && <ErrorFormMessage message={errors.file.message as string} />}
    </>
  );
};

export default Upload;
