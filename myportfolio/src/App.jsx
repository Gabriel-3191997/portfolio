import React from 'react'
import './App.css'
import Banner from './banner'
import Content from './content-section'
import Section from './section'
import Skills from './skills'

class App extends React.Component {

  render(){

    return(

      <>
        
       <Banner/>
       <Content/>
       <Section/>
       <Skills/>
      </>

      )
  }
}

export default App