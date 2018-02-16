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
                    y: '50',
                    // x: 150,
                    transformOrigin: 'center left',
                    rotation: '2deg',
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

        if (elem.classList.contains('sap')) {
            tl.from(
                elem.querySelectorAll('.venture__preview')[0],
                1.25,
                {
                    autoAlpha: 0,
                    y: 30,
                    ease: Elastic.easeOut.config(1.75, 0.9),
                    onComplete: function() {
                        elem.classList.remove('animating');
                    }
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
                    ease: Elastic.easeOut.config(1.75, 0.9),
                    onComplete: function() {
                        elem.classList.remove('animating');
                    }
                },
                elem.classList.contains('ftb') ? 0.05 : 0.15,
                0.3
            );
        }

        incrementalStagger += 0.2;
    });
})();

loop(document.querySelectorAll('.venture'), elem => {
    const tl = new TimelineMax({
        paused: true
    });

    switch (true) {
        // HOVER Fight For UX
        case elem.classList.contains('ffux'):
            tl
                .to(
                    elem.querySelectorAll('.venture__preview')[1],
                    0.4,
                    {
                        boxShadow: '7px 7px 30px 0 rgba(0, 0, 0, 0.4)',
                        scale: 1,
                        ease: Back.easeInOut.config(1.5)
                    },
                    0
                )
                .to(
                    [
                        elem.querySelectorAll('.venture__preview')[0],
                        elem.querySelectorAll('.venture__preview')[2]
                    ],
                    0.5,
                    {
                        x: '0',
                        rotation: 0,
                        scale: 1,
                        ease: Back.easeOut.config(1.5)
                    },
                    0.025
                );
            break;

        // HOVER Stock Against Photography
        case elem.classList.contains('sap'):
            tl
                .from(
                    elem.querySelectorAll('.venture__preview')[0],
                    0.5,
                    {
                        xPercent: '150%',
                        x: 20,
                        ease: Back.easeOut.config(1.5)
                    },
                    0
                )
                .staggerFrom(
                    [
                        elem.querySelectorAll('.venture__preview')[1],
                        elem.querySelectorAll('.venture__preview')[2],
                        elem.querySelectorAll('.venture__preview')[3]
                    ],
                    0.1,
                    {
                        autoAlpha: 0
                    },
                    0.2,
                    0.3
                )
                .staggerFrom(
                    [
                        elem.querySelectorAll('.venture__preview')[1],
                        elem.querySelectorAll('.venture__preview')[2],
                        elem.querySelectorAll('.venture__preview')[3]
                    ],
                    0.5,
                    {
                        y: 0,
                        skewY: '26%',
                        x: -15,
                        cycle: {
                            xPercent: ['-100%', '-200%', '-300%']
                        },
                        ease: Back.easeOut.config(1.2)
                    },
                    0.2,
                    0.3
                );
            break;

        // HOVER Bravery
        case elem.classList.contains('bravery'):
            tl
                .to(elem.querySelectorAll('.venture__preview')[0], 0.5, {
                    y: '15%',
                    ease: Back.easeOut.config(1.2),
                    zIndex: 10
                })
                .to(
                    elem.querySelectorAll('.venture__preview')[2],
                    0.5,
                    {
                        yPercent: '-15%',
                        y: '-3',
                        ease: Back.easeOut.config(1.2)
                    },
                    0
                )
                .staggerTo(
                    elem.querySelectorAll('.venture__preview'),
                    0.5,
                    {
                        rotationY: 45,
                        ease: Back.easeOut.config(1.5)
                    },
                    0.05,
                    0
                )
                .staggerTo(
                    elem.querySelectorAll('.venture__preview'),
                    0.5,
                    {
                        scale: 1.4
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
                    ease: Back.easeOut.config(1.4)
                },
                0.05
            );

            break;

        // HOVER For the Badge
        case elem.classList.contains('ftb'):
            tl
                .staggerFromTo(
                    elem.querySelectorAll('.venture__preview'),
                    0.75,
                    {
                        autoAlpha: 1,
                        y: '0'
                    },
                    {
                        autoAlpha: 0,
                        y: '-400',
                        ease: Back.easeIn.config(1)
                    },
                    0.025
                )
                .staggerFromTo(
                    elem.querySelectorAll('.venture__preview'),
                    0.75,
                    {
                        autoAlpha: 0,
                        y: 400
                    },
                    {
                        autoAlpha: 1,
                        y: 0,
                        ease: Back.easeOut.config(1)
                    },
                    0.025,
                    0.75
                );

            break;
    }

    // Mouse In
    elem.addEventListener('mouseenter', () => {
        console.log('enter');
        if (
            (elem.classList.contains('ftb') && !tl.isActive()) ||
            (elem.classList.contains('compass') && !tl.isActive())
        ) {
            tl.play(0);
        } else {
            tl.play();
        }
    });

    // Mouse Out
    elem.addEventListener('mouseleave', () => {
        console.log('exit');
        if (
            elem.classList.contains('ffux') ||
            elem.classList.contains('sap') ||
            elem.classList.contains('bravery')
        ) {
            tl.reverse();
        }
    });
});

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
