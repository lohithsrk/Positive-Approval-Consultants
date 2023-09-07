/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { SectionTitle } from '../';
import { services } from '../../utilities/constants.util';
import { Link } from 'react-router-dom';

const Services = () => {
	return (
		<section className='bg-gray-50 '>
			<div className='container px-6 py-3 md:py-10 max-w-screen-xl mx-auto md:pb-16'>
				<SectionTitle pretitle='Featured Services' title='What do we offer'>
					We offer approval assistance, NOC and clearance services, construction
					management, and renovation expertise to simplify your real estate
					ventures and bring your property visions to life.
				</SectionTitle>

				<Swiper
					spaceBetween={30}
					pagination={{
						clickable: true
					}}
					className='cursor-grab py-10 w-full relative h-fit'
				>
					{Object.keys(services).map((service, i) => (
						<SwiperSlide key={i} className='h-full relative !w-96'>
							<Slide
								title={services[service].title}
								description={services[service].description}
								link={services[service].link}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

const Slide = ({ title, description, link }) => {
	return (
		<div
			className={`p-4 md:p-8 space-y-2 md:space-y-3 border-2 border-primary rounded-xl h-[350px] w-96`}
		>
			<span className='inline-block text-primary'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-8 h-8'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
					/>
				</svg>
			</span>

			<h1 className='text-2xl font-semibold text-gray-700 capitalize'>
				{title}
			</h1>

			<p className='text-gray-500'>{description}</p>

			<Link
				to={link}
				className='inline-flex p-2 text-primary capitalize transition-colors duration-200 transform bg-blue-100 rounded-full hover:underline hover:text-blue-600'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-6 h-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
			</Link>
		</div>
	);
};

export default Services;
