import React, {useEffect, useState} from 'react';
import './Navbar.css';
import avatar from './avatar.png'

const Navbar = () => {

	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll" , () => {
			if(window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});

		return () => {
			window.removeEventListener("scroll");
		};

	}, [])

	return (
		<div className={`navbar ${show && "navbar_black"}`}>
			<img 
				className="logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png"
				alt=" Netflix logo"
			/>
			<img 
				className="avatar"
				src={avatar}
				alt="Avatar"
			/>
		</div>
	);
}

export default Navbar;