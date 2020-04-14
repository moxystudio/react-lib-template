// Here, create the new Component you want to see exported to a new package
import React from 'react';
import PropTypes from 'prop-types';

const NewComponent = ({ children }) => (
    <div>
        { children }
    </div>
);

NewComponent.propTypes = {
    children: PropTypes.any.isRequired,
};

export default NewComponent;
