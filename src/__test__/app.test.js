import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App'


test('loads and displays the starting app', async () => {
    render(<App />);
    const personName = await waitFor(() => screen.getByTestId("request"));
    expect(personName).toHaveTextContent('Request Method');
  });

  // test('can get method', async () => {
  //   render(<App />);
  
  //   const button = await waitFor(() => screen.getByTestId('update-method'));
  //   const method = await waitFor(() => screen.getByTestId('select'))
  //   const requestMethod = await waitFor(() => screen.getByTestId("request"));
  //   fireEvent.change(method,{ target: { value: 'get' } })
  //   fireEvent.click(button);

    
  //   expect(requestMethod).toHaveTextContent('get');
  // });