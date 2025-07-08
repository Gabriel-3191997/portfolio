import React from 'react'
import './App.css'
import Banner from './banner'
import Content from './content-section'
import Section from './section'
import Skills from './skills'
import Rating from './rating'
// import $ from 'jquery';

class App extends React.Component {

  render(){

    return(

      <>
        
       <Banner/>
       <Content/>
       <Section/>
       <Skills/>
       <Rating/>
      </>

      )
  }
}

export default App