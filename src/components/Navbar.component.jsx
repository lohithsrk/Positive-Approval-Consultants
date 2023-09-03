import { Link, NavLink } from 'react-router-dom';

import { logo } from '../assets';

const Navbar = () => {
	return (
		<nav className='bg-white border-gray-200 shadow-lg fixed w-full z-50'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-10 md:px-4'>
				<Link to='/' className='flex items-center'>
					<img
						src={logo}
						className='h-12 mr-3'
						alt='Positive Approval Consultants'
					/>
				</Link>
				<div
					className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
					id='navbar-sticky'
				>
					<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white'>
						{navLinks.map((navLink, i) => (
							<li key={i} className='flex items-center'>
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
								Book for consulting
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
	{
		link: '/clients',
		name: 'Clients'
	}
];

export default Navbar;
