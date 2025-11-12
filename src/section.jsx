import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import './App.css'

class Section extends React.Component{

	render(){

		return(

			<>
				<div className="bg-teal-500 h-2/3 pb-16">
					<h1 className = "text-center text-white font-sans font-semibold py-10 text-4xl capitalize">
						what i do
					</h1>
					<div className="flex flex-wrap justify-evenly gap-3">

				<div className="w-80 h-72 bg-white md:w-96 md:h-80">
								<div className="w-20 ml-5 mt-5 text-teal-500 text-4xl font-normal">
    <FontAwesomeIcon icon={faDesktop} />
  </div>
					<h1 className="text-teal font-sans ml-5 text-3xl font-semibold capitalize py-3">web development
					</h1>
					<p className="text-md font-sans ml-5 capitalize m-2">
						As a passionate developer, specialize in using modern, in-demand technologies such as ReactJS for frontend development and Express.js with MySQL for backend development.
					</p>
				</div>
				<div className="w-80 md:w-96 bg-white h-72">
					<div className="w-20 ml-5 mt-5 text-teal-500 text-4xl font-normal">
    <FontAwesomeIcon icon={faDesktop} />
  </div>
					<h1 className="text-teal font-sans ml-5 text-3xl font-semibold capitalize py-3">
						<span className="uppercase">ui ux</span>
					</h1>
					<p className="text-left font-sans capitalize text-md ml-5 m-3">
						As a passionate UI/UX designer, I specialize in creating intuitive digital experiences using industry-leading tools like Figma and Adobe XD
					</p>
				</div>
			</div>
			<div className="database flex flex-wrap justify-center mt-5 md:mt-8 gap-2">
			<div className="w-80 md:w-96 bg-white h-80 md:h-72">
										<div className="w-20 ml-5 mt-5 text-teal-500 text-4xl font-normal">
    <FontAwesomeIcon icon={faDesktop} />
  </div>
					<h1 className="text-teal font-sans ml-5 text-3xl font-semibold capitalize py-3">
						data base management
					</h1>
					<p className="text-left  text-md font-sans ml-5 capitalize m-2">
						Experienced Database Administrator skilled in MySQL and MongoDB, with a proven ability to ensure data integrity, security, and scalability while delivering efficient, data-driven solutions.
					</p>
			</div>
			</div>

				</div>

			</>

			)
	}
}

export default Section