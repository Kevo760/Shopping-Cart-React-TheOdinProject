import {render, screen} from '@testing-library/react';
import MenuBar from './MenuBar';

describe('MenuBar', () => {
    test('Website name renders', () => {
        render(<MenuBar />)
        const WebsiteName = screen.getByText('ENRAGED');
        expect(WebsiteName).toBeInTheDocument();
    })

})