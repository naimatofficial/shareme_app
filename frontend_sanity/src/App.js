import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';

import { Login } from './components';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
		<BrowserRouter>
			<Routes>
				<Route exact path={"login"} element={<Login />} />
				<Route exact path={"/*"} element={<Home />} />
			</Routes>
		</BrowserRouter>
  );
};

export default App;
