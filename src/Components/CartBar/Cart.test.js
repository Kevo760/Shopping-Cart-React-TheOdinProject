import {render, screen} from '@testing-library/react';
import Cart from './Cart';

// describe('Cart renders correctly', () => {
//     const emptyCart = [];
    


//     test('Shopping cart h1 renders', () => {
//         render(<Cart/>, {
//             wrapper: <App />,
//         });
//         const cartHeader = screen.getByText('SHOPPING CART');
//         expect(cartHeader).toBeInTheDocument();
//     })

//     // test('Product section text renders', () => {
//     //     render(<Cart />);
//     //     const cartProduct = screen.getByText('Product');
//     //     expect(cartProduct).toBeInTheDocument();
//     // })

//     // test('Total section text renders', () => {
//     //     render(<Cart />);
//     //     const cartTotal= screen.getByText('Total');
//     //     expect(cartTotal).toBeInTheDocument();
//     // })

//     // test('Shows cart empty when cart is empty', () => {
//     //     render(<Cart cart={emptyCart}/>);
//     //     const emptyCartText = screen.getByText('Your cart is empty.');
//     //     expect(emptyCartText).toBeInTheDocument();
//     // })

// })