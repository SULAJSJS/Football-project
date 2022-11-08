import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { fetchPlayers } from '../../store/players/playersAsyncAction';
import { playersSelector } from '../../store/players/selectors';
import noPhoto from '../../assets/NoPhoto.png';
import { ArrowBack } from '@mui/icons-material';
import styles from './Players.module.scss';

const Players = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, status } = useSelector(playersSelector);
  const isMounted = React.useRef(false);
  console.log('data', data);

  React.useEffect(() => {
    dispatch(fetchPlayers({ id }));
  }, [id]);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(data);
      localStorage.setItem('players', json);
    }
    isMounted.current = true;
  }, [data]);

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <Link
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          color: '#000',
        }}
        to="/">
        <ArrowBack />
        <p>{data?.team_name}</p>
      </Link>
      <div className={styles.scroll}>
        <Box className={styles.data}>
          <Header />
          {status === 'loading' ? (
            <Box sx={{ maxWidth: '800px' }}>
              <Skeleton sx={{ height: '70px' }} />
              <Skeleton sx={{ height: '70px' }} animation="wave" />
              <Skeleton sx={{ height: '70px' }} animation={false} />
            </Box>
          ) : (
            data?.players?.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', gap: '5px', width: '800px' }}>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '30px',
                    height: '40px',
                    textAlign: 'center',
                  }}>
                  <p style={{ textAlign: 'center', fontSize: '12px' }}>{i + 1}</p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <img
                    style={{ width: '40px', height: '40px' }}
                    src={item.photo ?? noPhoto}
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '125px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <p style={{ margin: item?.first_name?.length > 17 ? '7px auto' : '' }}>
                    {item.first_name ?? '-'}
                  </p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '64px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <p>{item.player_number ?? '-'}</p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '130px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <p style={{ margin: '5px auto' }}>{item.position?.title ?? '-'}</p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '55px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <p>{item.goals_points}</p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '55px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <p>{item.falls.e}</p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '55px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <p>{item.mvp_point}</p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '55px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <p>{item.assists_point}</p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '55px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <p>{item.falls.red_cart}</p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '55px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <p>{item.falls.yellow_cart}</p>
                </Box>
                <Box
                  sx={{
                    background: 'rgba(0, 82, 53, 0.1)',
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}>
                  <img style={{ width: '40px', height: '40px' }} src={data?.away_kit} alt="" />
                </Box>
              </Box>
            ))
          )}
        </Box>
      </div>
    </div>
  );
};

export default Players;

/**
 
 */
