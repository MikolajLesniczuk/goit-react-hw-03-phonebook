import React, { Component } from 'react';

import PropTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, setFilter } = this.props;
    return (
      <div>
        <p className={s.find}>Find contacts by name :</p>
        <input
          className={s.input}
          type="text"
          name="name"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
    );
  }
}
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
  setFilter: PropTypes.string,
};

export default Filter;
