import {
	FaceSmileIcon,
	CursorArrowRippleIcon,
	HeartIcon,
	CogIcon,
	DocumentIcon,
	HandThumbUpIcon
} from '@heroicons/react/24/solid';

import benefitOneImg from '/img/benefit-one.webp';
import benefitTwoImg from '/img/benefit-two.webp';

export const primaryColor = '#0014b6';

export const services = {
	approval: {
		title: 'Approval',
		description:
			'Obtaining approvals is the crucial first step in your real estate project. We streamline the process, ensuring compliance with regulations, saving you time and paving the way for your vision.',
		link: '/services/approval',
		sectionTitle: 'Optimized Project Approval Services',
		sectionDescription:
			'Navigate approvals efficiently with our expert guidance and support.',
		services: [
			{
				title: 'DTCP',
				description:
					'DTCP approval is essential for housing, institutions, and industrial layouts in Chennai metropolitan areas. We specialize in DTCP approvals in Tamil Nadu, ensuring compliance with all regulations.'
			},
			{
				title: 'CMDA',
				description:
					'Ensure your land purchase within Chennai city limits is CMDA approved. We offer comprehensive consultation services, verifying CMDA approvals for residential developments.'
			},
			{
				title: 'CORPORATION',
				description:
					'For construction, expansion, and house building permits in Chennai, Corporation approval is a must. Our services cover planning permission and developmental approvals.'
			},
			{
				title: 'RERA',
				description:
					"RERA, or Real Estate Regulatory Authority, safeguards homebuyers and boosts real estate investments. We work with TNRERA to ensure transparency in Tamil Nadu's real estate sector."
			},
			{
				title: 'CMDA REGULARISATION',
				description:
					'Explore the CMDA regularization scheme in Tamil Nadu, allowing the legalization of unauthorized and unapproved plots in both urban and rural areas across the state.'
			},
			{
				title: 'DTCP REGULARISATION',
				description:
					"Supporting the government's efforts to prevent illegal land conversions, we ensure only approved plots are registered, maintaining transparency and compliance in property transactions."
			}
		]
	},
	noc: {
		title: 'NOC',
		description:
			'NOCs (No Objection Certificates) are essential for real estate ventures. We specialize in securing these vital documents, ensuring your project aligns with local regulations and moves forward smoothly.',
		link: '/services/noc',
		sectionTitle: 'Simplified NOC Procurement Solutions',
		sectionDescription:
			'Effortlessly secure NOCs for your projects with our expert assistance.',
		services: [
			{
				title: 'AIRPORT NOC',
				description:
					'For projects near airports, we facilitate the approval process. Ensuring compliance with aviation regulations and safety measures, we secure the necessary Airport NOC for your development.'
			},
			{
				title: 'INDIAN AIR FORCE',
				description:
					'Projects near Indian Air Force facilities require careful approval processes. We specialize in securing the necessary NOC and compliance for developments in proximity to IAF areas.'
			},
			{
				title: 'FIRE NOC',
				description:
					'Safety is paramount for any project. We assist in obtaining Fire NOCs, ensuring your property meets fire safety standards, and safeguarding occupants and assets from potential risks.'
			},
			{
				title: 'PWD NOC',
				description:
					'Infrastructure projects often require PWD NOCs. We streamline the approval process, ensuring your development aligns with public works regulations and standards.'
			},
			{
				title: 'CRZ NOC',
				description:
					'Coastal projects need CRZ NOCs. We specialize in navigating the Coastal Regulation Zone regulations, securing the necessary approvals for your coastal developments.'
			},
			{
				title: 'SEWAGE TREATMENT PLANT DESIGN (as per CMDA Norms)',
				description:
					'We provide expertise in designing Sewage Treatment Plants compliant with CMDA norms. Ensure proper wastewater management and environmental compliance for your project.'
			},
			{
				title: 'TRAFFIC NOC',
				description:
					'Traffic management is vital for large developments. We assist in obtaining Traffic NOCs, ensuring your project addresses traffic flow and safety requirements effectively.'
			},
			{
				title: 'HIGHWAY NOC',
				description:
					'Projects near highways require Highway NOCs. We facilitate the approval process, ensuring your development aligns with highway regulations and standards.'
			},
			{
				title: 'REVENUE DEPARTMENT NOC',
				description:
					'Navigating revenue-related approvals is crucial. We specialize in securing Revenue Department NOCs, ensuring your project adheres to all revenue-related regulations.'
			},
			{
				title: 'WET LAND/DRY LAND ETC.,',
				description:
					'Developments on wetlands or drylands require specialized approvals. We navigate these unique landscapes, securing the necessary NOCs for your project.'
			},
			{
				title: 'FLOOD NOC',
				description:
					'For projects in flood-prone areas, we secure Flood NOCs. Our expertise ensures your development is flood-resistant and complies with safety measures.'
			},
			{
				title: 'METRO RAIL NOC',
				description:
					'Projects near metro rail infrastructure need Metro Rail NOCs. We specialize in obtaining these approvals, ensuring your development aligns with metro rail regulations.'
			},
			{
				title: 'RAIN WATER HARVESTING NOC',
				description:
					'Rainwater harvesting is essential for sustainability. We secure Rainwater Harvesting NOCs, ensuring your project complies with water conservation and environmental standards.'
			}
		]
	},
	clearance: {
		title: 'Clearance',
		description:
			'Clearance is a critical step in ensuring your project complies with legal and environmental standards. We specialize in facilitating this process, guiding you toward a smooth and compliant endeavor.',
		link: '/services/clearance',
		sectionTitle: 'Efficient Compliance and Clearance Services',
		sectionDescription:
			'Ensure project compliance with streamlined clearance procedures and expert advice.',
		services: [
			{
				title: 'EIA',
				description:
					'Environmental Impact Assessment (EIA) is a process of evaluating the likely environmental impacts of a proposed project or development, taking into account inter-related socio-economic, cultural and human-health impacts, both beneficial and adverse.'
			},
			{
				title: 'TURN KEY PROJECTS',
				description:
					'A turnkey project ensures that when the project is ready, it is returned to the client fully operable. It describes a project in which the provider is responsible for delivering the entire result to the client.'
			},
			{
				title: 'TNPCB APPROVALS (CTE,CTO,HWA,EWA)',
				description:
					'TNPCB approvals cover various aspects like Consent to Establish (CTE), Consent to Operate (CTO), Hazardous Waste Authorization (HWA), and Environmental Waste Authorization (EWA). These approvals are essential for compliance and operations.'
			},
			{
				title: 'LABORATORY SERVICES',
				description:
					'Laboratory services encompass a range of clinical diagnostic tests, including blood tests, urinalysis, tissue specimen analysis, and screening tests. These services are ordered by doctors and practitioners for patient diagnosis.'
			}
		]
	},
	construction: {
		title: 'Construction',
		description:
			"Crafting is where your vision becomes reality. Our experts adeptly oversee construction, shaping your ideas into tangible creations with precision and dedication, ensuring your project's success.",
		link: '/services/construction',
		sectionTitle: 'Professional Construction Services for Your Vision',
		sectionDescription:
			'Transform your ideas into reality with our expert construction solutions.',
		services: [
			{
				title: 'Building Alteration Work and Renovation work',
				description:
					'Our building alteration and renovation services breathe new life into existing structures. We excel in transforming spaces, enhancing functionality, and bringing fresh vitality to your property.'
			},
			{
				title: 'Individual House Construction',
				description:
					'We specialize in individual house construction, turning your dream home into reality. Our expert team crafts personalized residences tailored to your unique vision and needs.'
			},
			{
				title: 'Individual Villa Construction',
				description:
					'Experience the epitome of luxury living with our individual villa construction services. We design and build bespoke villas that reflect your style, sophistication, and preferences.'
			},
			{
				title: 'Individual Row house',
				description:
					'Our individual row house construction services offer distinctive living spaces. We create functional and elegant row houses, emphasizing comfort and modern design.'
			},
			{
				title: 'Individual Apartments',
				description:
					'Discover our individual apartment construction services. We craft multi-functional living spaces, combining style and convenience to provide the perfect apartment living experience.'
			},
			{
				title: 'Plumbing Work',
				description:
					"Count on us for efficient plumbing solutions. Our plumbing services cover everything from repairs to installations, ensuring your property's water systems are in top condition."
			},
			{
				title: 'Electrical work',
				description:
					'Electrical work is our expertise. We handle installations, repairs, and maintenance, ensuring a safe and reliable electrical system for your property.'
			},
			{
				title: 'Painting work',
				description:
					"Elevate your property's aesthetics with our painting services. We offer professional painting solutions that transform spaces and enhance their visual appeal."
			},
			{
				title: 'Interior Designs',
				description:
					'Unlock the potential of your interiors with our expert design services. We create captivating and functional interior spaces that reflect your unique style.'
			},
			{
				title: 'Carpentry Works',
				description:
					'Our carpentry works cover everything from custom furniture to intricate woodwork. We bring craftsmanship to your property, adding beauty and functionality.'
			},
			{
				title: 'Structural Stability',
				description:
					'Ensure the structural integrity of your property with our stability assessments and solutions. We provide expert insights and improvements to guarantee safety.'
			},
			{
				title: 'Soil Test',
				description:
					'Our soil testing services are essential for construction projects. We assess soil quality and composition, providing valuable insights to support sound construction decisions.'
			}
		]
	},
	renovation: {
		title: 'Renovation',
		description:
			'Renovation breathes new life into spaces. Our skilled team specializes in revitalizing and transforming areas, enhancing functionality and aesthetics, ensuring your property is renewed to perfection.',
		link: '/services/renovation',
		sectionTitle: 'Revitalize Spaces with Expert Renovation Services',
		sectionDescription:
			'Enhance properties with our renovation expertise and modern design concepts.',
		services: [
			{
				title: 'Residential Renovation',
				description:
					'Transform your home with our residential renovation services. We revitalize living spaces, upgrade amenities, and enhance aesthetics, making your home more comfortable and appealing.'
			},
			{
				title: 'Commercial Renovation',
				description:
					'Revamp your business space with our commercial renovation expertise. We create functional and inviting commercial environments that leave a lasting impression on clients and employees.'
			},
			{
				title: 'Interior Renovation',
				description:
					'Elevate your interiors with our interior renovation services. We bring new life to indoor spaces, focusing on design, layout, and functionality to create inspiring environments.'
			},
			{
				title: 'Exterior Renovation',
				description:
					"Enhance your property's curb appeal with our exterior renovation solutions. We upgrade exteriors, landscaping, and facades, making your property stand out and shine."
			},
			{
				title: 'Kitchen Renovation',
				description:
					'Experience the heart of your home in a new light with our kitchen renovation services. We design and remodel kitchens, optimizing space and functionality.'
			},
			{
				title: 'Bathroom Renovation',
				description:
					'Indulge in luxury with our bathroom renovation expertise. We transform bathrooms into tranquil retreats, combining style, comfort, and modern amenities.'
			},
			{
				title: 'Whole Home Renovation',
				description:
					'Unlock the full potential of your property with our whole home renovation services. We reimagine and renovate entire homes, creating cohesive and stunning living spaces.'
			},
			{
				title: 'Historic Renovation',
				description:
					'Preserve the past with our historic renovation solutions. We restore historic properties to their former glory, maintaining architectural integrity while adding modern comfort.'
			},
			{
				title: 'Energy-Efficient Renovation',
				description:
					'Invest in sustainability with our energy-efficient renovation services. We upgrade properties to be eco-friendly, saving you money and reducing environmental impact.'
			},
			{
				title: 'Retail Renovation',
				description:
					'Refresh your retail space with our retail renovation expertise. We enhance store layouts and aesthetics, improving customer experience and driving business growth.'
			},
			{
				title: 'Office Renovation',
				description:
					'Optimize your workspace with our office renovation services. We create functional and inspiring office environments that promote productivity and employee well-being.'
			},
			{
				title: 'Hotel Renovation',
				description:
					'Elevate guest experiences with our hotel renovation solutions. We revitalize hotel spaces, ensuring comfort and luxury, and leaving a lasting impression on guests.'
			}
		]
	}
};

