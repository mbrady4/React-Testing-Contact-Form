import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import React from 'react';
import ContactForm from './components/ContactForm.js';
import * as rtl from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

test('renders submit button', () => {
    const form = rtl.render(<ContactForm />);

    const buttonText = form.queryByText(/message/i);

    expect(buttonText).toBeInTheDocument();
});

test('Test whether input takes appropriate text', () => {
    const form = rtl.render(<ContactForm />);
    const input = form.getByPlaceholderText('Edd')
    fireEvent.change(input, { target: { value: 'Michael'} })
    expect(input.value).toBe('Michael');
}); 