function generateCarrousel(root, $images, img_width, img_height) {
  const $carrousel = document.querySelector(`${root}`);
  $carrousel.classList.remove('gallery');
  $carrousel.classList.add('carrousel');

  let SelectedIndex = 0;

  $carrousel.innerHTML = `
  <div class="carrousel-images"></div>
  <div class="carrousel-buttons"></div>
  `;

  const $carrouselImages = document.querySelector('.carrousel-images');
  const $carrouselButtons = document.querySelector('.carrousel-buttons');

  $carrouselButtons.innerHTML = `
  <button class="prev">❮</button>
  <button class="next">❯</button>
  `;

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  function insertImage(index) {
    $carrouselImages.innerHTML = `
  <img src="${$images[index].src}" alt="${$images[index].alt}" width="${
      img_width * 2
    }px" height="${img_height * 2}px">
  `;
  }

  insertImage(SelectedIndex);

  next.addEventListener('click', () => {
    SelectedIndex++;
    if (SelectedIndex >= $images.length) {
      SelectedIndex = 0;
    }
    insertImage(SelectedIndex);
  });

  prev.addEventListener('click', () => {
    SelectedIndex--;
    if (SelectedIndex < 0) {
      SelectedIndex = $images.length - 1;
    }
    insertImage(SelectedIndex);
  });
}

function generateGallery(root, $images, img_width, img_height) {
  const $gallery = document.querySelector(`${root}`);
  $gallery.classList.add('gallery');
  $gallery.classList.remove('carrousel');
  $gallery.innerHTML = '';

  $images.forEach((img) => {
    $gallery.innerHTML += `
    <img src="${img.src}" alt="${img.alt}" width="${img_width}px" height="${img_height}px">
    `;
  });
}

function main() {
  let gallery = true;

  const $carrousel_gallery = document.querySelector('.carrousel-gallery');
  const $images = $carrousel_gallery.querySelectorAll('img');
  const $selector = document.querySelector('.carrousel-gallery-selector');

  const img_width = Number($images[0].width.toString().replace('px', ''));
  const img_height = Number($images[0].height.toString().replace('px', ''));

  generateGallery('.carrousel-gallery', $images, img_width, img_height);

  $selector.addEventListener('click', () => {
    if (gallery) {
      generateCarrousel('.carrousel-gallery', $images, img_width, img_height);
      gallery = false;
    } else {
      generateGallery('.carrousel-gallery', $images, img_width, img_height);
      gallery = true;
    }
  });
}

main();
