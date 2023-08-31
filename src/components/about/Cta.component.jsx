import React from 'react';
import Container from './container';
import { Link } from 'react-router-dom';

const Cta = () => {
	return (
		<Container>
			<div className='flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl'>
				<div className='flex-grow text-center lg:text-left'>
					<h2 className='text-2xl font-medium lg:text-3xl'>
						Want to learn more about us?
					</h2>
					<p className='mt-2 font-medium text-white text-opacity-90 lg:text-xl'>
						Connect with us now
					</p>
				</div>
				<div className='flex-shrink-0 w-full text-center lg:w-auto'>
					<Link
						to='/contact'
						className='inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 '
					>
						Click Here
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default Cta;
