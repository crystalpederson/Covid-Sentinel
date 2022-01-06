import React from 'react';
import Map from './Map';

import { Outlet, Link } from "react-router-dom";

// function NavBar () {
//   return (
//           <nav>
//             <div>
//                 COVID SENTINEL
//             </div>
//             <nav>
//               <ul>
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link to="/countries">Countries</Link>
//                 </li>
//               </ul>
//             </nav>
      
//             <hr />
      
//             <Outlet />
//           </nav>
//         );
//       }

// const NavBar = ({ toggle }) => {
//     return (
//       <nav
//         className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
//         role='navigation'
//       >
//         <Link to='/' className='pl-8'>
//           COOVID SENTINEL
//         </Link>
//         <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
//         </div>
//         <div className='pr-8 md:block  hidden'>
//           <Link to='/' className='p-4'>
//             Map
//           </Link>
//           {/* <Link to='/map' className='p-4'>
//             Map
//           </Link> */}
//           <Link to='/countries' className='p-4'>
//             Countries
//           </Link>
//           <Link to='/about' className='p-4'>
//             About
//           </Link>
//         </div>
//       </nav>
//     );
//   };

export default NavBar;