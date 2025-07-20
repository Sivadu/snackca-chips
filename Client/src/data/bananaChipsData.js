import originalImg from '../assets/banana-chips-hero.jpg';
import periPeriImg from '../assets/banana-chips-masala.jpg';
import masalaImg from '../assets/banana-chips-peri-peri.jpg';

const bananaChips = [
  {
    id: 1,
    name: "Original Banana Chips",
    description: "Classic crispy banana chips with natural sweetness",
    price: 299,
    originalPrice: 349,
    badge: "Bestseller",
    badgeColor: "warning",
    image: originalImg,
    rating: 4.8
  },
  {
    id: 2,
    name: "Peri Peri Banana Chips",
    description: "Spicy peri peri flavored banana chips for the bold",
    price: 329,
    originalPrice: 379,
    badge: "Spicy",
    badgeColor: "success",
    image: periPeriImg,
    rating: 4.8
  },
  {
    id: 3,
    name: "Masala Banana Chips",
    description: "Traditional Indian masala flavored chips",
    price: 319,
    originalPrice: 369,
    badge: "Traditional",
    badgeColor: "success",
    image: masalaImg,
    rating: 4.8
  }
];

export default bananaChips;
