import {render, screen} from '@testing-library/react';
import buckedup from '../../Files/images/buckedup.png';
import CartProduct from './CartProduct'

describe('CartProduct renders correctly', () => {
    const product = {
        name:'Bucked Up',
        id: 1,
        image: buckedup,
        type: 'Preworkout',
        price: 39.99,
        quantity: 10,
        link: '/shop/buckedup'
      };

      test('Product image renders correctly', () => {
        render(<CartProduct product={product} />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
      })

      test('Product name renders', () => {
        render(<CartProduct product={product} />);
        const productName = screen.getByText('Bucked Up');
        expect(productName).toBeInTheDocument();
      })

      test('Product type renders', () => {
        render(<CartProduct product={product} />);
        const productType = screen.getByText('Preworkout');
        expect(productType).toBeInTheDocument();
      })

      test('Product price renders', () => {
        render(<CartProduct product={product} />);
        const productPrice = screen.getByText('39.99');
        expect(productPrice).toBeInTheDocument();
      })

      test('Product total is added correctly', () => {
        render(<CartProduct product={product} />);
        const totalPrice = screen.getByText('$399.90');
        expect(totalPrice).toBeInTheDocument();
      })

})