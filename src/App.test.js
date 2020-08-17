import React from 'react';
import { render, screen, fireEvent, waitForDomChange } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';


jest.mock('./api/fetchShow');
console.log(mockFetchShow);

test('Render episodes when page renders and season is selected from dropdown', () => {
    // mock the returned value of 'fetchShow'
    mockFetchShow.mockResolvedValueOnce(show);

    // render App
    render(<App />); 

    waitForDomChange(expect(screen.queryAllByTestId(/dropdown/i)).toBeInTheDocument()); 
    waitForDomChange(expect(screen.findAllByText(/government experiments/i)).toBeInTheDocument())

})