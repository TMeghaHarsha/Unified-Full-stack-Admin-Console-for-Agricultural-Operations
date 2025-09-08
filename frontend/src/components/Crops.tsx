import FormBuilder from './FormBuilder';
import MediaUploader from './MediaUploader';

const Crops = () => {
  const fields = [
    { name: 'cropName', type: 'text' },
    { name: 'yield', type: 'number' },
  ];

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <h1>Crops Content</h1>
      <FormBuilder fields={fields} onSubmit={handleSubmit} />
      <MediaUploader />
    </div>
  );
};

export default Crops;