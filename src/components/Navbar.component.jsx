import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { logo } from '../assets';

const Navbar = () => {
	const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
	return (
		<nav className='bg-white border-gray-200 shadow-lg md:fixed w-full z-50'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-10 md:px-4'>
				<Link to='/' className='flex items-center'>
					<img
						src={logo}
						className='h-12 mr-3'
						alt='Positive Approvals'
					/>
				</Link>

				<button
					type='button'
					className='md:hidden ml-3 text-gray-400 hover:text-gray-900 rounded-lg inline-flex items-center justify-center'
					onClick={() => setIsMobileNavOpened(!isMobileNavOpened)}
				>
					<span className='sr-only'>Open main menu</span>
					<svg
						className='w-6 h-6'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http:www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
							clipRule='evenodd'
						></path>
					</svg>
					<svg
						className='hidden w-6 h-6'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http:www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
							clipRule='evenodd'
						></path>
					</svg>
				</button>

				<div
					className={`items-center justify-between ${
						!isMobileNavOpened && 'hidden'
					} w-full md:flex md:w-auto md:order-1`}
				>
					<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white'>
						{navLinks.map((navLink, i) => (
							<li
								key={i}
								className='flex items-center justify-center md:justify-normal'
							>
								<NavLink
									to={navLink.link}
									className={({ isActive }) =>
										`text-center block py-2 pl-3 pr-4 ${
											isActive && 'text-primary'
										} text-primary-hover rounded md:bg-transparent md:bg-primary md:p-0`
									}
								>
									{navLink.name}
								</NavLink>
							</li>
						))}
						<li>
							<NavLink
								to='/contact'
								className={`text-center block py-2 pl-3 pr-4  bg-primary-hover rounded-lg text-white  bg-primary p-10`}
							>
								Book Now
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const navLinks = [
	{
		link: '/',
		name: 'Home'
	},
	{
		link: '/about',
		name: 'About'
	},
	{
		link: '/services',
		name: 'Services'
	},
	// {
	// 	link: '/clients',
	// 	name: 'Clients'
	// }
];

export default Navbar;
