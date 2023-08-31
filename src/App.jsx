import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About, Contact, Home, Projects, Services } from './pages';
import { Footer, Navbar } from './components';

function App() {
	return (
		<div className=''>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/services' element={<Services />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
