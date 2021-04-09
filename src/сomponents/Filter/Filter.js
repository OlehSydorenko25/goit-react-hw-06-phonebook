import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/contacts-actions';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.filter}>
      Filter
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContact(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
