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
					{/* <Route path='/about' element={<About />} /> */}
					<Route
						path='/services'
						element={
							<Services
								title='Approval & NOC Experts'
								description='We provide end-to-end support for real estate approvals and compliance, covering CMDA, DTCP, Corporation, RERA, and NOC clearances—ensuring hassle-free project execution and regulatory alignment.'
							/>
						}
					/>
					{/* <Route
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
					/> */}
					{/* <Route path='/clients' element={<Clients />} /> */}
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
