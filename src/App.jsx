import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
	About,
	Contact,
	Home,
	NotFound,
	Clients,
	Services,
	IndividualService
} from './pages';
import { Footer, Navbar } from './components';

import { services } from './utilities/constants.util';

function App() {
	return (
		<div className=''>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route
						path='/services'
						element={
							<Services
								title='Imagination Breeds Real-world Excellence'
								description='Discover our array of services, where we transform your ideas and dreams into tangible realities. With expertise in construction,
								renovation, approvals, and more, we bring your vision to life.'
							/>
						}
					/>
					<Route
						path='/services/approval'
						element={<IndividualService service={services.approval} />}
					/>
					<Route
						path='/services/noc'
						element={<IndividualService service={services.noc} />}
					/>
					<Route
						path='/services/clearance'
						element={<IndividualService service={services.clearance} />}
					/>
					<Route
						path='/services/construction'
						element={<IndividualService service={services.construction} />}
					/>
					<Route
						path='/services/renovation'
						element={<IndividualService service={services.renovation} />}
					/>
					<Route path='/clients' element={<Clients />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
