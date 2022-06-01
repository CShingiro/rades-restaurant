import { FoodItem } from 'app/types';
import { v4 as uuidv4 } from 'uuid';

export const BreakFastMenuList = [
  {
    id: uuidv4(),
    name: 'Cheese Burger',
    price: '$9.99',
    description:
      'Bun, Beef Pattie, Mozarrella, Mayonnaise, Tomato, Red Onion, Pickle, Chipotle Lettuce',
    src: 'CheeseBurger.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Vegetable Soup',
    price: '$7.90',
    description:
      'Leeks, Fennel, Cauliflower, Carrot, Celery, Garlic, Salt, Black Pepper (Salad/Rice/Fries extra $2.99/Poutine ext $5.99)',
    src: 'SeasonalSoup.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Chicken Shawarma Wrap',
    price: '$9.99',
    description:
      'Hummus, Tahini, Chipotle, Red Onion, Lettuce, Tomato, Pickle (Salad/Rice/Fries extra $2.99 /Poutine extra $5.99)',
    src: 'ChickenWrap.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Beet Salad',
    price: '$5.99',
    description:
      'Lettuce Mix, Red Onion, Olive Oil, Balsamic, Beet, Goat Cheese, (chicken extra $4.00)',
    src: 'BeetSalad.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Beef Stew Rice',
    price: '$10.99',
    description:
      'Beef, Onion, Butter, Salt, Black Pepper on Rice, Parsley (Salad/Rice/Friex extra $2.99 /Poutine extra $5.99)',
    src: 'BeefStewRice.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Poutine',
    price: '$5.99',
    description:
      'Fries, Cheese Curds, Gravy (Chicken/Beef extra $4.00), (Salad/Rice/Fries extra $2.99)',
    src: 'Poutine.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Hummus Foul',
    price: '$9.99',
    description:
      'Fava Beans, Red Onion, Tomato, Green Peppers, Olive Oil, Egg Boiled, Slices of Bread. (Salad/Rice/Fries extra $2.99/Poutine extra $5.99)',
    src: 'HummusFoul.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Shukshuka',
    price: '$10.99',
    description:
      'Marinara, Garlic, Three Eggs, Black Pepper, Sea Salt, Chickpeas, Top Parsley, Sliced Bread (Chicken extra $4.00)(Salad/Rice/Fries extra $2.99)',
    src: 'Shukshuka.jpeg',
  },
] as FoodItem[];

export const LunchMenuList = [
  {
    id: uuidv4(),
    name: 'Pizza Alfredo',
    price: '$10.99',
    description:
      'Dough, Marinara Silsi, Mozzarella Cheese, Basil (Salad/Fries/Topping extra $2.99)',
    src: 'PizzaAlfredo.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Pizza Olive',
    price: '$14.99',
    description:
      'Dough, Marinara, Mozzarella, Green Pepper, Black Olive, Mushroom, Red Onion (Salad/Fries/Topping extra $2.99 Poutine extra $5.99)',
    src: 'PizzaOlive.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Pizza Sweet Potatos',
    price: '$14.99',
    description:
      'Dough, Marinara, Mozzarella, Sweet Potatos, Goat Cheese, Top Green Onion, (Salad/Fries/Topping extra $2.99 Poutine extra $5.99)',
    src: 'PizzaSweetPotato.jpeg',
  },
] as FoodItem[];

export const DinnerMenuList = [
  {
    id: uuidv4(),
    name: 'Pizza Alfredo',
    price: '$10.99',
    description:
      'Dough, Marinara Silsi, Mozzarella Cheese, Basil (Salad/Fries/Topping extra $2.99)',
    src: 'PizzaAlfredo.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Pizza Olive',
    price: '$14.99',
    description:
      'Dough, Marinara, Mozzarella, Green Pepper, Black Olive, Mushroom, Red Onion (Salad/Fries/Topping extra $2.99 Poutine extra $5.99)',
    src: 'PizzaOlive.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Pizza Sweet Potatos',
    price: '$14.99',
    description:
      'Dough, Marinara, Mozzarella, Sweet Potatos, Goat Cheese, Top Green Onion, (Salad/Fries/Topping extra $2.99 Poutine extra $5.99)',
    src: 'PizzaSweetPotato.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Chicken Wings',
    price: '$11.99',
    description:
      '10 Piece Wings, Buffalo/BBQ/Honey Garlic/Sweet&Spicy Thai/Apple, BBQ, Carrot Sticks, Celery Sticks, Dipping (Salad/Rice/Fries extra $2.99/Poutine extra $5.99)',
    src: 'ChickenWings.jpeg',
  },
  {
    id: uuidv4(),
    name: "Rade's Fajita Beef",
    price: '$16.99',
    description:
      'Skillet,(Red Onion, Red Pepper, Green Pepper)/Gnocchi, Garlic, Black Pepper, Sea Salt, Grill Beef, Top Green Onion (Salad/Rice/Fries extra $2.99/Poutine extra $5.99)',
    src: 'FajitaBeef.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Gnocchi Alfredo',
    price: '$16.99',
    description:
      'Red Onion, Veg Oil, Shrimps/Chicken, White Wine, Black Pepper, Sea Salt, Alfredo, Spinach, Chipotle Pasta/Gnocchi, Parmesan, Sliced Bread (Salad/Rice/Fries extra $2.99/Poutine extra $5.99)',
    src: 'GnocchiAlfredo.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Pasta Bolognese',
    price: '$14.99',
    description:
      'Bolognese Beef, Marinara, Garlic, Basil, Pata/Gnocchi, Parmesan, Top Basil, Sliced Bread (Salad/Rice/Fries extra $2.99/Poutine extra $5.99)',
    src: 'PastaBolognese.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Veggie Habesha',
    price: '$14.99',
    description:
      'Our best vegetable combination. Red Lintels, Yellow Spolt, Collard Green, Cabbage, a combination of Peas, Lentil Sauce, Enjera and Salad',
    src: 'VegiHabesha.jpeg',
  },
] as FoodItem[];

export const SnackMenuList = [
  {
    id: uuidv4(),
    name: 'Dessert',
    price: '$4.99',
    description: 'Daily Dessert',
    src: 'Dessert.jpeg',
  },
] as FoodItem[];
