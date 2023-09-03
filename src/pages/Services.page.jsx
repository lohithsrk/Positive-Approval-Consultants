/* eslint-disable react/prop-types */
import { Banner, Section } from '../components/services';
import { services } from '../utilities/constants.util';

const Services = ({ title, description }) => {
	return (
		<div className=' pt-16 bg-gray-50'>
			<Banner title={title} description={description} />
			<div className='max-w-screen-xl mx-auto pb-12 bg-gray-50'>
				<Section services={services.approval} />
				<Section services={services.noc} />
				<Section services={services.clearance} />
				<Section services={services.construction} />
				<Section services={services.renovation} />
			</div>
		</div>
	);
};

export default Services;
