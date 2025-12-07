import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalDependency: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseSomeExternalDependency = (data?: any) => ({
    data,
    isLoading: false,
    error: null,
    mutate: jest.fn(),
  });

  beforeEach(() => {
    jest.clearAllMocks();
    (useSomeExternalDependency as jest.Mock).mockReturnValue(mockUseSomeExternalDependency());
  });

  test('renders loading state when fetching data', async () => {
    const mockLoading = true;
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(), isLoading: mockLoading });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('renders error message when fetching data fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(), error: mockError });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('renders data when fetched successfully', async () => {
    const mockData = { id: '123', name: 'Test Data' };
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/test data/i)).toBeInTheDocument();
  });

  test('handles user interaction with button click', async () => {
    const mockData = { id: '123', name: 'Test Data' };
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(useSomeExternalDependency.mock.calls[0][0]).toBeCalled();
  });

  test('checks accessibility features', async () => {
    const mockData = { id: '123', name: 'Test Data' };
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('button', { name: /click me/i })).toHaveAttribute('aria-label', 'Click Me Button');
  });

  test('handles edge cases with empty data', async () => {
    const mockData = {};
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('handles edge cases with null data', async () => {
    const mockData = null;
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('handles edge cases with undefined data', async () => {
    const mockData = undefined;
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalDependency: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseSomeExternalDependency = (data?: any) => ({
    data,
    isLoading: false,
    error: null,
    mutate: jest.fn(),
  });

  beforeEach(() => {
    jest.clearAllMocks();
    (useSomeExternalDependency as jest.Mock).mockReturnValue(mockUseSomeExternalDependency());
  });

  test('renders loading state when fetching data', async () => {
    const mockLoading = true;
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(), isLoading: mockLoading });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('renders error message when fetching data fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(), error: mockError });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('renders data when fetched successfully', async () => {
    const mockData = { id: '123', name: 'Test Data' };
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/test data/i)).toBeInTheDocument();
  });

  test('handles user interaction with button click', async () => {
    const mockData = { id: '123', name: 'Test Data' };
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(useSomeExternalDependency.mock.calls[0][0]).toBeCalled();
  });

  test('checks accessibility features', async () => {
    const mockData = { id: '123', name: 'Test Data' };
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('button', { name: /click me/i })).toHaveAttribute('aria-label', 'Click Me Button');
  });

  test('handles edge cases with empty data', async () => {
    const mockData = {};
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('handles edge cases with null data', async () => {
    const mockData = null;
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('handles edge cases with undefined data', async () => {
    const mockData = undefined;
    (useSomeExternalDependency as jest.Mock).mockReturnValue({ ...mockUseSomeExternalDependency(mockData), isLoading: false });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

});