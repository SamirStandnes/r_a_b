import React from "react";
import './ContentSection.css';

const ContentSection = (props): String => {
	return (
		// Need to add in a id equal to href in nav bar.
		<div id={props.id_name} className="ContentSectionStructure">
			{/* h2 element need to get the name of the sectioon passed to it */}
			<div >
				<h2> Name of section </h2>

				{/* text are need to get text data of the section passed to it */}
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Incidunt necessitatibus obcaecati quos a similique quam
					quisquam voluptate reiciendis nesciunt, ducimus blanditiis
					pariatur expedita iusto, officiis odit architecto beatae
					accusamus corporis!
				</div>
			</div>
		</div>
	);
};

export default ContentSection;
