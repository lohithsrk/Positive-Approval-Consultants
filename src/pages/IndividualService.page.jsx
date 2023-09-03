/* eslint-disable react/prop-types */
import { SectionTitle } from '../components';
import { Banner, ServiceCard } from '../components/services';

const IndividualService = ({ service }) => {
	return (
		<>
			<Banner
				title={service.sectionTitle}
				description={service.sectionDescription}
			/>
			<SectionTitle title={service.title}>{service.description}</SectionTitle>
			<div className='flex max-w-screen-xl mx-auto gap-5 mb-12'>
				<div className='w-1/3'>
					{service.services &&
						service.services
							.slice(0, 3)
							.map((service, i) => <ServiceCard service={service} key={i} />)}
				</div>
				<div className='w-1/3'>
					{service.services &&
						service.services
							.slice(3, 6)
							.map((service, i) => <ServiceCard service={service} key={i} />)}
				</div>
				<div className='w-1/3'>
					{service.services &&
						service.services
							.slice(6, 9)
							.map((service, i) => <ServiceCard service={service} key={i} />)}
				</div>
			</div>
		</>
	);
};

export default IndividualService;
