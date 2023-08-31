import {
	Achievements,
	Banner,
	Contact,
	Projects,
	Services,
	Testimonials
} from '../components/home';

const Home = () => {
	return (
		<div className='overflow-x-hidden'>
			<Banner />
			<Achievements />
			<Services />
			<Projects />
			<Testimonials />
			<Contact />
		</div>
	);
};

export default Home;
