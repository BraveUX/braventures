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
    let incrementalStagger = 0.2;

    loop(document.querySelectorAll('.venture'), elem => {
        const tl = new TimelineMax({ delay: incrementalStagger });

        tl
            .from(
                elem,
                0.5,
                {
                    autoAlpha: 0
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
                { autoAlpha: 0, y: 50, ease: Elastic.easeOut.config(1, 0.5) },
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

    loop(document.querySelectorAll('.venture'), elem => {
        const tl = new TimelineMax({ paused: true });
        tl.staggerTo(
            elem.querySelectorAll('.venture__preview'),
            0.25,
            {
                // y: -20,
                repeat: 1,
                yoyo: true
            },
            0.15,
            0
        );

        elem.addEventListener('mouseenter', () => {
            console.log('enter');
            tl.play(0);
        });

        elem.addEventListener('mouseleave', () => {
            console.log('exit');
            // tl.reverse();
        });
    });
})();
