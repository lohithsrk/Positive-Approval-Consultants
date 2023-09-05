/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { primaryColor } from '../utilities/constants.util';

const Contact = () => {
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
		<div className='flex flex-col md:block'>
			<div className='order-1 bg-primary w-full h-[40vh] px-4'>
				<div className='max-w-screen-xl h-full md:pb-12 mx-auto flex flex-col md:justify-end md:items-start items-center justify-center  text-white'>
					<h1 className='font-mono font-extrabold text-2xl '>Contact Us</h1>
					<h2 className='font-mono font-extrabold text-4xl text-center md:text-left'>
						Let&apos;s talk about <br />
						your problem.
					</h2>
				</div>
			</div>
			<div className='order-3 flex flex-col md:flex-row gap-7 max-w-screen-xl mx-auto mt-10 mb-10 md:mb-0 md:h-[53vh] justify-center items-center md:items-start md:justify-start'>
				<div className='flex'>
					<HiLocationMarker color={primaryColor} className='w-8 h-8 mr-2' />
					<div>
						<h3 className='text-xl font-extrabold'>Our Location</h3>
						<p className='text-gray-600'>Door No.3, Bharathi Block,</p>
						<p className='text-gray-600'>Gopal Street, Jafferkhanpet</p>
						<p className='text-gray-600'>Chennai - 600083</p>
					</div>
				</div>
				<div className='flex'>
					<HiMail color={primaryColor} className='w-8 h-8 mr-2' />
					<div>
						<h3 className='text-xl font-extrabold'>How can we help?</h3>
						<p className='text-gray-600'>positiveapproval@gmail.com</p>
						<p className='text-gray-600'>+91 9884881302</p>
					</div>
				</div>
			</div>
			<form className='order-2 md:w-2/6 md:absolute md:right-0 md:-translate-x-1/4 md:top-1/2 md:-translate-y-[45%] bg-white mt-10 md:mt-0 md:py-10 px-10 rounded-lg md:shadow-lg'>
				<h1 className='text-3xl font-bold mb-2 text-center md:text-left'>
					Send us a Message
				</h1>
				<div className='mb-3'>
					<label
						htmlFor='fullName'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Full Name
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
						Company
					</label>
					<input
						type='text'
						id='company'
						name='company'
						value={formDetails['company']}
						onChange={handleChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
						placeholder='Company'
						required
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='phone'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Phone number
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
						Email address
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
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
