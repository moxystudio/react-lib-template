import React from 'react';
import { render } from '@testing-library/react';
import NewComponent from './NewComponent';

it('should render the component properly', () => {
    const { getByText } = render(
        <NewComponent>
            <span>Hello</span>
        </NewComponent>,
    );

    expect(getByText('Hello')).toBeInTheDocument();
});
