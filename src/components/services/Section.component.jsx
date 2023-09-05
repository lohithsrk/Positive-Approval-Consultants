/* eslint-disable react/prop-types */
import { useKeenSlider } from 'keen-slider/react';
import './card.css';
import 'keen-slider/keen-slider.min.css';

import { SectionTitle } from '../';
import { ServiceCard } from './';
import { Link } from 'react-router-dom';

const Section = ({ services }) => {
	const [sliderRef] = useKeenSlider({
		mode: 'free-snap',
		slides: {
			perView: 3.5,
			spacing: 15
		}
	});
	return (
		<div id={services.title}>
			<Link to={services.link}>
				<SectionTitle pretitle={services.pretitle} title={services.title}>
					Approvals for dtcp, cmda, corporations & regularisation for building
					and layouts
				</SectionTitle>
			</Link>

			<div className='px-4'>
				<div ref={sliderRef} className='keen-slider cursor-grab'>
					{services.services &&
						services.services.slice(0, 4).map((service, i) => (
							<div
								className={` keen-slider__slide number-slide${i + 1}`}
								key={i}
							>
								<ServiceCard service={service} />
							</div>
						))}
					<Link
						to={services.link}
						className={`text-primary flex gap-1 items-center justify-center relative mt-6 md:w-[384px] h-[350px] md:h-[270px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md keen-slider__slide number-slide hover:bg-blue-100  ${
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
				</div>
			</div>
		</div>
	);
};

export default Section;
