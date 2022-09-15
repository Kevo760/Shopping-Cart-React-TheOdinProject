import {render, screen} from '@testing-library/react';
import MainPage from './MainPage';

describe('Main Page', () => {
    test('Button renders', () => {
        render(<MainPage />);
        const shopButton = screen.getByRole('button', {
            name: 'SHOP NOW',
        });
        expect(shopButton).toBeInTheDocument();
    })

    test('Video background renders', () => {
        render(<MainPage />);
        const videoBG = document.querySelector('#vid-background');
        expect(videoBG).toBeInTheDocument();
    })

    test('Website opening text', ()=> {
        render(<MainPage />);
        const mainText = screen.getByText('Grab some preworkout and get ENRAGED to destroy your workout!');
        expect(mainText).toBeInTheDocument();
    })


})
