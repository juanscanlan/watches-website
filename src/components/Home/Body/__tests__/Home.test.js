import Home from "../Home";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import {BrowserRouter} from 'react-router-dom'

test('Home renders with correct title', () => {
    const {getByTestId} = render(<BrowserRouter><Home/></BrowserRouter>)
    const homeTitle = getByTestId('home-title')

    expect(homeTitle.textContent).toBe('High End Watches')
})

test('Home renders with correct paragraph', () => {
    const {getByTestId} = render(<BrowserRouter><Home/></BrowserRouter>)
    const homeParagraph = getByTestId('home-paragraph')

    expect(homeParagraph).toHaveTextContent(/Explore our collection of the most popular watches in the world.Sell your own watches to our large collection of users./)
})

test('Home renders with correct buy-btn text', () => {
    const {getByTestId} = render(<BrowserRouter><Home/></BrowserRouter>)
    const homeButtonBuy = getByTestId('home-btn-buy')

    expect(homeButtonBuy.textContent).toBe('Buy a Watch')
})

test('Home renders with correct sell-btn text', () => {
    const {getByTestId} = render(<BrowserRouter><Home/></BrowserRouter>)
    const homeButtonBuy = getByTestId('home-btn-sell')

    expect(homeButtonBuy.textContent).toBe('Sell a Watch')
})