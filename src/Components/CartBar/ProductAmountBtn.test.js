import {render, screen} from '@testing-library/react';
import ProductAmountBtn from './ProductAmountBtn';
import buckedup from '../../Files/images/buckedup.png'



describe('ProductAmount Btn Renders', () => {
    const product = {
        name:'Bucked Up',
        id: 1,
        image: buckedup,
        type: 'Preworkout',
        price: 39.99,
        quantity: 10,
        link: '/shop/buckedup'
      };

    test('Renders - button', () => {
        render(<ProductAmountBtn product={product} />);
        const minusBtn = screen.getByRole('button', {
            name: '-',
        });
        expect(minusBtn).toBeInTheDocument()
    })
    
    test('Renders + button', () => {
        render(<ProductAmountBtn product={product} />);
        const plusBtn = screen.getByRole('button', {
            name: '+',
        })
        expect(plusBtn).toBeInTheDocument()
    })

    test('Renders product quantity', () => {
        render(<ProductAmountBtn product={product} />);
        const productAmountText = screen.getByText('10');
        expect(productAmountText).toBeInTheDocument();
    })
})