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
		<div className='bg-primary w-full h-[60vh]' ref={ref}>
			<div className='max-w-screen-xl mx-auto h-full text-white text-center flex flex-col items-center justify-center'>
				<h2 className='text-5xl mb-3'>What have we achieved</h2>
				<p className='mb-14 text-xl'>
					We’re here to help you to finding a best way
				</p>
				<div className='flex gap-x-10'>
					<div>
						<h1
							className='text-5xl flex items-center justify-center'
							ref={yearRef}
						/>
						<h3 className='text-lg'>
							Years of <br /> Delivering Happiness
						</h3>
					</div>

					<div>
						<h1
							className='text-5xl flex items-center justify-center'
							ref={vastuRef}
						/>
						<h3 className='text-lg'>
							Vastu Compliance for <br /> prosperity
						</h3>
					</div>
					<div>
						<h1
							className='text-5xl flex items-center justify-center'
							ref={clientsRef}
						/>
						<h3 className='text-lg'>Happy Clients</h3>
					</div>
					<div>
						<h1
							className='text-5xl flex items-center justify-center'
							ref={deliveryRef}
						/>
						<h3 className='text-lg'>Sq,ft., Delivered</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Achievements;
