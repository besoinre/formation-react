import React, {useState} from 'react';
import styles from './TemplateName.module.css';
import PropTypes from 'prop-types';

const templateInitialState = {};

const TemplateName = (props) => {

    const [state, setState] = useState(templateInitialState);

    return (
        <div className={styles.TemplateName} data-testid="TemplateName">
            templateNameText
        </div>
    )
}

TemplateName.propTypes = {

};

TemplateName.defaultProps = {

};

export default TemplateName;
