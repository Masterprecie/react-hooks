import { useState, useRef } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import './fileUpload.css';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}
export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState('No Selected File');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    inputRef.current?.click();
  };

  const handleFileChange = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files[0]) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
      onFileSelect(files[0]);
    } else {
      onFileSelect(null);
    }
  };

  const handleDelete = () => {
    setFileName('No selected File');
    setImage(null);
    onFileSelect(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleFileUpload();
    }
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.items && event.dataTransfer.items[0]) {
      const file = event.dataTransfer.items[0].getAsFile();
      if (file) {
        setFileName(file.name);
        setImage(URL.createObjectURL(file));
        onFileSelect(file);
      }
    }
  };
  return (
    <main>
      <div
        className="file-upload-container"
        role="button"
        tabIndex={0}
        onClick={handleFileUpload}
        onKeyDown={handleKeyDown}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          ref={inputRef}
          onChange={handleFileChange}
        />

        {image ? (
          <img src={image} width={150} height={150} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color="#1475cf" size={60} />
            <p>Browse Files to upload or Drag and Drop </p>
          </>
        )}
      </div>

      <section className="uploaded-row">
        <AiFillFileImage color="#1475cf" className="icon" />
        <span className="upload-content">
          {fileName}
          {' '}
          -
          <MdDelete onClick={handleDelete} className="icon" />
        </span>
      </section>
    </main>
  );
}
