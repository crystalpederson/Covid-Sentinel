import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div class='flex justify-center border-t-2'>
			{/* <footer> */}
			<div class='text-left'>Copyright &#169; 2022. All rights reserved.</div>
			<FontAwesomeIcon
				icon={faGithub}
				class='object-cover w-10 h-10 mx-auto'
			></FontAwesomeIcon>
			<div class='align-bottom text-right'>Powered by XCodeStack.</div>
			{/* </footer> */}
		</div>
	);
};

export default Footer;
