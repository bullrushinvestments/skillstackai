import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';

interface WriteTestProps {
  onTestCreated?: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onTestCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTest] = useMutation(CREATE_TEST, {
    variables: { title, description },
    onCompleted: (data) => {
      if (onTestCreated) {
        onTestCreated(data.createTest);
      }
      setTitle('');
      setDescription('');
    },
    onError: (error) => setError(error.message),
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await createTest();
    } catch (err) {
      console.error('Failed to create test:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" disabled={loading} className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${loading ? 'bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} disabled:cursor-not-allowed`}>
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';

interface WriteTestProps {
  onTestCreated?: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onTestCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTest] = useMutation(CREATE_TEST, {
    variables: { title, description },
    onCompleted: (data) => {
      if (onTestCreated) {
        onTestCreated(data.createTest);
      }
      setTitle('');
      setDescription('');
    },
    onError: (error) => setError(error.message),
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await createTest();
    } catch (err) {
      console.error('Failed to create test:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" disabled={loading} className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${loading ? 'bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} disabled:cursor-not-allowed`}>
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;