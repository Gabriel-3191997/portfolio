import React from 'react';
import $ from 'jquery';
import images from './images/WhatsApp Image 2025-08-15 at 2.08.15 PM.jpeg';

class Skills extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      function animateProgressBar($bar) {
        const finalWidth = $bar.data('width');
        $bar.css({ width: '0' }).animate({ width: finalWidth }, 1500, function () {
          $bar.animate({ width: '0' }, 1500, function () {
            animateProgressBar($bar);
          });
        });
      }

      $(".progress-bar").each(function () {
        animateProgressBar($(this));
      });

      // Slide image automatically
      $("#img-slide").css({ position: 'relative' }).animate({ left: "20px" }, 1000);
    });
  }

  render() {
    return (
      <>
        <div className="h-auto flex flex-wrap md:justify-evenly justify-center  pt-5 gap-2 grow-0 md:m-5 mb-0 bg-fixed scroll-smooth">
          <div className="md:w-80 w-auto mr-10">
            <img
              className="hover:cursor-pointer"
              src={images}
              alt="skills"
              id="img-slide"
            />
          </div>

          <div className="w-80">
            <h1 className="text-4xl font-sans font-semibold uppercase pt-4">
              skills
            </h1>

            <div className="pt-8">
              <p className="py-2 font-sans font-semibold capitalize">
                frontend development
              </p>
              <div className="w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="progress-bar bg-teal-500 h-2.5 rounded-full"
                  data-width="70%"
                ></div>
              </div>
            </div>

            <div className="pt-8">
              <p className="py-2 font-sans font-semibold capitalize">
                backend development
              </p>
              <div className="w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="progress-bar bg-teal-500 h-2.5 rounded-full"
                  data-width="60%"
                ></div>
              </div>
            </div>

            <div className="pt-8 mb-20">
              <p className="py-2 font-sans font-semibold capitalize">ui ux design</p>
              <div className="w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="progress-bar bg-teal-500 h-2.5 rounded-full"
                  data-width="80%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
