import {
	Achievements,
	Banner,
	Projects,
	Services,
	Testimonials
} from '../components/home';

const Home = () => {
	return (
		<div className='overflow-x-hidden'>
			<Banner />
			<Services />
			
			<Achievements />
			<Projects />
			<Testimonials />
		</div>
	);
};

export default Home;
