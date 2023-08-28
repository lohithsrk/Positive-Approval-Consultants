/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
	const { t } = useTranslation();

	const [formDetails, setFormDetails] = useState({
		fullName: '',
		company: '',
		email: '',
		phone: ''
	});

	const handleChange = (e) => {
		setFormDetails({
			...formDetails,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className=''>
			<div className='bg-[#7600ba] w-full h-[40vh] px-4'>
				<div className='max-w-screen-xl h-full md:pb-12 mx-auto flex flex-col md:justify-end md:items-start items-center justify-center font-koulen text-white'>
					<h1 className='font-mono font-extrabold text-2xl '>
						{t('contact.title')}
					</h1>
					<h2 className='font-mono font-extrabold text-4xl text-center md:text-left'>
						{t('contact.subTitleLine1')} <br />
						{t('contact.subTitleLine2')}
					</h2>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-7 max-w-screen-xl px-4 mx-auto mt-10 md:h-[40vh] justify-center items-center md:items-start md:justify-start'>
				<div className='flex'>
					<HiLocationMarker color='#7600ba' className='w-8 h-8 mr-2' />
					<div>
						<h3 className='text-xl font-extrabold'>
							{t('contact.locationTitle')}
						</h3>
						<p className='text-gray-600'>{t('contact.address.line1')}</p>
						<p className='text-gray-600'>{t('contact.address.line2')}</p>
						<p className='text-gray-600'>{t('contact.address.line3')}</p>
					</div>
				</div>
				<div className='flex'>
					<HiMail color='#7600ba' className='w-8 h-8 mr-2' />
					<div>
						<h3 className='text-xl font-extrabold'>
							{t('contact.contactDetails')}
						</h3>
						<p className='text-gray-600'>{t('contact.email')}</p>
						<p className='text-gray-600'>{t('contact.phone')}</p>
					</div>
				</div>
			</div>
			<form className='md:w-2/6 md:absolute md:right-0 md:-translate-x-1/4 md:top-1/2 md:-translate-y-[45%] bg-white mt-10 md:mt-0 md:py-10 px-10 rounded-lg shadow-lg'>
				<h1 className='text-3xl font-bold mb-2 text-center md:text-left'>
					{t('contact.form.title')}
				</h1>
				<div className='mb-3'>
					<label
						htmlFor='fullName'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						{t('contact.form.fullName')}
					</label>
					<input
						type='text'
						id='fullName'
						name='fullName'
						value={formDetails['fullName']}
						onChange={handleChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
						placeholder='Name'
						required
					/>
				</div>

				<div className='mb-3'>
					<label
						htmlFor='company'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						{t('contact.form.company')}
					</label>
					<input
						type='text'
						id='company'
						name='company'
						value={formDetails['company']}
						onChange={handleChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
						placeholder={t('contact.form.company')}
						required
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='phone'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						{t('contact.form.phoneNumber')}
					</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						value={formDetails['phone']}
						onChange={handleChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
						placeholder='9884881302'
						pattern='[0-9]{10}'
						required
					/>
				</div>
				<div className='mb-6'>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						{t('contact.form.emailAddress')}
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formDetails['email']}
						onChange={handleChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
						placeholder='positiveapproval@gmail.com'
						required
					/>
				</div>

				<button
					type='submit'
					className='md:w-auto text-white bg-primary bg-primary-hover font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-all'
				>
					{t('contact.submit')}
				</button>
			</form>
		</div>
	);
};

export default Contact;
