const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGallery = document.querySelector(".gallery");

const createGalleryItem = ({ url, alt }) => {
  return `<li class="gallery-item">
  <img src="${url}" alt="${alt}" class="gallery-image"/>
  </li>`;
};

const galleryMarkup = images.map(createGalleryItem).join("");
ulGallery.insertAdjacentHTML("beforeend", galleryMarkup);

const ulStyles = ulGallery.style;
ulStyles.listStyle = "none";
ulStyles.display = "flex";
ulStyles.flexDirection = "column";
ulStyles.gap = "16px";

const liStyles = document.querySelectorAll(".gallery-item");
liStyles.forEach(item => {
  const itemStyles = item.style;
  itemStyles.flex = "0 0 calc(33.33% - 16px)";
  itemStyles.margin = "0";
  itemStyles.padding = "0";
  itemStyles.textAlign = "center";
});

const imgStyles = document.querySelectorAll(".gallery-image");
imgStyles.forEach(image => {
  const imageStyles = image.style;
  imageStyles.maxWidth = "100%";
  imageStyles.height = "auto";
});