/* eslint-disable react/prop-types */
import SectionTitle from '../SectionTitle.component';
import Container from './container';

import userOneImg from '/img/user1.jpg';

const Founders = () => {
	return (
		<Container className='max-w-screen-xl mx-auto'>
			<SectionTitle pretitle='Our Founders' title='Meet Our Visionaries'>
				Our visionary founders, with expertise in [relevant fields], drive our
				mission. Their innovation, commitment to excellence, and leadership
				guide us toward success, inspiring our team to exceed expectations.
			</SectionTitle>
			<div className=' flex justify-center'>
				<div className='lg:col-span-2 xl:col-auto'>
					<div className='flex flex-col justify-between w-96 h-full bg-gray-100 px-14 rounded-2xl py-14 '>
						<p className='text-lg leading-normal '>
							Mr. Amudhasagaran, our visionary founder in the real estate
							industry, brings profound insights and unwavering commitment. His
							notable achievements set the standard, inspiring our team to
							exceed expectations.
						</p>

						<Avatar image={userOneImg} name='Amudhasagaran' title='Founder' />
					</div>
				</div>
			</div>
		</Container>
	);
};

function Avatar(props) {
	return (
		<div className='flex items-center mt-8 space-x-3'>
			<div className='flex-shrink-0 overflow-hidden rounded-full w-14 h-14'>
				<img
					src={props.image}
					width='40'
					height='40'
					alt='Avatar'
					placeholder='blur'
				/>
			</div>
			<div>
				<div className='text-lg font-medium'>{props.name}</div>
				<div className='text-gray-600 '>{props.title}</div>
			</div>
		</div>
	);
}

function Mark(props) {
	return (
		<>
			{' '}
			<mark className='text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 '>
				{props.children}
			</mark>{' '}
		</>
	);
}

export default Founders;
