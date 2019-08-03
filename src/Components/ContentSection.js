import React from "react";

const ContentSection = (props): String => {
	return (
			<div id={props.id_name}> {props.text} </div>
		);
};

export default ContentSection;
