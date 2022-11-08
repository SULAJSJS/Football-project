import { Search } from '@mui/icons-material';
import { OutlinedInput } from '@mui/material';
import debounce from 'lodash.debounce';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teamSelector } from '../../store/teams/selectors';
import { setSearch } from '../../store/teams/teams';
import { fetchTeams } from '../../store/teams/teamsAsyncAction';
import styles from './Input.module.scss';

const Input = () => {
  const [value, setValue] = React.useState('');
  const { search } = useSelector(teamSelector);
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const word = search ? search : '';

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 600),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const handleClick = () => {
    if (search) {
      return dispatch(fetchTeams({ word }));
    } else return search;
  };

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      dispatch(fetchTeams({ word }));
      event.preventDefault();
    }
  };

  return (
    <div className={styles.root}>
      <Search
        fontSize="large"
        color="disabled"
        onClick={handleClick}
        className={styles.search}
        sx={{ cursor: 'pointer' }}
      />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        onKeyPress={onEnter}
        className={styles.input}
        placeholder="ПОИСК КОМАНД"
        type="search"
      />
    </div>
  );
};

export default Input;
