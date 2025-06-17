import React from 'react'
import images from
'./images/487804623_2475805612812201_4372487470002518231_n.jpg'
class Content extends React.Component{

	render(){

		return (

			<div className = "flex flex-wrap justify-evenly m-8 pt-3">
				<div>
					<img className="w-96 hover:cursor-pointer" src = {images}/>
				</div>
				<div className="max-w-2xl">
					<h1 className ="text-3xl font-semibold capitalize py-5 m-2">auto biography</h1>
					<p className="font-sans p-3 md:text-justify">
					Full Stack Developer with 2–3 years of experience in building responsive web applications using ReactJS, ExpressJS, MySQL, and Python. Skilled in both frontend and backend development, database management, and data analysis. Backed by multiple certifications in programming and IT, with a strong focus on scalable, efficient solutions and a proven ability to contribute to real-world projects. Passionate about continuous learning, innovation, and impactful problem-solving.


					</p>
			</div>
		</div>


			)
	}
}

export default Content