import React from 'react'

class Rating extends React.Component{

	render(){

		return (

			<>
			<div className = "h-96 bg-white border-t-2 border-t-gray-300 m-5">

				<div className = "flex flex-wrap gap-2 justify-evenly pt-20">
					<div className="text-center font-sans pb-3 uppercase">
						<h1 className="text-center font-sans font-semibold  text-3xl lowercase pb-3">
							23
						</h1>
						paid-projects
					</div>
					<div className="text-center font-sans pb-3 uppercase">
						<h1 className="text-center font-sans font-semibold  text-3xl lowercase pb-3">
							15
						</h1>
						personal-projects
					</div>
				</div>
			</div>
			</>

			)
	}
}

export default Rating