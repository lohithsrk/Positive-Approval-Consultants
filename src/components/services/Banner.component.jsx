/* eslint-disable react/prop-types */
import { services } from '../../assets';

const Banner = ({ title, description }) => {
	return (
		<>
			<div className='relative md:flex flex-col-reverse lg:pt-0 lg:flex-col lg:pb-0 bg-white hidden '>
				<div className='inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0'>
					<svg
						className='absolute left-0 hidden h-[60vh] text-white transform -translate-x-1/2 lg:block'
						viewBox='0 0 100 100'
						fill='currentColor'
						preserveAspectRatio='none slice'
					>
						<path d='M50 0H100L50 100H0L50 0Z' />
					</svg>
					<img
						className='object-cover object-top w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-[60vh]'
						src={services}
						alt=''
					/>
				</div>
				<div className='relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8  mt-[5rem] lg:max-w-screen-xl'>
					<div className='mb-20 mt-16 lg:max-w-lg lg:pr-5'>
						<h2 className='mb-5 font-sans text-3xl font-bold sm:text-4xl sm:leading-none'>
							{title}
						</h2>
						<p className='pr-5 text-base text-gray-700 md:text-lg'>
							{description}
						</p>
					</div>
				</div>
			</div>
			<div className='block md:hidden px-8 text-center'>
				<h2 className='mb-5 font-sans text-3xl font-bold sm:text-4xl sm:leading-none'>
					{title}
				</h2>
				<p className='pr-5 text-base text-gray-700 md:text-lg'>{description}</p>
			</div>
		</>
	);
};

export default Banner;
