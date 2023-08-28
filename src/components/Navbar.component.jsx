import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { logo } from '../assets';

const Navbar = () => {
	const { i18n } = useTranslation();

	return (
		<nav className='bg-white border-gray-200 shadow-lg'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-10 md:px-4'>
				<Link to='/' className='flex items-center'>
					<img
						src={logo}
						className='h-8 mr-3'
						alt='Positive Approval Consultants'
					/>
				</Link>
				<div className='flex items-center md:order-2 w-20 relative'>
					<button
						id='dropdownHoverButton'
						data-dropdown-toggle='dropdownHover'
						data-dropdown-trigger='hover'
						className='text-white bg-primary bg-primary-hover font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  justify-center '
						type='button'
					>
						{i18n.language == 'en' ? 'EN' : 'TA'}
						<svg
							className='w-2.5 h-2.5 ml-2.5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='m1 1 4 4 4-4'
							/>
						</svg>
					</button>
					<div
						id='dropdownHover'
						className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full hover:bg-gray-100'
					>
						<ul
							className='py-2 text-gray-700 text-center cursor-pointer'
							aria-labelledby='dropdownHoverButton'
							onClick={() => {
								i18n.changeLanguage(i18n.language == 'en' ? 'ta' : 'en');
							}}
						>
							<li className='px-2 '>{i18n.language == 'en' ? 'TA' : 'EN'}</li>
						</ul>
					</div>

					<button
						data-collapse-toggle='navbar-sticky'
						type='button'
						className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100'
						aria-controls='navbar-sticky'
						aria-expanded='false'
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>
				</div>
				<div
					className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
					id='navbar-sticky'
				>
					<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white'>
						<li>
							<Link
								to='/'
								className='text-center block py-2 pl-3 pr-4 text-primary text-primary-hover rounded md:bg-transparent md:bg-primary md:p-0'
								aria-current='page'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to='/about'
								className='text-center block py-2 pl-3 pr-4 text-gray-900 rounded text-primary-hover md:p-0'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to='/services'
								className='text-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-primary md:p-0'
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								to='/projects'
								className='text-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-primary md:p-0'
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								to='/contact'
								className='text-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-primary md:p-0'
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
