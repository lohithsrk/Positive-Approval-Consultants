/* eslint-disable react/prop-types */
import './card.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { SectionTitle } from '../';
import { ServiceCard } from './';
import { Link } from 'react-router-dom';

const Section = ({ services }) => {
	return (
		<div id={services.title}>
			<Link to={services.link}>
				<SectionTitle pretitle={services.pretitle} title={services.title}>
					Approvals for dtcp, cmda, corporations & regularisation for building
					and layouts
				</SectionTitle>
			</Link>

			<div className='px-4'>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						clickable: true
					}}
					className='cursor-grab py-10'
				>
					{services.services &&
						services.services.slice(0, 4).map((service, i) => (
							<SwiperSlide key={i} className='md:w-[384px]'>
								<ServiceCard service={service} />
							</SwiperSlide>
						))}

					<SwiperSlide>
						<Link
							to={services.link}
							className={`text-primary flex gap-1 items-center justify-center relative md:w-[384px] h-[350px] md:h-[270px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md keen-slider__slide number-slide hover:bg-blue-100  ${
								services.services && services.services.length
							}`}
						>
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
									d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
							View more
						</Link>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Section;
