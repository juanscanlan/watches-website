import ContactUs from '../ContactUs'

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'

import {BrowserRouter} from 'react-router-dom'

test('If any input is empty, the form will not submit', async () => {
    render(<ContactUs/>)

    
})