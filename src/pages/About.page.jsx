import {
	Hero,
	Benefits,
	Cta,
	Faq,
	SectionTitle,
	Testimonials,
	Video
} from '../components/about';

import { benefitOne, benefitTwo } from '../components/about/data';

const About = () => {
	return (
		<div className=''>
			<Hero />
			<SectionTitle pretitle='PAC Benefits' title='How do we help you'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia tenetur
				officiis, esse nobis ab tempore? Fugit ipsam quae quas natus
				perspiciatis deleniti animi, laudantium deserunt adipisci et eos? Unde,
				minima?
			</SectionTitle>
			<Benefits imgPos='left' data={benefitOne} />
			<Benefits imgPos='right' data={benefitTwo} />
			<SectionTitle
				pretitle='Watch a video'
				title='Learn how to fullfil your needs'
			>
				This section is to highlight a promo or demo video of your product.
				Analysts says a landing page with video has 3% more conversion rate. So,
				don&apos;t forget to add one. Just like this.
			</SectionTitle>
			<Video />
			<SectionTitle pretitle='Our Founders' title='Know about our master minds'>
				Testimonails is a great way to increase the brand trust and awareness.
				Use this section to highlight your popular customers.
			</SectionTitle>
			<Testimonials />
			<SectionTitle pretitle='FAQ' title='Frequently Asked Questions'>
				Answer your customers possible questions here, it will increase the
				conversion rate as well as support or chat requests.
			</SectionTitle>
			<Faq />
			<Cta />
		</div>
	);
};

export default About;
