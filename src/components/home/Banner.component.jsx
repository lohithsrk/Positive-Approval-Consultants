import { useRef, useEffect, useState } from 'react';

import { broll, logo } from '../../assets';

const Banner = () => {
	const scrollRef = useRef('');
	const heroTopRef = useRef('');

	useEffect(() => {
		scrollRef.current.scrollIntoView({ behavior: 'smooth' });
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						window.scrollTo({
							top: 0,
							behavior: 'smooth'
						});
						setIsCenter(isCenter ? false : true);
					}
				});
			},
			{
				threshold: 0.2
			}
		);
		setTimeout(() => {
			observer.observe(heroTopRef.current);
		}, 1000);

		return () => {
			observer.disconnect();
		};
	}, []);

	const [isCenter, setIsCenter] = useState(false);
	return (
		<div className='relative'>
			<div className='w-full aspect-video md:h-screen md:fixed relative -z-10 after:absolute after:content-[""] after:bg-black/30 after:top-0 after:left-0 after:w-full md:after:h-full after:aspect-video'>
				<video
					src={broll}
					className='w-full h-full object-cover'
					autoPlay
					muted
					loop
				/>
			</div>
			<div className='relative hidden md:block'>
				<div className='h-[30vh] relative' ref={heroTopRef}></div>

				<div className='h-[70vh] relative' ref={scrollRef}>
					<div
						className={`flex flex-col items-center justify-center absolute transition-all ${
							isCenter ? 'top-1/4 -translate-y-1/2' : 'top-1/3'
						} left-1/2 -translate-x-1/2`}
					>
						<img src={logo} alt='APC' className='w-36' />
						<h1 className='text-white mt-3 text-4xl'>
							Positive Approval Consultancy
						</h1>
						<p className='text-white'>
							Embark on Your Real Estate Journey with Us
						</p>
					</div>
				</div>
			</div>
			<div className='md:hidden w-full aspect-video text-center flex items-center justify-center flex-col absolute top-1/2 -translate-y-1/2'>
				<img src={logo} alt='APC' className='w-24' />
				<h1 className='text-white mt-3 text-2xl'>
					Positive Approval Consultancy
				</h1>
				<p className='text-white'>Embark on Your Real Estate Journey with Us</p>
			</div>
		</div>
	);
};

export default Banner;
