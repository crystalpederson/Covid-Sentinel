import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#EBEBEB] border-t-2">
      <div className="text-left">
        Copyright &#169; 2022.  All rights reserved.  Powered by Team Ninja Turtles.
      </div>
      {/* <FontAwesomeIcon
        icon={faGithub}
        className="object-cover w-10 h-10 mx-auto"
      ></FontAwesomeIcon> */}
      {/* <div className="align-bottom text-right"></div> */}
    </div>
  );
};

export default Footer;
