/* eslint-disable react/prop-types */
import { Banner, Section } from '../components/services';
import { services } from '../utilities/constants.util';

import { ServiceCard } from '../components/services';

const Services = ({ title, description }) => {
	const serviceGroups = services.reduce((acc, _, i) => {
		if (i % 2 === 0) acc.push(services.slice(i, i + 2));
		return acc;
	}, []);
	return (
		<div className='pt-8 md:pt-16 bg-gray-50'>
			<Banner title={title} description={description} />
			<div className='max-w-screen-xl mx-auto pb-12 bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-10'>
				{serviceGroups.map((services, i) => (
					<div className='flex flex-col gap-4' key={i}>
						{services.map((service, i) => (
							<ServiceCard key={i} service={service} />
						))}
					</div>
				))}
				{/* {services.map((service, i) => (
					<Section
						key={i}
						title={service.title}
						description={service.description}
						points={service.points}
					/>
				))} */}
			</div>
		</div>
	);
};

export default Services;
