import { useRef, useEffect, useState } from 'react';

import { broll, logo } from '../../assets';

const Banner = () => {
	const scrollRef = useRef('');
	const heroTopRef = useRef('');

	useEffect(( ) => {
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
						setIsCenter(true);
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
		<>
			<div className='w-full h-screen fixed -z-10 after:absolute after:content-[""] after:bg-black/30 after:top-0 after:left-0 after:w-full after:h-full '>
				<video
					src={broll}
					className='w-full h-full object-cover'
					autoPlay
					muted
					loop
				/>
			</div>
			<div className='relative'>
				<div className='h-[50vh] relative' ref={heroTopRef}></div>

				<div className='h-[50vh] relative' ref={scrollRef}>
					<div
						className={`w-36 absolute transition-all ${
							isCenter ? 'top-0' : 'top-1/2'
						} left-1/2 -translate-x-1/2 -translate-y-1/2`}
					>
						<img src={logo} alt='APC' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
