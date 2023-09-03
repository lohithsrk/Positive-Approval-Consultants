import Container from './Container.component';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import SectionTitle from '../SectionTitle.component';

const Faq = () => {
	return (
		<Container className='!p-0'>
			<SectionTitle pretitle='FAQ' title='Frequently Asked Questions'>
				Curious about how we operate? Explore our FAQ section for answers to
				common queries about our services, processes, and mission. Discover what
				sets us apart.
			</SectionTitle>
			<div className='w-full max-w-2xl p-2 mx-auto rounded-2xl'>
				{faqdata.map((item, index) => (
					<div className='mb-5' key={index}>
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className='flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75  '>
										<span>{item.question}</span>
										<ChevronUpIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-indigo-500`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className='px-4 pt-4 pb-2 text-gray-500 '>
										{item.answer}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</Container>
	);
};

const faqdata = [
	{
		question: 'What services does Positive Approval Consultants offer?',
		answer:
			'Positive Approval Consultants specializes in a range of services, including approval facilitation, NOC and clearance procurement, construction management, and renovation expertise. We are your trusted partner for all your project needs.'
	},
	{
		question: 'How long does the approval process typically take?',
		answer:
			' duration of the approval process can vary depending on the specific project and local regulations. Our team works diligently to expedite approvals, but timelines may differ from case to case.'
	},
	{
		question: 'How can I get in touch with your team?',
		answer:
			"You can easily reach out to us through our contact page on our website. We're also available by phone and email. We look forward to assisting you with your inquiries and needs."
	},
	{
		question:
			'What sets "Positive Approval Consultants" apart from other consulting firms?',
		answer:
			'What distinguishes us is our people-centric approach, dedication to excellence, and commitment to transparency. We prioritize understanding your unique needs and challenges, tailoring our services to deliver optimal results.'
	}
];

export default Faq;
