import { useCountUp } from 'react-countup';
import { useEffect, useRef } from 'react';

const Achievements = () => {
	const ref = useRef(null);
	const yearRef = useRef(null);
	const { startYear } = useCountUp({
		ref: yearRef,
		start: 0,
		end: 12,
		duration: 2.5,
		suffix: '+'
	});
	
	const vastuRef = useRef(null);
	const { startVastu } = useCountUp({
		ref: vastuRef,
		start: 0,
		end: 100,
		duration: 2.5,
		suffix: '%'
	});
	const clientsRef = useRef(null);
	const { startClients } = useCountUp({
		ref: clientsRef,
		start: 0,
		end: 100,
		duration: 2.5,
		suffix: '+'
	});
	const deliveryRef = useRef(null);
	const { startDelivery } = useCountUp({
		ref: deliveryRef,
		start: 0,
		end: 1,
		duration: 2.5,
		suffix: '+Crore'
	});
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startVastu();
						startClients();
						startDelivery();
						startYear();
					}
				});
			},
			{
				threshold: 0.8
			}
		);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [startClients, startDelivery, startVastu, startYear]);
	return (
		<div
			className='w-full h-[40vh] relative flex items-center justify-center'
			ref={ref}
		>
			{/* <div className='relative w-full h-full'>
				<img
					src={achievements}
					alt='Achievements'
					className='object-bottom w-full h-full object-cover '
				/>
			</div> */}
			<div className='w-full h-full flex gap-x-10 items-center justify-center relative after:absolute after:content-[""] after:bg-white after:bottom-0 after:left-0 after:w-full after:h-1/2 after:-z-10'>
				<div className='text-center bg-white text-black p-5 w-48 h-48 flex items-center justify-center flex-col shadow-lg rounded-md'>
					<h1
						className='text-5xl flex items-center justify-center'
						ref={yearRef}
					/>
					<h3 className='text-lg'>Years of Delivering Happiness</h3>
				</div>
				<div className='text-center bg-white text-black p-5 w-48 h-48 flex items-center justify-center flex-col shadow-lg rounded-md'>
					<h1
						className='text-5xl flex items-center justify-center'
						ref={vastuRef}
					/>
					<h3 className='text-lg'>Vastu Compliance for prosperity</h3>
				</div>
				<div className='text-center bg-white text-black p-5 w-48 h-48 flex items-center justify-center flex-col shadow-lg rounded-md'>
					<h1
						className='text-5xl flex items-center justify-center'
						ref={clientsRef}
					/>
					<h3 className='text-lg'>Happy Clients</h3>
				</div>
				<div className='text-center bg-white text-black p-5 w-48 h-48 flex items-center justify-center flex-col shadow-lg rounded-md'>
					<h1
						className='text-5xl flex items-center justify-center'
						ref={deliveryRef}
					/>
					<h3 className='text-lg'>Sq,ft., Delivered</h3>
				</div>
			</div>
		</div>
	);
};

export default Achievements;
