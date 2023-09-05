/* eslint-disable react/prop-types */
import { SectionTitle } from '../components';
import { Banner, ServiceCard } from '../components/services';

const IndividualService = ({ service }) => {
	return (
		<div className='pt-8 md:pt-0'>
			<Banner
				title={service.sectionTitle}
				description={service.sectionDescription}
			/>
			<br />
			<br />
			<SectionTitle title={service.title}>{service.description}</SectionTitle>
			<br />
			<div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-screen-xl md:mx-auto mb-12 mx-6'>
				{service.services &&
					service.services.map((service, i) => (
						<ServiceCard service={service} key={i} />
					))}
			</div>
		</div>
	);
};

export default IndividualService;
