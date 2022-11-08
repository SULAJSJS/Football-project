import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Players from './pages/Players';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/players/:id/"
            element={
              <Protected>
                <Players />
              </Protected>
            }
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
