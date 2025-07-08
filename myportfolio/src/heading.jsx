import React from 'react';
import $ from 'jquery';

class Heading extends React.Component {
  componentDidMount() {
    const isMobile = window.innerWidth < 600;
    let lastScrollTop = 0;

    if (!isMobile) {
      $('#heading')
        .css({ position: 'relative', left: '-100px' })
        .animate({ left: '0px' }, 9000);

      $(window).on('scroll', function () {
        let currentScroll = $(this).scrollTop();

        if (currentScroll < lastScrollTop) {
          $('#heading').stop().animate({ left: '50px' }, 1000);
        } else {
          $('#heading').stop().animate({ left: '0px' }, 1000);
        }

        lastScrollTop = currentScroll;
      });
    } else {
      $('#heading').css({ position: 'relative', left: '0px' });
    }
  }

  render() {
    return (
      <div className="flex justify-center flex-wrap py-5 ml-10" id="heading">
        <h1 className="text-white font-sans text-5xl md:text-5xl font-semibold capitalize">
          hi, i'm <br />
          gabriel w. kun <br />
          full stack software <br />
          developer
        </h1>
      </div>
    );
  }
}

export default Heading;