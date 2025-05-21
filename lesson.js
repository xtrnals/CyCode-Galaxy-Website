
{/*forEach lets you loop the scroll per seaction
and querySelectorAll('.lesson-page') selects all of the
lesson-page class */}
document.querySelectorAll('.lesson-page').forEach(section => {

{/*selected classes */}
  const container = section.querySelector('.container');
  const LeftArrowScroll = section.querySelector('.left-arrow');
  const RightArrowScroll = section.querySelector('.right-arrow');

{/*This is how far you're gonna scroll within your screen */}
  const scrollCount = 350;

  RightArrowScroll.addEventListener('click', () => {
    container.scrollBy({ left: scrollCount, behavior: 'smooth' });
    scrollCheck();
  });

  LeftArrowScroll.addEventListener('click', () => {
    container.scrollBy({ left: -scrollCount, behavior: 'smooth' });
    scrollCheck();
  });

  function scrollCheck() {
    setTimeout(() => {
      const leftScroll = container.scrollLeft;
      const leftScrollLimit = container.scrollWidth - container.clientWidth;

      LeftArrowScroll.style.display = leftScroll > 0 ? 'block' : 'none';
      RightArrowScroll.style.display = leftScrollLimit > leftScroll ? 'block' : 'none';
    }, 350);
  }

  scrollCheck();
});


document.querySelectorAll('.cyber-page').forEach(section => {

{/*selected classes */}
  const container = section.querySelector('.container');
  const LeftArrowScroll = section.querySelector('.left-arrow');
  const RightArrowScroll = section.querySelector('.right-arrow');

{/*This is how far you're gonna scroll within your screen */}
  const scrollCount = 350;

  RightArrowScroll.addEventListener('click', () => {
    container.scrollBy({ left: scrollCount, behavior: 'smooth' });
    setTimeout(scrollCheck, 350);
  });

  LeftArrowScroll.addEventListener('click', () => {
    container.scrollBy({ left: -scrollCount, behavior: 'smooth' });
    setTimeout(scrollCheck, 350);
  });

});

function scrollCheck() {
  document.querySelectorAll('.cyber-page').forEach(section => {
    const container = section.querySelector('.container');
    const LeftArrowScroll = section.querySelector('.left-arrow');
    const RightArrowScroll = section.querySelector('.right-arrow');
    const leftScroll = container.scrollLeft;
    const leftScrollLimit = container.scrollWidth - container.clientWidth;

    LeftArrowScroll.style.display = leftScroll > 0 ? 'block' : 'none';
    RightArrowScroll.style.display = leftScroll < leftScrollLimit ? 'block' : 'none';
  });
}

scrollCheck();

function Coursepage(...pageIds) {
    {/*all of the class .section is stored the allofthesection*/}
    const allofthesection = document.querySelectorAll('.section');

    allofthesection.forEach(section => {
        {/*Hide all of the sections that is not in the list*/}
        if (!pageIds.includes(section.id)) {
            section.style.display = 'none';
        }
    });
        {/*Shows the only called id, meaning it only shows the code of the called id*/}    
    pageIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) section.style.display = 'block';
    });
    scrollCheck();
}