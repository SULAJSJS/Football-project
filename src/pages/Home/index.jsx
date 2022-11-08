import React from 'react';
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
import { getTeamsFromLS } from '../../utils/getTeamsFromLS';
import qs from 'qs';
import styles from './Home.module.scss';
import { fetchTeams } from '../../store/teams/teamsAsyncAction';

const Home = () => {
  const dispatch = useDispatch();
  const { page, categoryId } = useSelector(teamSelector);
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { user, logOut } = UserAuth();
  const { teams, limit } = getTeamsFromLS();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(
        page > 0 ? { division: categoryId, offset: page } : { division: categoryId },
      );
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, page]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          division: params.division,
          offset: params.offset,
        }),
      );
      isSearch.current = true;
    }
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
