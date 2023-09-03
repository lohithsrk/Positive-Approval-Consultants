import { SectionTitle } from '../';

const Clients = () => {
	return (
		<div className='p-20 py-10 bg-gray-50 '>
			<div className='max-w-screen-xl mx-auto'>
				<SectionTitle pretitle='Ongoing Clients' title='What are we working on'>
					In the midst of development, our ongoing projects reflect our
					dedication to creating exceptional properties through innovation,
					sustainability, and top-notch quality for discerning buyers and
					investors.
				</SectionTitle>
				{/* {Clients.map((p, i) => (
					<div
						className={`flex pb-8 mb-8 border-b ${i % 2 != 0 && 'flex-row-reverse'}`}
						key={i}
					>
						<div
							className={`flex ${
								i % 2 != 0 && 'flex-row-reverse'
							} gap-8 items-center relative `}
						>
							<img
								src={achievements}
								className='w-52 h-72 object-cover'
								alt=''
							/>
							<img
								src={achievements}
								className='w-60 h-96 object-cover'
								alt=''
							/>
						</div>
						<div
							className={`${
								i % 2 == 0 ? 'ml-8 items-start' : 'mr-8 items-end'
							} flex flex-col py-5`}
						>
							<h4
								className={`text-dark mb-3 text-xl font-semibold relative after:content-[""] after:w-1 after:h-full after:absolute after:bg-black after:rounded-full ${
									i % 2 == 0
										? 'text-left after:left-0 pl-2'
										: 'text-right after:right-0 pr-2'
								}`}
							>
								Refreshing Design
							</h4>
							<p className='text-body-color'>
								We dejoy working with discerning clients, people for whom
								qualuty, service, integrity & aesthetics.
							</p>
							<div className='my-5'>
								<div className={`flex mb-3 items-center gap-3 ${i%2!=0?"flex-row-reverse":"flex-row"}`}>
									<img src={dummy} className='w-12 h-12' alt='' />
									<span>Service 1</span>
								</div>
								<div className={`flex mb-3 items-center gap-3 ${i%2!=0?"flex-row-reverse":"flex-row"}`}>
									<img src={dummy} className='w-12 h-12' alt='' />
									<span>Service 1</span>
								</div>
								<div className={`flex mb-3 items-center gap-3 ${i%2!=0?"flex-row-reverse":"flex-row"}`}>
									<img src={dummy} className='w-12 h-12' alt='' />
									<span>Service 1</span>
								</div>
							</div>
						</div>
					</div>
				))} */}
				<div className='flex flex-col justify-center'>
					<div className='relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white'>
						<div className='w-full md:w-1/3 bg-white grid place-items-center'>
							<img
								src='https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
								alt='tailwind logo'
								className='rounded-xl'
							/>
						</div>
						<div className='w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3'>
							{/* <div className='flex justify-between item-center'>
								<p className='text-gray-500 font-medium hidden md:block'>
									Vacations
								</p>
								<div className='flex items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 text-yellow-500'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
									</svg>
									<p className='text-gray-600 font-bold text-sm ml-1'>
										4.96
										<span className='text-gray-500 font-normal'>
											(76 reviews)
										</span>
									</p>
								</div>
								<div className=''>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 text-pink-500'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
								<div className='bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block'>
									Superhost
								</div>
							</div> */}
							<h3 className='font-black text-gray-800 md:text-3xl text-xl'>
								Mystic Meadows Residency
							</h3>
							<p className='md:text-lg text-gray-500 text-base'>
								Immerse yourself in the charm of nature at &quot;Mystic Meadows
								Residency&quot; our ongoing Indian project. Nestled in the
								picturesque hills, this development offers eco-friendly homes,
								lush landscapes, and a serene lifestyle.
							</p>
							{/* <p className='text-xl font-black text-gray-800'>
								$110
								<span className='font-normal text-gray-600 text-base'>
									/night
								</span>
							</p> */}
						</div>
					</div>
				</div>
				<br />
				<div className='flex flex-col justify-center'>
					<div className='relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white'>
						<div className='w-full md:w-1/3 bg-white grid place-items-center'>
							<img
								src='https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
								alt='tailwind logo'
								className='rounded-xl'
							/>
						</div>
						<div className='w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3'>
							{/* <div className='flex justify-between item-center'>
								<p className='text-gray-500 font-medium hidden md:block'>
									Vacations
								</p>
								<div className='flex items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 text-yellow-500'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
									</svg>
									<p className='text-gray-600 font-bold text-sm ml-1'>
										4.96
										<span className='text-gray-500 font-normal'>
											(76 reviews)
										</span>
									</p>
								</div>
								<div className=''>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 text-pink-500'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
								<div className='bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block'>
									Superhost
								</div>
							</div> */}
							<h3 className='font-black text-gray-800 md:text-3xl text-xl'>
								Mystic Meadows Residency
							</h3>
							<p className='md:text-lg text-gray-500 text-base'>
								Immerse yourself in the charm of nature at &quot;Mystic Meadows
								Residency&quot; our ongoing Indian project. Nestled in the
								picturesque hills, this development offers eco-friendly homes,
								lush landscapes, and a serene lifestyle.
							</p>
							{/* <p className='text-xl font-black text-gray-800'>
								$110
								<span className='font-normal text-gray-600 text-base'>
									/night
								</span>
							</p> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// var Clients = [1, 2, 3];

export default Clients;
