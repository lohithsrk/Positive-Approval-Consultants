import { Hero, Benefits, Cta, Faq, Founders } from '../components/about';
import { SectionTitle } from '../components';

import { benefitOne, benefitTwo } from '../utilities/constants.util';

const About = () => {
	return (
		<div className=''>
			<Hero />
			<SectionTitle pretitle='PAC Benefits' title='How do we help you'>
				We assist you by simplifying complex processes, securing essential
				documents, and ensuring compliance. Our expertise paves the way for your
				projects to succeed, turning your vision into reality.
			</SectionTitle>
			<Benefits imgPos='left' data={benefitOne} />
			<Benefits imgPos='right' data={benefitTwo} />
			{/* <Founders /> */}
			<Faq />
			<Cta />
		</div>
	);
};

export default About;
