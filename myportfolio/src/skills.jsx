import React from 'react'
import images from
'./images/WhatsApp Image 2025-08-15 at 2.08.15 PM.jpeg'

class Skills extends React.Component{

	render(){

		return(


			<>
				
			<div className="h-auto flex flex-wrap justify-evenly pt-5  gap-2 flex-grow-0 m-5 mb-0 bg-fixed scroll-smooth">
				<div className="w-80">
					<img className="hover:cursor-pointer" src={images}/>
				</div>
				<div className="w-80">
					<h1 className="text-4xl font-sans font-semibold uppercase pt-4">skills</h1>
						{/*frontend development*/}
						<div className="pt-8">
							<p className="py-2 font-sans font-semibold capitalize">frontend development</p>
							<div className="w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  						<div className="bg-teal-500 h-2.5 rounded-full w-52"></div>
						</div>
						</div>
						{/*backend development rating*/}
						<div className="pt-8">
							<p className="py-2 font-sans font-semibold capitalize">backend development</p>
							<div className="w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  				<div className="bg-teal-500 h-2.5 rounded-full w-52">
  				</div>
				</div>
				</div>
				{/*UI UX*/}
				<div className="pt-8 mb-20">
							<p className="py-2 font-sans font-semibold capitalize">ui ux design</p>
							<div className="w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  				<div className="bg-teal-500 h-2.5 rounded-full w-52"></div>
				</div></div>
				</div>
			</div>

			</>


			)
	}
}

export default Skills