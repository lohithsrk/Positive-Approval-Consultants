import { SectionTitle } from '../';

import { mugilan, sakthivignesh } from '../../assets';

const MeetOurTeam = () => (
    <section className='bg-gray-50 '>
        <div className='container px-6 py-3 md:py-10 mx-auto md:pb-16'>
            <SectionTitle pretitle='Team Members' title='Meet Our Team'>
                Our team of experts dedicated to providing exceptional approval consultancy services with years of experience industry. We possess the knowledge and skills to navigate complex regulatory requirements.
            </SectionTitle>
            <div className='flex gap-5 w-full justify-center'>
                {teamMembers.map((member, index) => (
                    <div className='relative w-1/2 md:w-1/6 rounded-md'>
                        <img src={member.image} alt={member.name} className='w-full h-full relative rounded-md' />
                        <div className='w-3/4 absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] bg-white flex flex-col justify-center items-center rounded-md p-3 z-10'>
                            <p>{member.name}</p>
                            <span className='w-7 h-[0.5px] my-0.5 bg-black'></span>
                            <p className='text-gray-500 text-sm'>{member.role}</p>
                        </div>
                        <div className='absolute top-0 left-0 w-full h-full bg-white/90 rounded-md overflow-hidden opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out'>
                            <p className='text-sm p-5'>{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

const teamMembers = [
    {
        name: 'Mr. GP. Mugilan',
        role: 'Architect',
        image: mugilan,
        description: 'GP. Mugilan is the Architect and having master’s degree in management from IIM, Ahmedabad and in-depth knowledge in Real Estate industry across India. He is well versed in approval norms and preparation of approval Drawings.'
    },
    // {
    //     name: 'Mr. P. Udhaya Baskar',
    //     role: 'Rtd. CMDA Official',
    //     image: sakthivignesh,
    //     description: 'Over 30 years of experience in approval process and worked as a consultant for a leading real estate company. He has great understanding in Developer requirements and authorities’ norms.'
    // },
    {
        name: 'Mr. S. Sakthi Vignesh',
        role: 'Legal Advisor',
        image: sakthivignesh,
        description: 'Renowned Lawyer and has an acumen in Property laws and vast knowledge in documents due diligence and over 20 years of experience in Legal Profession which includes corporate experience.'
    }
]

export default MeetOurTeam