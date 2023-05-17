import './styles.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import nav from './Components/Nav';
import Card from './Components/card';

export default function App() {
	return (
		<div className="App">
			<nav />
			<Routes>
				<Route path="/main" element={<Main />} />
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
			</Routes>
		</div>
	);
}
