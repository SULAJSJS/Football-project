import React, { useEffect } from 'react';
import { Logout, RotateLeft } from '@mui/icons-material';
import Filter from '../../components/Filter';
import Input from '../../components/Input';
import Comands from '../../components/Comands';
import { useDispatch, useSelector } from 'react-redux';
import { teamSelector } from '../../store/teams/selectors';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { UserAuth } from '../../context/AuthContext';
import { setCategotyId, setFilters, setTeams } from '../../store/teams/teams';
import qs from 'qs';
import styles from './Home.module.scss';
import { fetchDivisions, fetchTeams } from '../../store/teams/teamsAsyncAction';

const Home = () => {
  const dispatch = useDispatch();
  const { page, categoryId, limit } = useSelector(teamSelector);
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(
        page > 0
          ? { division: categoryId, offset: page }
          : categoryId !== null
          ? { division: categoryId }
          : {},
      );
      navigate(`?${queryString}`);
    }
    console.log('first', categoryId);
    isMounted.current = true;
  }, [categoryId, page]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          ...params,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      dispatch(fetchTeams({ page, limit, categoryId }));
    }

    isSearch.current = false;
  }, [page, limit, categoryId]);

  useEffect(() => {
    dispatch(fetchDivisions());
  }, []);

  return (
    <>
      <div className={styles.header}>
        {user?.displayName ? (
          <div className={styles.logout} style={{ marginLeft: '20px' }}>
            <Button onClick={handleSignOut} variant="contained" endIcon={<Logout />}>
              Выйти
            </Button>
          </div>
        ) : (
          ''
        )}
        <Input />
        <div className={styles.filters}>
          <Filter />
          <Button
            onClick={() => dispatch(setCategotyId(13))}
            className={styles.removeFilter}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              marginLeft: '60px',
              cursor: 'pointer',
              color: '#000',
              fontSize: '18px',
              padding: 0,
              height: '30px',
              textTransform: 'none',
            }}>
            <RotateLeft />
            <p>Сбросить фильтр</p>
          </Button>
          {user?.displayName ? (
            <div className={styles.log_out} style={{ marginLeft: '20px', height: '40px' }}>
              <Button onClick={handleSignOut} variant="contained" endIcon={<Logout />}>
                Выйти
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <Comands />
    </>
  );
};

export default Home;
