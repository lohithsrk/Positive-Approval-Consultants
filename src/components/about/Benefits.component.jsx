/* eslint-disable react/prop-types */
import React from 'react';
import Container from './Container.component';

const Benefits = (props) => {
	const { data } = props;
	return (
		<>
			<Container className='flex flex-wrap lg:gap-10 lg:flex-nowrap max-w-screen-xl mx-auto text-center md:text-left'>
				<div
					className={`md:flex items-center justify-center w-full lg:w-1/2 hidden ${
						props.imgPos === 'right' ? 'lg:order-1' : ''
					}`}
				>
					<div>
						<img
							src={data.image}
							width='521'
							height='auto'
							alt='Benefits'
							className={'object-cover'}
							placeholder='blur'
						/>
					</div>
				</div>

				<div
					className={`flex flex-wrap items-center w-full lg:w-1/2 ${
						data.imgPos === 'right' ? 'lg:justify-end' : ''
					}`}
				>
					<div>
						<div className='flex flex-col w-full mt-4'>
							<h3 className='max-w-2xl mt-3 text-2xl font-bold leading-snug  text-gray-800 lg:leading-tight md:text-4xl'>
								{data.title}
							</h3>

							<p className='max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl '>
								{data.desc}
							</p>
						</div>

						<div className='w-full mt-5 text-left'>
							{data.bullets.map((item, index) => (
								<Benefit key={index} title={item.title} icon={item.icon}>
									{item.desc}
								</Benefit>
							))}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

function Benefit(props) {
	return (
		<>
			<div className='flex items-start mt-8 space-x-3'>
				<div className='flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 '>
					{React.cloneElement(props.icon, {
						className: 'w-7 h-7 text-indigo-50'
					})}
				</div>
				<div>
					<h4 className='text-xl font-medium text-gray-800 '>{props.title}</h4>
					<p className='mt-1 text-gray-500 '>{props.children}</p>
				</div>
			</div>
		</>
	);
}

export default Benefits;
