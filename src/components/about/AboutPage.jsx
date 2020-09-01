import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GitHubIcon } from '../../assets/iconos/git-hub.svg';

const Button = styled.button`
	padding: 12px 24px;
    border-radius: 0;
    background-color: #1a1a1a;
    color: #fff;
    font-size: .8rem;

    :hover {
		background-color: #070707;
	}
`;

const AboutPage = () => (
	<div className="text-center d-flex flex-column align-items-center container">
		<h2 className="font-normal">ABOUT</h2>

		<p className="my-4">This project was built for practice purposes using Context API by React.</p>

		<Button className="btn d-flex text-center align-items-center"> 
		<GitHubIcon /> <span className="ml-2">VISIT REPO</span></Button>
	</div>
)

export default AboutPage;