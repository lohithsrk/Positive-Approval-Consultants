/* eslint-disable react/prop-types */
const Container = (props) => {
	return (
		<div
			className={`container px-8 md:py-8 mx-auto xl:px-0 ${
				props.className ? props.className : ''
			}`}
		>
			{props.children}
		</div>
	);
};

export default Container;
