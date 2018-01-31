(function animateVentures() {
    const controller = new ScrollMagic.Controller();
    const masterTimeline = new TimelineMax();
    let ventureIndex = 1;
    let tl = [];

    loop(document.querySelectorAll('.venture'), elem => {
        const logo = elem.querySelector('.venture__logo');
        tl[ventureIndex] = new TimelineMax();

        tl[ventureIndex].fromTo(
            elem,
            0.6,
            {
                autoAlpha: 0
            },
            { autoAlpha: 1 }
        );

        new ScrollMagic.Scene({ triggerElement: elem, triggerHook: 0.65, reverse: false })
            .setTween(tl[ventureIndex])
            .addIndicators({ name: 'Venture Tween' })
            .addTo(controller);

        console.log(ventureIndex);
        ventureIndex += 1;
    });
})();
