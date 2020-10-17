import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './Login'
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useStateValue } from './StateProvider';

function App() {
	const [{user}, dispatch] = useStateValue()

	return (
		// BEM naming convention
		<div className='app'>
			{!user ? (
				<Login />
			) : (
				<div className='app__body'>
					<Router>
						<Sidebar />
						<Switch>
							<Route path='/rooms/:roomId'>
								<Chat />
							</Route>
							<Route path='/'>
								<h1>HomePage</h1>
							</Route>
						</Switch>
					</Router>
				</div>
			)}
		</div>
	);
}

export default App;
