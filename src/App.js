import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import SignUp from './pages/SignUp'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='/services' exact component={Services}/>
					<Route path='/products' exact component={Products}/>
					<Route path='/sign-up' exact component={SignUp}/>
				</Switch>
			</Router>
		</>
			);
}

export default App;
