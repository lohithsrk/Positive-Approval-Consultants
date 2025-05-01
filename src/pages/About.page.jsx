import { Hero, Benefits, Cta, Faq, Founders } from '../components/about';
import { SectionTitle } from '../components';

import { benefitOne, benefitTwo } from '../utilities/constants.util';

const About = () => {
	return (
		<div>
			<Hero />
			<SectionTitle pretitle='PAC Benefits' title='How do we help you'>
				Welcome to Positive Approval, we are trusted Partner for streamlined approval process. Our Expert Team navigates complex regulations ensuring timely and hassle-free permits for your residential, commercial and Industrial Projects.
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
