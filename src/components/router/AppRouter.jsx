import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Main from '../main/main';
import CardDetails from '../card/cardDetails';
import Episodes from '../../Pages/Episodes';
import Location from '../../Pages/Location';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path="/episodes" element={<Episodes />} />
			<Route path="/location" element={<Location />} />
			<Route path="/:id" element={<CardDetails />} />
			<Route path="/episodes/:id" element={<CardDetails />} />
			<Route path="/location/:id" element={<CardDetails />} />
		</Routes>
	);
};

export default AppRouter;