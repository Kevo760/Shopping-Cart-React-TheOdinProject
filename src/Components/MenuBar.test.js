import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuBar from './MenuBar';

describe('MenuBar', () => {
    test('Website name renders', () => {
        render(<MenuBar showCartToggle={null} cartQuantity={1}/>, 
        { wrapper: MemoryRouter });
        const WebsiteName = screen.getByText('ENRAGED');
        expect(WebsiteName).toBeInTheDocument();
    })

    test('Item icon renders 1 when cartQuantity is 1', () => {
        render(<MenuBar showCartToggle={null} cartQuantity={1}/>, 
        { wrapper: MemoryRouter });
        const oneQuantity = screen.getByText('1');
        expect(oneQuantity).toBeInTheDocument();
    })

    test('Item icon renders 1 when cartQuantity is 12', () => {
        render(<MenuBar showCartToggle={null} cartQuantity={12}/>, 
        { wrapper: MemoryRouter });
        const twelveQuantity = screen.getByText('12');
        expect(twelveQuantity).toBeInTheDocument();
    })

    test('Item icon does not render when cartQuantity is 0', () => {
        render(<MenuBar showCartToggle={null} cartQuantity={0}/>, 
        { wrapper: MemoryRouter });
        const zeroQuantity = screen.queryByText('0');
        expect(zeroQuantity).toBeNull();
    })

})