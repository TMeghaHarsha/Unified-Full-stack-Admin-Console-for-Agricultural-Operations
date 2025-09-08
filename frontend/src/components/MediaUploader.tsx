import { useState } from 'react';
import axios from 'axios';

const MediaUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setUploadStatus('File chosen');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadStatus('Upload successful');
    } catch (error) {
      setUploadStatus('Upload failed');
    }
  };

  return (
    <div className="space-y-2">
      <input type="file" onChange={handleFileChange} className="border p-2" />
      <p>{selectedFile ? selectedFile.name : 'No file chosen'}</p>
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-green-500 text-white"
        disabled={!selectedFile}
      >
        Upload
      </button>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default MediaUploader;