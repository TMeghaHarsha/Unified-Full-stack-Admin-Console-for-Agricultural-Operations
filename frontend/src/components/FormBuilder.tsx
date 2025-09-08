import { useForm } from 'react-hook-form';

interface Field {
  name: string;
  type?: string;
}

interface FormBuilderProps {
  fields: Field[];
  onSubmit: (data: any) => void;
}

const FormBuilder = ({ fields, onSubmit }: FormBuilderProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field, index) => (
        <div key={index}>
          <label className="block">{field.name}</label>
          <input
            {...register(field.name)}
            type={field.type || 'text'}
            className="w-full p-2 border"
          />
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;