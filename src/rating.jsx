import React from 'react'
import $ from 'jquery'

class Rating extends React.Component {

  componentDidMount() {

    const animateCount = (selector, target) => {

      let current = 0
      
      const interval = setInterval(() => {
        
        current++

        $(selector).text(current)

        if (current >= target) 

          clearInterval(interval)

      }, 100)

    }

    const observer = new 

    IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`

            const currentVal = parseInt($(id).text(), 10)

            const target = id === '#counter_1' ? 23 : 15

            if (currentVal !== target) {

              animateCount(id, target)
            }
          }

        })

      },

      { threshold: 0.8 }
    )

    const counter1 = document.getElementById('counter_1')

    const counter2 = document.getElementById('counter_2')

    if (counter1 && counter2) {

      observer.observe(counter1)
      observer.observe(counter2)

    }
  }

  render() {

    return (
      <div className="h-72 bg-white border-none m-5">
        <div className="flex flex-wrap gap-2 justify-evenly pt-20">
          <div className="text-center font-sans pb-3 uppercase">
            <h1 className="text-3xl font-semibold pb-3" id="counter_1">0</h1>
            paid-projects
          </div>
          <div className="text-center font-sans pb-3 uppercase">
            <h1 className="text-3xl font-semibold pb-3" id="counter_2">0</h1>
            personal-projects
          </div>
        </div>
      </div>

    )
  }
}

export default Rating