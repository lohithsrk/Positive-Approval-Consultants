/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { SectionTitle } from '../';
import { services } from '../../utilities/constants.util';
import { Pagination } from 'swiper/modules';
import React, { useRef, useEffect, useState } from 'react';
import 'swiper/css';

const Services = () => {
	const navigate = useNavigate();
	const [maxHeight, setMaxHeight] = useState(0);
	const slideRefs = useRef([]);

	useEffect(() => {
		if (slideRefs.current.length > 0) {
			const heights = slideRefs.current.map((ref) => ref?.offsetHeight || 0);
			const tallest = Math.max(...heights);
			setMaxHeight(tallest);
		}
	}, []);

	return (
		<section className='bg-gray-50'>
			<div className='container px-6 py-3 md:py-10 max-w-screen-xl mx-auto'>
				<SectionTitle pretitle='welcome to' title='Positive Approvals'>
					We are trusted Partner for streamlined approval process. Our Expert Team navigates complex regulations ensuring timely and hassle-free permits for your residential, commercial and Industrial Projects.
				</SectionTitle>
				<SectionTitle pretitle='Core Services' title='What do we offer'>
					We offer approval assistance, NOC and clearance services, construction
					management, and renovation expertise to simplify your real estate
					ventures and bring your property visions to life.
				</SectionTitle>

				<Swiper
					spaceBetween={30}
					className='cursor-grab pt-10 w-full relative h-fit'
					slidesPerView={window.innerWidth < 640 ? 1 : 3}
					modules={[Pagination]}
				>
					{services.map((service, i) => (
						<SwiperSlide
							key={i}
							className='h-full relative !w-80'
							style={{ height: maxHeight ? `${maxHeight}px` : 'auto' }}
						>
							<Slide
								ref={(el) => (slideRefs.current[i] = el)}
								title={service.title}
								description={service.description}
								navigate={() => navigate("/services")}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

const Slide = React.forwardRef(({ title, description, navigate }, ref) => {
	return (
		<div
			ref={ref}
			className="h-full p-4 md:p-8 space-y-2 md:space-y-3 border-2 border-primary rounded-xl w-full"
		>
			{/* <span className='inline-block text-primary'>
				<svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' />
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z' />
				</svg>
			</span> */}

			<h1 className='text-2xl font-semibold text-gray-700 capitalize cursor-pointer' onClick={() => navigate()}>{title}</h1>
			<p className='text-gray-500'>{description}</p>
		</div>
	);
});

export default Services;