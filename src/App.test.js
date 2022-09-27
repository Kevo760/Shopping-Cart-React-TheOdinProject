import {render, screen} from '@testing-library/react';
import App from './App';

describe('App renders correctly', () => {
    test('Cart is not rendered when app is loaded', () => {
        render(<App/>);
        const shoppingCart = screen.queryByText('SHOPPING CART');
        expect(shoppingCart).toBeNull();
    })
})