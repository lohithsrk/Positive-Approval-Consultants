/* eslint-disable react/prop-types */
import { Container } from './about';

const SectionTitle = (props) => {
	return (
		<Container
			className={`flex w-full flex-col mt-10 md:mt-4 ${
				props.align === 'left' ? '' : 'items-center justify-center text-center'
			}`}
		>
			{props.pretitle && (
				<div className='text-sm font-bold tracking-wider text-indigo-600 uppercase'>
					{props.pretitle}
				</div>
			)}

			{props.title && (
				<h2 className='max-w-2xl mt-3 text-2xl font-bold leading-snug text-gray-800 md:leading-tight md:text-4xl '>
					{props.title}
				</h2>
			)}

			{props.children && (
				<p className='max-w-2xl py-4 text-base leading-normal text-gray-500 md:text-xl '>
					{props.children}
				</p>
			)}
		</Container>
	);
};

export default SectionTitle;
