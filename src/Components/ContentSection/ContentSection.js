import React from "react";
import './ContentSection.css';

const ContentSection = (props) => {
	return (
		// Need to add in a id equal to href in nav bar.
		<div id={props.id_name} className="ContentSectionStructure">
			{/* h2 element need to get the name of the sectioon passed to it */}
			<div >
				<h2> Name of section </h2>

				{/* text are need to get text data of the section passed to it */}
				<div>
					{props.text}
				</div>
			</div>
		</div>
	);
};

export default ContentSection;
