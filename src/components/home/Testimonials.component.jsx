import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Testimonials = () => {
	return (
		<div className='bg-gray-50 py-10'>
			<div className='xl:px-20 px-8 max-w-screen-xl mx-auto relative z-40 bg-gray-50'>
				<CarouselProvider
					naturalSlideWidth={100}
					isIntrinsicHeight={true}
					totalSlides={2}
				>
					<div className='mx-auto max-w-[510px] text-center mb-10'>
						<span className='text-primary mb-2 block text-lg font-semibold'>
							Our Testimonials
						</span>
						<h2 className='text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]'>
							Whar Our Customers Are Saying
						</h2>
					</div>
					<Slider>
						<Slide index={0} tabIndex='null'>
							<div className='flex'>
								<div className='mt-14 md:flex'>
									<div className='relative lg:w-1/2 sm:w-96 xl:h-96 h-80'>
										<img
											src='https://i.ibb.co/4g1D9cv/imgslider1.png'
											alt='image of profile'
											className='w-full h-full flex-shrink-0 object-fit object-cover rounded'
										/>
										<div className='w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full'>
											<img
												src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg'
												alt='commas'
											/>
										</div>
									</div>
									<div className='md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between'>
										<div>
											<h1 className='text-2xl font-semibold xl:leading-loose text-gray-800'>
												Some of the best work that was done!
											</h1>
											<p className='text-base font-medium leading-6 mt-4 text-gray-600'>
												Our core values are at the heart of all that we do. They
												are integrated into our daily work lives and help us to
												remember our customers always comes first, the last
												thank you should always comes from us.
											</p>
										</div>
										<div className='md:mt-0 mt-8'>
											<p className='text-base font-medium leading-4 text-gray-800'>
												Anna Smith
											</p>
											<p className='text-base leading-4 mt-2 mb-4 text-gray-600'>
												Senior Web Designer
											</p>
										</div>
									</div>
								</div>
							</div>
						</Slide>
						<Slide index={1}>
							<div
								className='flex relative'
								style={{ transform: 'translateX(0%)' }}
							>
								<div className='mt-14 md:flex'>
									<div className='relative lg:w-1/2 sm:w-96 xl:h-96 h-80'>
										<img
											src='https://i.ibb.co/4g1D9cv/imgslider1.png'
											alt='image of profile'
											className='w-full h-full flex-shrink-0 object-fit object-cover rounded'
										/>
										<div className='w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full'>
											<img
												src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg'
												alt='commas'
											/>
										</div>
									</div>
									<div className='md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between'>
										<div>
											<h1 className='text-2xl font-semibold xl:leading-loose text-gray-800'>
												Some of the best work that was done!
											</h1>
											<p className='text-base font-medium leading-6 mt-4 text-gray-600'>
												Our core values are at the heart of all that we do. They
												are integrated into our daily work lives and help us to
												remember our customers always comes first, the last
												thank you should always comes from us.
											</p>
										</div>
										<div className='md:mt-0 mt-8'>
											<p className='text-base font-medium leading-4 text-gray-800'>
												Anna Smith
											</p>
											<p className='text-base leading-4 mt-2 mb-4 text-gray-600'>
												Senior Web Designer
											</p>
										</div>
									</div>
								</div>
							</div>
						</Slide>
					</Slider>
					<div className='flex items-center mt-8'>
						<ButtonBack
							className='cursor-pointer '
							role='button'
							aria-label='previous slide'
						>
							<img
								src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg'
								alt='previous'
							/>
						</ButtonBack>

						<ButtonNext
							role='button'
							aria-label='next slide'
							className='cursor-pointer ml-2'
						>
							<img
								src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg'
								alt='next'
							/>
						</ButtonNext>
					</div>
				</CarouselProvider>
			</div>
		</div>
	);
};

export default Testimonials;
