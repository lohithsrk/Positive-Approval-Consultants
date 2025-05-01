import {
	Achievements,
	MeetOurTeam,
	Banner,
	OurDNA,
	Services,
	Testimonials
} from '../components/home';

const Home = () => {
	return (
		<div className='overflow-x-hidden'>
			<Banner />
			<Services />
			<OurDNA />
			<Achievements />
			<MeetOurTeam />
			{/* <Projects /> */}
			<Testimonials />
		</div>
	);
};

export default Home;
