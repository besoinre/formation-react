import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThumbnailLayout.module.scss';

const ThumbnailLayout = (props) => (
  <div className={styles.ThumbnailLayout} data-testid="ThumbnailLayout">
      {props.children}
  </div>
);

ThumbnailLayout.propTypes = {
    children: PropTypes.any.isRequired
};

ThumbnailLayout.defaultProps = {};

export default ThumbnailLayout;