const benefitOne = {
	title: 'Our Pinnacle Attributes',
	desc: 'Discover what sets Positive Approvals apart. Explore our core strengths and how we can make a difference in your journey, one milestone at a time.',
	image: benefitOneImg,
	bullets: [
		{
			title: 'Customer-Centric Approach',
			desc: 'We prioritize understanding and meeting your customer needs.',
			icon: <FaceSmileIcon />
		},
		{
			title: 'Enhanced Acquisition Strategies',
			desc: 'We optimize methods to attract and acquire clients..',
			icon: <CursorArrowRippleIcon />
		},
		{
			title: 'Fostering Customer Loyalty',
			desc: 'Our strategies drive long-term customer relationships and retention.',
			icon: <HeartIcon />
		}
	]
};

const benefitTwo = {
	title: "Our Business's Core Strengths and Values",
	desc: 'Explore the essence of Positive Approvals through our core strengths: Customer focus, acquisition expertise, retention mastery, streamlined processes, compliance excellence, and innovation-driven solutions. Discover success with us.',
	image: benefitTwoImg,
	bullets: [
		{
			title: 'Streamlined Processes',
			desc: 'We simplify complex tasks, making operations efficient and effective.',
			icon: <CogIcon />
		},
		{
			title: 'Compliance Expertise',
			desc: 'Our team ensures adherence to regulations, mitigating risks.',
			icon: <DocumentIcon />
		},
		{
			title: 'Innovation-driven Solutions',
			desc: 'We leverage cutting-edge technology to drive your business forward.',
			icon: <HandThumbUpIcon />
		}
	]
};

export { benefitOne, benefitTwo };
