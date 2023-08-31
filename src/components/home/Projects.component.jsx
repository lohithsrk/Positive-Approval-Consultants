import { achievements } from '../../assets';

const Projects = () => {
	return (
		<div className='p-20 bg-white'>
			<div className='mx-auto mb-12 max-w-[510px] text-center lg:mb-20'>
				<span className='text-primary mb-2 block text-lg font-semibold'>
					Our Projects
				</span>
				<h2 className='text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]'>
					What We Did
				</h2>
			</div>
			{projects.map((p, i) => (
				<div
					className={`flex mb-16 ${i % 2 != 0 && 'flex-row-reverse'}`}
					key={i}
				>
					<div
						className={`flex ${
							i % 2 == 0 && 'flex-row-reverse'
						} gap-8 items-center relative `}
					>
						<div
							className={`w-56 h-80 bg-[url('assets/achievements.jpg')] bg-cover after:absolute after:content-["m"] after:bg-[url('assets/achievements.jpg')] after:top-3/4 after:left-3/4 after:w-full after:h-full after:bg-cover`}
						></div>
					</div>
					<div className={i % 2 == 0 ? 'ml-8' : 'mr-8'}>
						<h4 className='text-dark mb-3 text-xl font-semibold'>
							Refreshing Design
						</h4>
						<p className='text-body-color'>
							We dejoy working with discerning clients, people for whom qualuty,
							service, integrity & aesthetics.
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

var projects = [1, 2, 3];

export default Projects;
