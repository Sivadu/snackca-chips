import sweetJackfruit from '../assets/jackfruit-chips-hero.jpg';
import spicyJackfruit from '../assets/jackfruit-chips-sweet.jpg';
import originalJackfruit from '../assets/jackfruit-chips-spicy.jpg';

const jackfruitChips = [
  {
    id: 1,
    name: "Sweet Jackfruit Chips",
    description: "Naturally sweet and crispy jackfruit chips",
    price: 359,
    originalPrice: 409,
    badge: "Sweet",
    badgeColor: "warning",
    image: sweetJackfruit,
    rating: 4.7,
    discount: "SAVE 18%"
  },
  {
    id: 2,
    name: "Spicy Jackfruit Chips",
    description: "Fiery spiced jackfruit chips with chili blend",
    price: 359,
    originalPrice: 409,
    badge: "Hot",
    badgeColor: "success",
    image: spicyJackfruit,
    rating: 4.7,
    discount: "SAVE 12%"
  },
  {
    id: 3,
    name: "Original Jackfruit Chips",
    description: "Pure jackfruit flavor with minimal seasoning",
    price: 339,
    originalPrice: 389,
    badge: "Natural",
    badgeColor: "success",
    image: originalJackfruit,
    rating: 4.7,
    discount: "SAVE 12%"
  }
];

export default jackfruitChips;
