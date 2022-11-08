import { KeyboardArrowDown } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teamSelector } from '../../store/teams/selectors';
import { setCategotyId } from '../../store/teams/teams';
import { fetchTeams } from '../../store/teams/teamsAsyncAction';
import styles from './Filter.module.scss';

const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Премьер дивизион');
  const [rotate, setRotate] = React.useState(false);
  const sortRef = React.useRef();
  const dispatch = useDispatch();
  const { teams, divisions, limit, page, categoryId } = useSelector(teamSelector);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(divisions);
      localStorage.setItem('divisions', json);
    }
    isMounted.current = true;
  }, [divisions]);

  let onToggleCheck = rotate ? styles.active : null;

  const handleClick = () => {
    setOpen(!open);
    setRotate(!rotate);
  };

  const fetchDivision = (item) => {
    setValue(item?.title);
    dispatch(setCategotyId(item?.id));
  };

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpen(false);
        setRotate(false);
        console.log('click outside');
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div style={{ height: 'auto' }}>
      <Button sx={{ color: '#fff', padding: 0 }}>
        <div onClick={handleClick} className={styles.drop} ref={sortRef}>
          <p style={{ cursor: 'default' }}>{value}</p>
          <KeyboardArrowDown
            onClick={handleClick}
            className={onToggleCheck}
            fontSize="large"
            sx={{ cursor: 'pointer' }}
          />
        </div>
      </Button>
      {open && (
        <div className={styles.down}>
          <ul className={styles.list}>
            {divisions?.map((item, id) => (
              <li onClick={() => fetchDivision(item)} key={id}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
