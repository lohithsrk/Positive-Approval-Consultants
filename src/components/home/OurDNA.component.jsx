/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from 'react';
import SectionTitle from "../SectionTitle.component";
import { ourDNA } from '../../utilities/constants.util';

const OurDNA = () => {
    const [maxHeight, setMaxHeight] = useState(0);
    const slideRefs = useRef([]);

    useEffect(() => {
        if (slideRefs.current.length > 0) {
            const heights = slideRefs.current.map((ref) => ref?.offsetHeight || 0);
            const tallest = Math.max(...heights);
            setMaxHeight(tallest);
        }
    }, []);

    return (
        <section className='bg-gray-50 '>
            <div className='container px-6 py-3 md:py-10 max-w-screen-xl mx-auto md:pb-16'>
                <SectionTitle pretitle='Our DNA' title='We are driven by'>
                    We offer approval assistance, NOC and clearance services, construction
                    management, and renovation expertise to simplify your real estate
                    ventures and bring your property visions to life.
                </SectionTitle>

                <div className='flex flex-col md:flex-row gap-4'>
                    {ourDNA.map((dna, i) => (
                        <div className='relative w-80' style={{ height: maxHeight ? `${maxHeight}px` : 'auto' }}>
                            <Slide
                                title={dna.title}
                                description={dna.description}
                                ref={(el) => (slideRefs.current[i] = el)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Slide = React.forwardRef(({ title, description, link }, ref) => {
    return (
        <div
            ref={ref}
            className="h-full p-4 md:p-8 space-y-2 md:space-y-3 border-2 border-primary rounded-xl w-full"
        >
            {/* <span className='inline-block text-primary'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z' />
                </svg>
            </span> */}

            <h1 className='text-2xl font-semibold text-gray-700 capitalize'>{title}</h1>
            <p className='text-gray-500'>{description}</p>
        </div>
    );
});

export default OurDNA;
