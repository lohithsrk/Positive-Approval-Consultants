// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import { useState } from 'react';
// import './clients.css';

// const clients = [
// 	{
// 		title: 'client 1',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magnam quas doloribus. Doloribus quas repellendus odit, ab perferendis corporis quo consectetur blanditiis amet, minus odio hic nobis nam beatae vero.',
// 		image:
// 			'https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80'
// 	},
// 	{
// 		title: 'client 2',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magnam quas doloribus. Doloribus quas repellendus odit, ab perferendis corporis quo consectetur blanditiis amet, minus odio hic nobis nam beatae vero.',
// 		image:
// 			'https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80'
// 	},
// 	{
// 		title: 'client 3',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magnam quas doloribus. Doloribus quas repellendus odit, ab perferendis corporis quo consectetur blanditiis amet, minus odio hic nobis nam beatae vero.',
// 		image:
// 			'https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80'
// 	}
// ];

// const Banner = () => {
// 	const [details, setDetails] = useState(null);
// 	const [currentImage, setCurrentImage] = useState(0);

// 	const [sliderRef] = useKeenSlider({
// 		detailsChanged(s) {
// 			setCurrentImage(s.track.details.abs);
// 			setDetails(s.track.details);
// 		},
// 		initial: 0,
// 		mode: 'snap'
// 	});

// 	function scaleStyle(idx) {
// 		if (!details) return {};
// 		const slide = details.slides[idx];
// 		const scale_size = 0.7;
// 		const scale = 1 - (scale_size - scale_size * slide.portion);
// 		return {
// 			transform: `scale(${scale})`,
// 			WebkitTransform: `scale(${scale})`
// 		};
// 	}

// 	return (
// 		<div className='z-30 relative items-center justify-center w-full h-full overflow-hidden'>
// 			<div
// 				className='inset-0 h-screen bg-cover bg-center'
// 				style={{
// 					backgroundImage: `url('${clients[currentImage].image}')`
// 				}}
// 			></div>
// 			<div className='absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-black bg-opacity-25'></div>
// 			<div className='absolute inset-0  z-30  flex flex-col items-center justify-center w-full h-full px-32 top-12'>
// 				<div ref={sliderRef} className='keen-slider zoom-out'>
// 					{clients.map((client, idx) => (
// 						<div key={idx} className='keen-slider__slide zoom-out__slide'>
// 							<div style={scaleStyle(idx)}>
// 								<div
// 									className='shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center'
// 									style={{
// 										backgroundImage: `{url('${client.image}')`
// 									}}
// 								>
// 									<div className='grid grid-cols-12 gap-1'>
// 										<div className='relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7'>
// 											<div className='border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0'>
// 												<p className='italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold '>
// 													{client.title}
// 												</p>
// 											</div>
// 											<div className='text-gray-400 font-semibold text-xl mb-4'>
// 												{idx + 1}
// 											</div>
// 											<div className='absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5'></div>
// 										</div>
// 										<div className='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5'>
// 											<div className='relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg'>
// 												<div className='p-8'>
// 													<p className='text-white text-xs md:text-sm lg:text-xl mb-4'>
// 														{client.description}
// 													</p>
// 													<div className='bottom-0 absolute p-2 right-0'>
// 														<button className='opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center'>
// 															<svg
// 																xmlns='http://www.w3.org/2000/svg'
// 																className='h-5 w-5 mr-2'
// 																fill='none'
// 																viewBox='0 0 24 24'
// 																stroke='currentColor'
// 															>
// 																<path
// 																	strokeLinecap='round'
// 																	strokeLinejoin='round'
// 																	strokeWidth='2'
// 																	d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
// 																/>
// 															</svg>
// 															<span>LEARN MORE</span>
// 														</button>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Banner;
