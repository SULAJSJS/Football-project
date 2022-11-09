import { CloseFullscreen, TurnRight } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { teamSelector } from '../../store/teams/selectors';
import { setCount, setPage } from '../../store/teams/teams';
import { fetchDivisions, fetchTeams } from '../../store/teams/teamsAsyncAction';
import Pagination from '../Pagination';
import Skeleton from '../Skeleton';
import styles from './Comands.module.scss';

const Comands = () => {
  const { teams, status } = useSelector(teamSelector);
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(teams?.results);
      localStorage.setItem('teams', json);
    }
    isMounted.current = true;
  }, [teams?.results]);

  return (
    <div style={{ maxWidth: '1100px', margin: 'auto' }}>
      <div className={styles.grid}>
        {status === 'loading'
          ? [...new Array(12)].map((_, id) => <Skeleton key={id} />)
          : teams?.results?.map((item, id) => (
              <Box className={styles.card} key={id}>
                <Box
                  display={'flex'}
                  className={styles.flex}
                  sx={{
                    gap: '30px',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pl: 1,
                    pr: 1,
                  }}>
                  <Box className={styles.title} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <h5>{item.team_name}</h5>
                    <p style={{ color: 'rgba(0, 0, 0, 0.3)' }}>Капитан:</p>
                  </Box>
                  <Box>
                    <img width={65} src={item.icon} alt="" />
                  </Box>
                </Box>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: '#000',
                  }}
                  to={`/players/${item.id}`}>
                  <Box
                    className={styles.hover}
                    sx={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      cursor: 'pointer',
                      backgroundColor: 'rgba(0, 0, 0, 0.03)',
                    }}>
                    <Button
                      sx={{
                        padding: 0,
                        width: '100px',
                        height: '55px',
                        color: '#000',
                        textTransform: 'none',
                        fontSize: '17px',
                        fontWeight: 400,
                      }}>
                      <p>Посмотреть</p>
                    </Button>
                    <TurnRight />
                  </Box>
                </Link>
              </Box>
            ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Comands;
