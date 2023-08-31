import { achievements, dummy } from '../../assets';

const Projects = () => {
	return (
		<div className='p-20 py-10 bg-white '>
			<div className='max-w-screen-xl mx-auto'>
				<div className='mx-auto  mb-12 max-w-[510px] text-center lg:mb-20'>
					<span className='text-primary mb-2 block text-lg font-semibold'>
						Our Projects
					</span>
					<h2 className='text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]'>
						What We Did
					</h2>
				</div>
				{projects.map((p, i) => (
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
				))}
			</div>
		</div>
	);
};

var projects = [1, 2, 3];

export default Projects;
