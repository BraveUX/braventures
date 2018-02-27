// Auto scroll back to top when header logo/title interacted with
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

// Show header when scrolling down, reveal when scrolling up
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
