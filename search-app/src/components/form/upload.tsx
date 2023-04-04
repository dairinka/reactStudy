import * as React from 'react';

interface UploadProps {
  refer: React.RefObject<HTMLInputElement>;
}
export default class Upload extends React.Component<UploadProps> {
  onImageChange = () => {};
  public render() {
    return (
      <div className="upload-block">
        <label htmlFor="upload-img" className="input-label form-label">
          Upload your passport
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={this.onImageChange}
          id="upload-img"
          ref={this.props.refer}
        />
      </div>
    );
  }
}
