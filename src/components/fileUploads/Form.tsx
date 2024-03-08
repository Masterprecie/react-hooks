/* eslint-disable no-restricted-syntax */
// MyForm.tsx
import React, { useState } from 'react';
import FileUpload from './FileUpload'; // adjust the path as necessary

export default function Form() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('events', event);
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('input1', input1);
      formData.append('input2', input2);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      // replace 'http://example.com/endpoint' with your endpoint
      //   const response = await fetch('http://example.com/endpoint', {
      //     method: 'POST',
      //     body: formData,
      //   });

    //   if (response.ok) {
    //     console.log('File uploaded successfully');
    //   } else {
    //     console.error('File upload failed');
    //   }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FileUpload onFileSelect={setSelectedFile} />

      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />

      {/* other form fields... */}

      <button type="submit">Submit</button>
    </form>
  );
}
