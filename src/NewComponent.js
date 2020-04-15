import React from 'react';
import PropTypes from 'prop-types';

const NewComponent = ({ children }) => (
    <div className="container">
        { children }
    </div>
);

NewComponent.propTypes = {
    children: PropTypes.any.isRequired,
};

export default NewComponent;
