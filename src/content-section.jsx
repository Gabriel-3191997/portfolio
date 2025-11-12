import React from 'react';
import $ from 'jquery';
import image from './images/dev_img.jpeg';

class Content extends React.Component {

  componentDidMount() {
    $("span#text").hide();

    $("#readmore").click(function () {
      $("span#text").toggle();
    });

    const content = $("#content");

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {

      content.css({ position: "relative", left: "0px" });

      return;
    }

    content.css({ position: "relative", left: "30px" });

    let isVisible = false;

    $(window).on("scroll", function () {
      
      const windowHeight = $(window).height();

      const scrollTop = $(window).scrollTop();

      const elementOffset = content.offset().top;

      const elementHeight = content.height();

      const elementCenter = elementOffset + elementHeight / 2;

      const windowCenter = scrollTop + windowHeight / 2;

      if (Math.abs(windowCenter - elementCenter) < 100) {

        if (!isVisible) {

          content.stop().animate({ left: '20px' }, 500);

          isVisible = true;

        }
      } else {

        if (isVisible) {

          content.stop().css({ left: '-20px' });
          isVisible = false;

        }
      }
        // Slide image automatically
      $("#img").css({ position: 'relative' }).animate({ left: "20px" }, 1000);
    });
  }

  render() {
    return (
      <div className="flex flex-wrap justify-evenly m-8 pt-3">
        <div>
          <img className="w-96 hover:cursor-pointer hover:bg-blend-overlay hover:bg-gray-800" src={image} alt="Profile" id="img" />
        </div>
        <div className="max-w-2xl" id="content">
          <h1 className="text-3xl font-semibold capitalize py-5 m-2">auto biography</h1>
          <p className="font-sans p-3 md:text-justify text-ellipsis">
            Full Stack Developer with 2–3 years of experience in building responsive web applications using ReactJS, ExpressJS, MySQL, and Python. Skilled in both frontend and backend development, database management, and data analysis.
            <span id="text">
              &nbsp;Backed by multiple certifications in programming and IT, with a strong focus on scalable, efficient solutions and a proven ability to contribute to real-world projects. Passionate about continuous learning, innovation, and impactful problem-solving.
            </span>
            <span className="text-teal-700 flex-col flex mt-2">
              <a href="#" id="readmore" className="text-teal-700">Read more</a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Content;