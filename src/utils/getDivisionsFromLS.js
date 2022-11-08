export const getDivisionsFromLS = () => {
  const divisions = localStorage.getItem('divisions');
  const data = divisions ? JSON.parse(divisions) : [];

  return {
    data: data,
  };
};
