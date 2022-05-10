import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Topup from './Topup';
import Transfer from './Transfer';
import Purchase from './Purchase';
import HomePub from './HomePub';
import HomeUser from './HomeUser';
import Transfers from './Transfers';
import Purchases from './Purchases';
import Transactions from './Transactions';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/topup' element={<Topup />} />
      <Route path='/transfer' element={<Transfer />} />
      <Route path='/purchase' element={<Purchase />} />
      <Route path='/homepub' element={<HomePub />} />
      <Route path='/homeuser' element={<HomeUser />} />
      <Route path='/transfers' element={<Transfers />} />
      <Route path='/purchases' element={<Purchases />} />
      <Route path='/transactions' element={<Transactions />} />
    </Routes>
  </BrowserRouter>
);

export default App;
