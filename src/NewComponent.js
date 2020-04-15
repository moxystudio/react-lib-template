import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewComponent.css';

const NewComponent = ({ children }) => (
    <div className={ styles.container }>
        { children }
    </div>
);

NewComponent.propTypes = {
    children: PropTypes.any.isRequired,
};

export default NewComponent;
