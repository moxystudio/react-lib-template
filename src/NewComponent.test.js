import React from 'react';
import { render } from '@testing-library/react';
import NewComponent from './NewComponent';

it('should render no layout', () => {
    const wrapper = render(
        <NewComponent>
            <span>Hello</span>
        </NewComponent>,
    );

    expect(wrapper).toMatchSnapshot();
});
