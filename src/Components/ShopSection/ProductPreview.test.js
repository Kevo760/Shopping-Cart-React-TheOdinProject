import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductPreview from './ProductPreview';
import thavage from '../../Files/images/thavage.png'

describe('ProductPreview renders correctly', () => {
    const product = {
        name:'Thavage',
        id: 6,
        image: thavage,
        type: 'Preworkout',
        price: 49.99,
        quantity: 1,
        link: '/shop/thavage'
      }

    test('Product image renders correctly', () => {
        render(<ProductPreview product={product}/>, {
            wrapper: MemoryRouter
        })
        const productImg = screen.getByRole('img');
        expect(productImg).toBeInTheDocument();
    })

    test('Product name renders correctly', () => {
        render(<ProductPreview product={product}/>, {
            wrapper: MemoryRouter
        })
        const productName = screen.getByText('Thavage');
        expect(productName).toBeInTheDocument();
    })

    test('Product type renders correctly', () => {
        render(<ProductPreview product={product}/>, {
            wrapper: MemoryRouter
        })
        const productType = screen.getByText('Preworkout');
        expect(productType).toBeInTheDocument();
    })

    test('Product price renders correctly', () => {
        render(<ProductPreview product={product}/>, {
            wrapper: MemoryRouter
        })
        const productPrice = screen.getByText('$49.99');
        expect(productPrice).toBeInTheDocument();
    })

})