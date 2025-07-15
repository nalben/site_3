const items = document.querySelectorAll('.questions__item');

items.forEach(item => {
  const headline = item.querySelector('.questions__item-headline');
  const imgBlack = headline.querySelectorAll('img')[0];
  const imgOrange = headline.querySelectorAll('img')[1];

  headline.addEventListener('click', () => {
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        const imgs = i.querySelectorAll('.questions__item-headline img');
        imgs[0].src = "../img/plus_black.svg";
        imgs[1].src = "../img/plus_orange.svg";
      }
    });

    const isActive = item.classList.toggle('active');

    if (isActive) {
      imgBlack.src = "../img/minus_black.svg";
      imgOrange.src = "../img/minus_orange.svg";
    } else {
      imgBlack.src = "../img/plus_black.svg";
      imgOrange.src = "../img/plus_orange.svg";
    }
  });
});
