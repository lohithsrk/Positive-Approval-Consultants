import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LiaFacebookF, LiaInstagram } from 'react-icons/lia';

import { logo } from '../assets';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className='bg-white shadow-[-0_-35px_-60px_rgba(0,0,0,1)]'>
			<div className='mx-auto w-full max-w-screen-xl px-10 py-10 md:py-6 lg:py-8'>
				<div className='flex md:flex-row flex-col md:justify-between'>
					<div className='mb-6 md:mb-0 flex items-center justify-center'>
						<Link to='/' className='flex items-center'>
							<img
								src={logo}
								className='h-8 mr-3'
								alt='Positive Approval Consultants'
							/>
						</Link>
					</div>
					<div className='flex gap-x-20 items-start justify-center'>
						<div>
							<h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase'>
								Services
							</h2>
							<ul className='text-gray-500 font-medium'>
								<li className='mb-2'>
									<Link to='/' className='hover:underline'>
										Home
									</Link>
								</li>
								<li className='mb-2'>
									<Link to='/about' className='hover:underline'>
										About
									</Link>
								</li>
								<li className='mb-2'>
									<Link to='/services' className='hover:underline'>
										Services
									</Link>
								</li>
								<li className='mb-2'>
									<Link to='/projects' className='hover:underline'>
										Projects
									</Link>
								</li>
								<li className='mb-2'>
									<Link to='/contact' className='hover:underline'>
										Contact
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase'>
								Menu
							</h2>
							<ul className='text-gray-500 font-medium'>
								<li className='mb-2'>
									<Link to='/' className='hover:underline'>
										Home
									</Link>
								</li>
								<li className='mb-2'>
									<Link to='/about' className='hover:underline'>
										About
									</Link>
								</li>
								<li className='mb-2'>
									<Link to='/services' className='hover:underline'>
										Services
									</Link>
								</li>
								<li className='mb-2'>
									<Link to='/projects' className='hover:underline'>
										Projects
									</Link>
								</li>
								<li className='mb-2'>
									<Link to='/contact' className='hover:underline'>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						<div className='hidden md:block'>
							<h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase '>
								Get in touch
							</h2>
							<ul className='text-gray-500 font-medium'>
								<li className='mb-2'>
									<p className='text-gray-600'>{t('contact.address.line1')}</p>
									<p className='text-gray-600'>{t('contact.address.line2')}</p>
									<p className='text-gray-600'>{t('contact.address.line3')}</p>
								</li>
								<li className='mb-2'>
									<a
										href={`tel:${t('contact.phone')}`}
										className='text-gray-600'
									>
										{t('contact.phone')}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<div className='flex flex-col md:flex-row justify-center items-center md:justify-between'>
					<span className='text-sm text-gray-500 sm:text-center'>
						© 2023{' '}
						<Link to='/' className='hover:underline'>
							Positive Approval Consultants
						</Link>
						. All Rights Reserved.
					</span>
					<div className='flex mt-4 space-x-2 sm:justify-center items-center sm:mt-0'>
						<span className='text-sm  text-gray-500 sm:text-center'>
							<Link
								to='https://lohith.pro'
								className='hover:underline font-extrabold'
							>
								Contact Developer
							</Link>
						</span>
						<Link to='/' className='text-gray-500 hover:text-gray-900'>
							<LiaFacebookF className='w-5 h-5' />
						</Link>
						<Link to='/' className='text-gray-500 hover:text-gray-900'>
							<LiaInstagram className='w-6 h-6' />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
