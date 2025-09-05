import React from 'react'
import Heading from './heading'
import Nav from './nav'
import images from
'./images/hero-image.jpeg';
class Banner extends React.Component{

	render(){

		return(

			<div className = "bg-gray-800 h-96 pd-52 bg-blend-overlay bg-center
				bg-cover bg-no-repeat sm:bg-fixed scroll-smooth md:bg-fixed scroll-smooth" id="hero-image">
				<Nav/>
				<Heading/>
				
			</div>

			)
	}
}

export default Banner