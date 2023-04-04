import { FC } from 'react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';
import { FormFields } from './form';
import ErrorFormMessage from './message/errorFormMessage';

interface IUploadProps {
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
