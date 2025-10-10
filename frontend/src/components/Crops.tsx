import { useState, useEffect } from 'react';
import axios from 'axios';
import FormBuilder from './FormBuilder';
import MediaUploader from './MediaUploader';

// Define the Crop type based on your API response
interface Crop {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

const Crops = () => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/crops/`)
      .then(response => setCrops(response.data.results || []))
      .catch(error => console.error(error));
  }, []);

  const handlePracticeSubmit = (data: any) => {
    axios.post(`${process.env.REACT_APP_API_URL}/practices/`, { ...data, crop: selectedCrop?.id })
      .then(() => alert('Practice added'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Crops List</h1>
      <ul>
        {crops.map((crop) => (
          <li key={crop.id} onClick={() => setSelectedCrop(crop)}>
            {crop.name}
          </li>
        ))}
      </ul>
      {selectedCrop && (
        <div>
          <h2>Details for {selectedCrop.name}</h2>
          <p>{selectedCrop.description}</p>
          <h3>Add Practice</h3>
          <FormBuilder
            fields={[
              { name: 'name', type: 'text' },
              { name: 'description', type: 'text' },
            ]}
            onSubmit={handlePracticeSubmit}
          />
          <h3>Upload Attachment</h3>
          <MediaUploader cropId={selectedCrop.id} />
        </div>
      )}
    </div>
  );
};

export default Crops;