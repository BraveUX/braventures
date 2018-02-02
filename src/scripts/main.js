// (function animateVenturesScroll() {
//     const controller = new ScrollMagic.Controller();

//     loop(document.querySelectorAll('.venture'), elem => {
//         const tl = new TimelineMax({ repeat: -1 });
//         const bounce = new TimelineMax();
//         const preview = elem.querySelector('.venture__box--preview').children;

//         tl.staggerFromTo(
//             elem,
//             0.6,
//             {
//                 autoAlpha: 0
//             },
//             { autoAlpha: 1 },
//             2
//         );

//         new ScrollMagic.Scene({
//             triggerElement: elem,
//             triggerHook: 0.75,
//             reverse: true
//         })
//             .setTween(tl)
//             .addIndicators({ name: 'Box Tween' })
//             .addTo(controller);
//     });
// })();

(function animateVentures() {
    let incrementalStagger = 0.5;

    loop(document.querySelectorAll('.venture'), elem => {
        const tl = new TimelineMax({
            delay: incrementalStagger
        });

        tl
            .to(
                elem,
                0.5,
                {
                    autoAlpha: 1
                },
                0
            )
            .from(
                elem,
                1.5,
                {
                    y: 20,
                    x: 150,
                    transformOrigin: 'center left',
                    rotation: '10deg',
                    ease: Elastic.easeOut.config(0.5, 0.3)
                },
                0
            )
            .from(
                elem.querySelector('.venture__logo'),
                2,
                {
                    autoAlpha: 0,
                    y: 50,
                    ease: Elastic.easeOut.config(1, 0.5)
                },
                0
            )
            .staggerFrom(
                elem.querySelector('.venture__copy').children,
                2,
                {
                    autoAlpha: 0,
                    y: '+=20',
                    ease: Elastic.easeOut.config(1.3, 0.6)
                },
                0.15,
                0.2
            );

        if (!elem.classList.contains('ftb')) {
            tl.staggerFrom(
                elem.querySelectorAll('.venture__preview'),
                1.25,
                {
                    autoAlpha: 0,
                    y: 30,
                    ease: Elastic.easeOut.config(1.75, 0.9),
                    onComplete: function() {
                        elem.classList.remove('animating');
                    }
                },
                0.15,
                0.3
            );
        } else {
            tl.staggerFrom(
                elem.querySelectorAll('.venture__preview'),
                0.5,
                {
                    rotationX: '90deg',
                    transformOrigin: '100% 0',
                    ease: Power2.easeOut,
                    onComplete: function() {
                        elem.classList.remove('animating');
                    }
                },
                0.1,
                0.3
            );
        }

        incrementalStagger += 0.2;
    });

    // Hover states
    /* loop(document.querySelectorAll('.venture'), elem => {
        const tl = new TimelineMax({
            paused: true
        });

        // FFUX Hover
        if (elem.classList.contains('ffux')) {
            tl
                .fromTo(
                    elem.querySelectorAll('.venture__preview')[1],
                    0.5, {
                        boxShadow: '0 0 0.1px rgba(0,0,0,0.25), 0 0 0.1px rgba(0,0,0,0.22)'
                    }, {
                        scale: 1.15,
                        zIndex: 1,
                        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                        ease: Back.easeOut.config(1.7)
                    },
                    0
                )
                .to(
                    elem.querySelectorAll('.venture__preview')[0],
                    0.5, {
                        x: '50%',
                        rotation: -25,
                        scale: 0.9,
                        ease: Back.easeOut.config(1.7)
                    },
                    0.05
                )
                .to(
                    elem.querySelectorAll('.venture__preview')[2],
                    0.5, {
                        x: '-50%',
                        rotation: 25,
                        scale: 0.9,
                        ease: Back.easeOut.config(1.7)
                    },
                    0.05
                );
        }

        // Mouse In
        elem.addEventListener('mouseenter', () => {
            console.log('enter');
            tl.play();
        });

        // Mouse Out
        elem.addEventListener('mouseleave', () => {
            console.log('exit');
            tl.reverse();
        });
    }); */
})();

(function scrollTop() {
    let intervalId = 0; // Needed to cancel the scrolling when we're at the top of the page

    function scrollStep() {
        // Check if we're at the top already. If so, stop scrolling by clearing the interval
        if (window.pageYOffset === 0) {
            clearInterval(intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
    }

    function scrollToTop(event) {
        event.preventDefault();
        this.stopPropagation;

        // Call the function scrollStep() every 16.66 millisecons
        intervalId = setInterval(scrollStep, 16.66);
    }

    // When the DOM is loaded, this click handler is added to our scroll button
    loop(document.querySelectorAll('.header__logo, .header__title'), elem => {
        elem.addEventListener('click', scrollToTop);
    });
})();

(function headerReveal() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > lastScroll && scrollTop >= 400) {
            header.classList.remove('is-visible');
            lastScroll = scrollTop;
        } else {
            header.classList.add('is-visible');
            lastScroll = scrollTop;
        }
    });
})();
