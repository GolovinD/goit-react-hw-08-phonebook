import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterData } from 'redux/filter/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilter = event => {
    dispatch(filterData(event.currentTarget.value));
  };

  return (
    <div className={css.box}>
      <label className={css.label}>
        <span className={css.labelName}>Find contacts by name</span>

        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={onFilter}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

export default Filter;
