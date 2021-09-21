import React from 'react';
import styles from './TemplateName.module.css';
import PropTypes from 'prop-types';

const templateNameInitialState = {};

class TemplateName extends Component {

    constructor(props) {
        super(props);
        this.state = templateNameInitialState;
    }

    render(){
        return (
            <div className={styles.TemplateName} datatest-id="TemplateName">Text in Component</div>
        )
    }

}

TemplateName.propTypes = {

};

TemplateName.defaultProps = {

};

export default TemplateName;
