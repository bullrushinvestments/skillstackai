import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecForm {
  businessName: string;
  industryType: string;
  numberOfEmployees: number;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = (data) => {
    setLoading(true);
    axios.post('/api/business-specification', data)
      .then(response => {
        console.log('Success:', response.data);
        reset();
      })
      .catch(err => {
        setError(err.response ? err.response.data.message : 'An error occurred');
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      {error && <p role="alert" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700 font-bold mb-2">Business Name</label>
        <input
          {...register('businessName', { required: 'Business name is required' })}
          type="text"
          id="businessName"
          placeholder="Enter business name"
          className={clsx(
            "w-full px-3 py-2 border rounded",
            errors.businessName && "border-red-500 focus:border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="industryType" className="block text-gray-700 font-bold mb-2">Industry Type</label>
        <input
          {...register('industryType', { required: 'Industry type is required' })}
          type="text"
          id="industryType"
          placeholder="Enter industry type"
          className={clsx(
            "w-full px-3 py-2 border rounded",
            errors.industryType && "border-red-500 focus:border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfEmployees" className="block text-gray-700 font-bold mb-2">Number of Employees</label>
        <input
          {...register('numberOfEmployees', { required: 'Employee count is required' })}
          type="number"
          id="numberOfEmployees"
          placeholder="Enter number of employees"
          className={clsx(
            "w-full px-3 py-2 border rounded",
            errors.numberOfEmployees && "border-red-500 focus:border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          id="description"
          placeholder="Enter business description"
          rows={5}
          className={clsx(
            "w-full px-3 py-2 border rounded",
            errors.description && "border-red-500 focus:border-red-500"
          )}
        />
      </div>
      <button type="submit" disabled={loading} className={clsx("bg-blue-500 text-white font-bold py-2 px-4 rounded", loading ? "opacity-50 cursor-not-allowed" : "")}>
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecForm {
  businessName: string;
  industryType: string;
  numberOfEmployees: number;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = (data) => {
    setLoading(true);
    axios.post('/api/business-specification', data)
      .then(response => {
        console.log('Success:', response.data);
        reset();
      })
      .catch(err => {
        setError(err.response ? err.response.data.message : 'An error occurred');
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      {error && <p role="alert" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700 font-bold mb-2">Business Name</label>
        <input
          {...register('businessName', { required: 'Business name is required' })}
          type="text"
          id="businessName"
          placeholder="Enter business name"
          className={clsx(
            "w-full px-3 py-2 border rounded",
            errors.businessName && "border-red-500 focus:border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="industryType" className="block text-gray-700 font-bold mb-2">Industry Type</label>
        <input
          {...register('industryType', { required: 'Industry type is required' })}
          type="text"
          id="industryType"
          placeholder="Enter industry type"
          className={clsx(
            "w-full px-3 py-2 border rounded",
            errors.industryType && "border-red-500 focus:border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfEmployees" className="block text-gray-700 font-bold mb-2">Number of Employees</label>
        <input
          {...register('numberOfEmployees', { required: 'Employee count is required' })}
          type="number"
          id="numberOfEmployees"
          placeholder="Enter number of employees"
          className={clsx(
            "w-full px-3 py-2 border rounded",
            errors.numberOfEmployees && "border-red-500 focus:border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          id="description"
          placeholder="Enter business description"
          rows={5}
          className={clsx(
            "w-full px-3 py-2 border rounded",
            errors.description && "border-red-500 focus:border-red-500"
          )}
        />
      </div>
      <button type="submit" disabled={loading} className={clsx("bg-blue-500 text-white font-bold py-2 px-4 rounded", loading ? "opacity-50 cursor-not-allowed" : "")}>
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;