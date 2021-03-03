// Show header when scrolling down, reveal when scrolling up
const header = () => {
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
};

export default header;
