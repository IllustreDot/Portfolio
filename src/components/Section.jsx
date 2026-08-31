const Section = ({ title, children }) => {
	return (
		<div className="mb-6">
			<h3 className="text-lg font-semibold mb-4">{title}</h3>
			{children}
		</div>
	);
};

export default Section;
