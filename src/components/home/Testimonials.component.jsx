// import {
// 	CarouselProvider,
// 	Slider,
// 	Slide,
// 	ButtonBack,
// 	ButtonNext
// } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Testimonials = () => {
	return (
		<div className='bg-gray-50'>
			<div className='md:px-20 px-8 md:max-w-screen-xl mx-auto relative z-40 bg-gray-50'>
				<div className='min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5'>
					<div className='w-full bg-gray-50 border-gray-200 md:px-5 text-gray-800'>
						<div className='w-full max-w-6xl mx-auto'>
							<div className='text-center max-w-xl mx-auto'>
								<h1 className='text-3xl md:text-7xl font-bold mb-2 md:mb-5 text-gray-600'>
									What people <br />
									are saying.
								</h1>
								<div className='text-center mb-6 md:mb-10'>
									<span className='inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1'></span>
									<span className='inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1'></span>
									<span className='inline-block w-40 h-1 rounded-full bg-indigo-500'></span>
									<span className='inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1'></span>
									<span className='inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1'></span>
								</div>
							</div>
							<div className='-mx-3 md:flex items-start'>
								<div className='px-3 md:w-1/3'>
									<div className='w-full mx-auto rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-800 font-light mb-6'>
										<div className='w-full flex mb-4 items-center'>
											{/* <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
												<img src='https://i.pravatar.cc/100?img=1' alt='' />
											</div> */}
											<div className='flex-grow'>
												<h6 className='text-lg font-bold uppercase text-gray-600'>
													Rajesh Kumar
												</h6>
											</div>
										</div>
										<div className='w-full'>
											<p className='text-sm leading-tight'>
												<span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
													&quot;
												</span>
												I couldn&apos;t be happier with the professionalism and
												expertise of this real estate team. They made my home
												buying experience smooth and stress-free.
												<span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
													&quot;
												</span>
											</p>
										</div>
									</div>
									<div className='w-full mx-auto rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-800 font-light mb-6'>
										<div className='w-full flex mb-4 items-center'>
											{/* <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
												<img src='https://i.pravatar.cc/100?img=2' alt='' />
											</div> */}
											<div className='flex-grow'>
												<h6 className='text-lg font-bold uppercase text-gray-600'>
													Neha Sharma
												</h6>
											</div>
										</div>
										<div className='w-full'>
											<p className='text-sm leading-tight'>
												<span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
													&quot;
												</span>
												The team&apos;s attention to detail and dedication to
												finding me the perfect property was impressive. They
												truly go above and beyond for their clients.
												<span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
													&quot;
												</span>
											</p>
										</div>
									</div>
								</div>
								<div className='px-3 md:w-1/3'>
									<div className='w-full mx-auto rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-800 font-light mb-6'>
										<div className='w-full flex mb-4 items-center'>
											{/* <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
												<img src='https://i.pravatar.cc/100?img=3' alt='' />
											</div> */}
											<div className='flex-grow'>
												<h6 className='text-lg font-bold uppercase text-gray-600'>
													Amit Patel
												</h6>
											</div>
										</div>
										<div className='w-full'>
											<p className='text-sm leading-tight'>
												<span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
													&quot;
												</span>
												From securing necessary approvals to the final
												walk-through, these professionals guided me through
												every step of my construction project. I couldn&apos;t
												have done it without them.
												<span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
													&quot;
												</span>
											</p>
										</div>
									</div>
									<div className='w-full mx-auto rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-800 font-light mb-6'>
										<div className='w-full flex mb-4 items-center'>
											{/* <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
												<img src='https://i.pravatar.cc/100?img=4' alt='' />
											</div> */}
											<div className='flex-grow'>
												<h6 className='text-lg font-bold uppercase text-gray-600'>
													Pooja Verma
												</h6>
											</div>
										</div>
										<div className='w-full'>
											<p className='text-sm leading-tight'>
												<span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
													&quot;
												</span>
												Their renovation expertise transformed my outdated
												property into a modern masterpiece. I&apos;m thrilled
												with the results and would highly recommend their
												services.
												<span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
													&quot;
												</span>
											</p>
										</div>
									</div>
								</div>
								<div className='px-3 md:w-1/3'>
									<div className='w-full mx-auto rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-800 font-light mb-6'>
										<div className='w-full flex mb-4 items-center'>
											{/* <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
												<img src='https://i.pravatar.cc/100?img=5' alt='' />
											</div> */}
											<div className='flex-grow'>
												<h6 className='text-lg font-bold uppercase text-gray-600'>
													Anil Gupta
												</h6>
											</div>
										</div>
										<div className='w-full'>
											<p className='text-sm leading-tight'>
												<span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
													&quot;
												</span>
												Obtaining NOCs and clearances for my property was a
												breeze with their assistance. They saved me time and
												effort, and I&apos;m grateful for their support.
												<span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
													&quot;
												</span>
											</p>
										</div>
									</div>
									<div className='w-full mx-auto rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-800 font-light mb-6'>
										<div className='w-full flex mb-4 items-center'>
											{/* <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
												<img src='https://i.pravatar.cc/100?img=6' alt='' />
											</div> */}
											<div className='flex-grow'>
												<h6 className='text-lg font-bold uppercase text-gray-600'>
													Sneha Reddy
												</h6>
											</div>
										</div>
										<div className='w-full'>
											<p className='text-sm leading-tight'>
												<span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
													&quot;
												</span>
												The ongoing projects I&apos;ve witnessed from this team
												are nothing short of impressive. Their commitment to
												excellence in design and sustainability is truly
												commendable.
												<span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
													&quot;
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
