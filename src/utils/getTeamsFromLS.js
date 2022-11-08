export const getTeamsFromLS = () => {
  const data = localStorage.getItem('teams');
  const teams = data ? JSON.parse(data) : [];

  return {
    teams: teams,
  };
};
export const getPlayersFromLS = () => {
  const players = localStorage.getItem('players');
  const data = players ? JSON.parse(players) : [];

  return {
    data: data,
  };
};
