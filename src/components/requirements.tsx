import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id?: string;
  name: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('/api/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset } = useForm<Requirement>();

  const onSubmit = async (data: Requirement) => {
    try {
      setLoading(true);
      await axios.post('/api/requirements', data);
      fetchRequirements();
      reset();
    } catch (err) {
      setError('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      {!loading ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                ref={register({ required: true })}
                className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
                placeholder="Requirement Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                ref={register({ required: true })}
                rows={3}
                className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
                placeholder="Requirement Description"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="priority" className="block text-sm font-medium mb-1">Priority</label>
              <select
                id="priority"
                name="priority"
                ref={register({ required: true })}
                className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add Requirement
            </button>
          </form>

          {requirements.length > 0 && (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((requirement) => (
                  <tr key={requirement.id} className="border-b">
                    <td className="px-4 py-2">{requirement.name}</td>
                    <td className="px-4 py-2">{requirement.description}</td>
                    <td className="px-4 py-2">{requirement.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id?: string;
  name: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('/api/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset } = useForm<Requirement>();

  const onSubmit = async (data: Requirement) => {
    try {
      setLoading(true);
      await axios.post('/api/requirements', data);
      fetchRequirements();
      reset();
    } catch (err) {
      setError('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      {!loading ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                ref={register({ required: true })}
                className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
                placeholder="Requirement Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                ref={register({ required: true })}
                rows={3}
                className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
                placeholder="Requirement Description"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="priority" className="block text-sm font-medium mb-1">Priority</label>
              <select
                id="priority"
                name="priority"
                ref={register({ required: true })}
                className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add Requirement
            </button>
          </form>

          {requirements.length > 0 && (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((requirement) => (
                  <tr key={requirement.id} className="border-b">
                    <td className="px-4 py-2">{requirement.name}</td>
                    <td className="px-4 py-2">{requirement.description}</td>
                    <td className="px-4 py-2">{requirement.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GatherRequirements;