import { loop } from './helpers';

// Handles venture cards animating in via GSAP TimelineMax
function animateVentures() {
  // Set starting delay -> will increment later
  let incrementalStagger = 0.5;

  loop(document.querySelectorAll('.venture'), (elem) => {
    const tl = new TimelineMax({
      delay: incrementalStagger,
    });

    tl.to(
      elem,
      0.5,
      {
        autoAlpha: 1,
      },
      0
    )
      .from(
        elem,
        1.5,
        {
          y: '50',
          transformOrigin: 'center left',
          rotation: '2deg',
          ease: Elastic.easeOut.config(0.5, 0.3),
        },
        0
      )
      .from(
        elem.querySelector('.venture__logo'),
        2,
        {
          autoAlpha: 0,
          y: 50,
          ease: Elastic.easeOut.config(1, 0.5),
        },
        0
      )
      .staggerFrom(
        elem.querySelector('.venture__copy').children,
        2,
        {
          autoAlpha: 0,
          y: '+=20',
          ease: Elastic.easeOut.config(1.3, 0.6),
        },
        0.15,
        0.2
      );

    // SAP is a wrapped row of tags, so it works differently than the other sections
    if (elem.classList.contains('sap')) {
      tl.from(
        elem.querySelectorAll('.venture__preview')[0],
        1.25,
        {
          autoAlpha: 0,
          y: 30,
          ease: Elastic.easeOut.config(1.75, 0.9),
          onComplete: function () {
            elem.classList.remove('animating');
          },
        },
        0.3
      );
    } else {
      tl.staggerFrom(
        elem.querySelectorAll('.venture__preview'),
        1.25,
        {
          autoAlpha: 0,
          y: 30,
          clearProps: 'y',
          ease: Elastic.easeOut.config(1.75, 0.9),
          onComplete: function () {
            elem.classList.remove('animating');
          },
        },
        elem.classList.contains('ftb') ? 0.05 : 0.15,
        0.3
      );
    }

    incrementalStagger += 0.2;
  });
}

// Handles venture hover animations via GSAP TimelineMax
function hoverVentures() {
  // Loop through each venture
  loop(document.querySelectorAll('.venture'), (elem) => {
    const tl = new TimelineMax({
      paused: true,
    });

    // Run animation based on parent class name (varies between each venture)
    switch (true) {
      // HOVER Fight For UX
      case elem.classList.contains('ffux'):
        tl.to(
          elem.querySelectorAll('.venture__preview')[1],
          0.4,
          {
            boxShadow: '7px 7px 30px 0 rgba(0, 0, 0, 0.4)',
            scale: 1,
            ease: Back.easeInOut.config(1.5),
          },
          0
        ).to(
          [
            elem.querySelectorAll('.venture__preview')[0],
            elem.querySelectorAll('.venture__preview')[2],
          ],
          0.5,
          {
            x: '0',
            rotation: 0,
            scale: 1,
            ease: Back.easeOut.config(1.5),
          },
          0.025
        );
        break;

      // HOVER Stock Against Photography
      case elem.classList.contains('sap'):
        tl.from(
          elem.querySelectorAll('.venture__preview')[0],
          0.5,
          {
            xPercent: '150%',
            x: 20,
            ease: Back.easeOut.config(1.5),
          },
          0
        )
          .staggerFrom(
            [
              elem.querySelectorAll('.venture__preview')[1],
              elem.querySelectorAll('.venture__preview')[2],
              elem.querySelectorAll('.venture__preview')[3],
            ],
            0.1,
            {
              autoAlpha: 0,
            },
            0.2,
            0.3
          )
          .staggerFrom(
            [
              elem.querySelectorAll('.venture__preview')[1],
              elem.querySelectorAll('.venture__preview')[2],
              elem.querySelectorAll('.venture__preview')[3],
            ],
            0.5,
            {
              y: 0,
              skewY: '26%',
              x: -15,
              cycle: {
                xPercent: ['-100%', '-200%', '-300%'],
              },
              ease: Back.easeOut.config(1.2),
            },
            0.2,
            0.3
          );
        break;

      // HOVER Bravery
      case elem.classList.contains('bravery'):
        tl.to(elem.querySelectorAll('.venture__preview')[0], 0.5, {
          y: '15%',
          ease: Back.easeOut.config(1.2),
          zIndex: 10,
        })
          .to(
            elem.querySelectorAll('.venture__preview')[2],
            0.5,
            {
              yPercent: '-15%',
              y: '-3',
              ease: Back.easeOut.config(1.2),
            },
            0
          )
          .staggerTo(
            elem.querySelectorAll('.venture__preview'),
            0.5,
            {
              rotationY: 45,
              ease: Back.easeOut.config(1.5),
            },
            0.05,
            0
          )
          .staggerTo(
            elem.querySelectorAll('.venture__preview'),
            0.5,
            {
              scale: 1.4,
            },
            0.05,
            0
          );
        break;

      // HOVER Compass
      case elem.classList.contains('compass'):
        tl.staggerTo(
          elem.querySelectorAll('.venture__preview'),
          1,
          {
            // y: '108%',
            // x: '-108.5%',
            rotationY: '360',
            ease: Back.easeOut.config(1.4),
          },
          0.05
        );

        break;

      // HOVER For the Badge
      case elem.classList.contains('ftb'):
        tl.staggerFromTo(
          elem.querySelectorAll('.venture__preview'),
          0.75,
          {
            autoAlpha: 1,
            y: '0',
          },
          {
            autoAlpha: 0,
            y: '-400',
            ease: Back.easeIn.config(1),
          },
          0.025
        ).staggerFromTo(
          elem.querySelectorAll('.venture__preview'),
          0.75,
          {
            autoAlpha: 0,
            y: 400,
          },
          {
            autoAlpha: 1,
            y: 0,
            ease: Back.easeOut.config(1),
          },
          0.025,
          0.75
        );

        break;
    }

    // Mouse In
    elem.addEventListener('mouseenter', () => {
      // If FTB -OR- Compass -AND- not currently running, play from 0
      if (
        (elem.classList.contains('ftb') && !tl.isActive()) ||
        (elem.classList.contains('compass') && !tl.isActive())
      ) {
        // forces animation to play from start
        tl.play(0);
      } else {
        // plays animation from where timeline ended last
        tl.play();
      }
    });

    // Mouse Out
    elem.addEventListener('mouseleave', () => {
      // If FFUX -OR- SAP -OR- Bravery, reverse timeline
      if (
        elem.classList.contains('ffux') ||
        elem.classList.contains('sap') ||
        elem.classList.contains('bravery')
      ) {
        tl.reverse();
      }
    });
  });
}

const cards = () => {
  animateVentures();
  hoverVentures();
};

export default cards;
