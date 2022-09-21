import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from './Dashboard.js';
import { Profile } from './Profile.js';
import { Memes } from './Memes.js';
import { Login } from './Login.js';
import { Error } from './Error.js';

export const Router = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='*' element={<Error />} />
  </Routes>
);

export const AuthRoute = () => (
  <Routes>
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/memes' element={<Memes />} />
    <Route path='*' element={<Error />} />
  </Routes>
);
