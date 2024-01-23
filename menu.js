import { title } from 'process';

export const categories = [
  {
    title: 'Featured Favorites',
    image: 'featured-favorites.jfif',
  },
  {
    title: 'Breakfast',
    image: 'breakfast.jfif',
  },
  {
    title: 'Burgers',
    image: 'burgers.jfif',
  },
  {
    title: 'Chicken & Fish Sandwiches',
    image: 'fish-chicken.jfif',
  },
  {
    title: 'McNuggets® and Meals',
    image: 'nuggets.jfif',
  },
  {
    title: 'Fries® & Sides',
    image: 'sides.jfif',
  },
  {
    title: 'Happy Meal®',
    image: 'happy-meal.jfif',
  },
  {
    title: 'McCafé® Coffees',
    image: 'mccafe.jfif',
  },
  {
    title: 'Sweets & Treats',
    image: 'desserts.jfif',
  },
  {
    title: 'Beverages',
    image: 'drinks.jfif',
  },
  {
    title: '$1 $2 $3 Dollar Menu*',
    image: 'dollarmenu.jfif',
  },
];

export const ads = [
    {
        title: 'Free Large Fries Now. Even More Fries Later.',
        image: 'free_fries_app.jfif',
        description: 'Download the McDonald’s app and join MyMcDonald’s Rewards to get your free large Fries with $1 minimum purchase.* Plus, when you join MyMcDonald’s Rewards, you start earning points on every eligible order—points you can put towards more free food.',
        button: 'Get Free Fries in the App',
        terms: `*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's. May take up to 48 hours to appear in your deals. Must opt in to MyMcDonald’s Rewards. Excludes tax.`,
    },
    {
        title: 'Step Into the World of McD’s x Crocs',
        image: 'mcds_crocs.jfif',
        description: 'Get a pair of McDonald’s branded clogs or limited edition Grimace, Birdie or Hamburglar Crocs decked out with fun McDonald’s x Crocs JibbitzTM charms or socks. Hurry, before it’s too late.*  In celebration of the Crocs partnership, McDonald’s will be making a donation to Ronald McDonald House Charities® to help support families when they have a child who is ill or injured.',
        button: 'Shop the Collab Now',
        terms: `*While supplies last.`,
    },
    {
        title: 'Score Free Food with McDelivery®',
        image: 'food_delivery.jfif',
        description: 'Earn MyMcDonald’s Rewards points on every McDelivery order only in the McD’s app to redeem for free food. And, yup, you can get ‘em delivered, too. Just order, relax and enjoy—check out how easy ordering delivery is in the app.*',
        button: 'Earn Points with McDelivery',
        terms: `*At participating McDonald's. Must be opted into MyMcDonald's Rewards. McDelivery prices may be higher than at restaurants. Delivery/other fees may apply.`,
    },
    {
        title: 'Black & Positively Golden® Scholarship',
        image: 'black-gold.jfif',
        description: `McDonald's partnership with the Thurgood Marshall College Fund is a major investment in education and opportunity in Black communities.`,
        button: 'Learn More',
        terms: `*At participating McDonald’s.`,
    },
    {
        title: 'New: Faster Faves, Only in the App',
        image: 'orderInApp.jfif',
        description: 'We now prep when you’re on the way if you choose Curbside, Front Counter—or dine in for Table Service. Just order ahead in the app to save time. Because waiting in line for faves? Not our thing either.*',
        button: 'Order Ahead in the App',
        terms: ``,
    },
    {
        title: 'Deals for Days',
        image: 'dealsForDays.jfif',
        description: 'Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.',
        button: 'Get App Deals',
        terms: `*Mobile Order & Pay at participating McDonald’s.`,
    }
]

export const menu = {
  featured_favrotires: {
    title: 'Featured Favorites',
    items: [
      {
        title: 'Spicy McCrispy™',
        image: 'image1.jpg',
        price: '$10.99',
        description: 'Description for item 1',
      },
      {
        title: 'Big Mac®',
        image: 'image2.jpg',
        price: '$8.99',
        description: 'Description for item 2',
      },
      {
        title: 'Chicken McNuggets®',
        image: 'image3.jpg',
        price: '$12.99',
        description: 'Description for item 3',
      },
      {
        title: 'Quarter Pounder®* with Cheese',
        image: 'image1.jpg',
        price: '$10.99',
        description: 'Description for item 1',
      },
      {
        title: 'Iced Coffee',
        image: 'image2.jpg',
        price: '$8.99',
        description: 'Description for item 2',
      },
      {
        title: 'Egg McMuffin®',
        image: 'image3.jpg',
        price: '$12.99',
        description: 'Description for item 3',
      },
    ],
  },
  breakfast: {
    title: 'Breakfast',
    items: [
      {
        title: 'Bacon, Egg & Cheese Biscuit',
        image: 'image1.jpg',
        price: '$10.99',
        description: 'Description for item 1',
      },
      {
        title: 'Egg McMuffin®',
        image: 'image2.jpg',
        price: '$8.99',
        description: 'Description for item 2',
      },
      {
        title: 'Sausage McMuffin®',
        image: 'image3.jpg',
        price: '$12.99',
        description: 'Description for item 3',
      },
      {
        title: 'Sausage McMuffin® with Egg',
        image: 'image3.jpg',
        price: '$12.99',
        description: 'Description for item 3',
      },
    ],
  },
  burgers: {
    title: 'Burgers',
    items: [
      {
        title: 'Big Mac®',
        image: 'burger1.jpg',
        price: '$6.99',
        description: 'Description for burger 1',
      },
      {
        title: 'Quarter Pounder®* with Cheese',
        image: 'burger2.jpg',
        price: '$9.99',
        description: 'Description for burger 2',
      },
      {
        title: 'Double Quarter Pounder®* with Cheese',
        image: 'burger3.jpg',
        price: '$7.99',
        description: 'Description for burger 3',
      },
      {
        title: 'Quarter Pounder®* with Cheese Deluxe',
        image: 'burger3.jpg',
        price: '$7.99',
        description: 'Description for burger 3',
      },
    ],
  },
  chickenFishSandwiches: {
    title: 'Fish & Chicken Sandwiches',
    items: [
      {
        title: 'McChicken®',
        image: 'chicken_sandwich1.jpg',
        price: '$8.99',
        description: 'Description for chicken sandwich 1',
      },
      {
        title: 'Spicy Deluxe McCrispy™',
        image: 'fish_sandwich1.jpg',
        price: '$10.99',
        description: 'Description for fish sandwich 1',
      },
      {
        title: 'Filet-O-Fish®',
        image: 'chicken_sandwich1.jpg',
        price: '$8.99',
        description: 'Description for chicken sandwich 1',
      },
      {
        title: 'Deluxe McCrispy™',
        image: 'fish_sandwich1.jpg',
        price: '$10.99',
        description: 'Description for fish sandwich 1',
      },
    ],
  },
  mcnuggetsMeals: {
    title: 'McNuggets® & Meals',
    items: [
      {
        title: '6-Piece McNuggets® Meal',
        image: 'mcnuggets_meal1.jpg',
        price: '$5.99',
        description: 'Description for 6-piece McNuggets meal',
      },
      {
        title: '10-Piece McNuggets® Meal',
        image: 'mcnuggets_meal2.jpg',
        price: '$8.99',
        description: 'Description for 10-piece McNuggets meal',
      },
    ],
  },
  friesSides: {
    title: 'Fries® & Sides',
    items: [
      {
        title: 'World Famous Fries®',
        image: 'small_fries.jpg',
        price: '$2.49',
        description: 'Description for small fries',
      },
      {
        title: 'Apple Slices',
        image: 'medium_fries.jpg',
        price: '$3.49',
        description: 'Description for medium fries',
      },
    ],
  },
  happyMeal: {
    title: 'Happy Meal®',
    items: [
      {
        title: 'Hamburger Happy Meal®',
        image: 'happy_meal1.jpg',
        price: '$4.99',
        description: 'Description for Happy Meal with Cheeseburger',
      },
      {
        title: '4 Piece Chicken McNuggets® Happy Meal®',
        image: 'happy_meal2.jpg',
        price: '$5.99',
        description: 'Description for Happy Meal with Chicken McNuggets',
      },
      {
        title: '6 Piece Chicken McNuggets® Happy Meal®',
        image: 'happy_meal2.jpg',
        price: '$5.99',
        description: 'Description for Happy Meal with Chicken McNuggets',
      },
    ],
  },
  mccafeCoffees: {
    title: 'McCafé® Coffees',
    items: [
      {
        title: 'Caramel Macchiato',
        image: 'hot_coffee.jpg',
        price: '$2.49',
        description: 'Description for hot coffee',
      },
      {
        title: 'Cappuccino',
        image: 'iced_coffee.jpg',
        price: '$3.49',
        description: 'Description for iced coffee',
      },
      {
        title: 'Caramel Cappuccino',
        image: 'hot_coffee.jpg',
        price: '$2.49',
        description: 'Description for hot coffee',
      },
      {
        title: 'French Vanilla Cappuccino',
        image: 'iced_coffee.jpg',
        price: '$3.49',
        description: 'Description for iced coffee',
      },
    ],
  },
  sweetsTreats: {
    title: 'Sweets & Treats',
    items: [
      {
        title: 'McFlurry® with OREO® Cookies',
        image: 'apple_pie.jpg',
        price: '$1.49',
        description: 'Description for apple pie',
      },
      {
        title: `McFlurry® with M&M'S® Candies`,
        image: 'sundae.jpg',
        price: '$2.49',
        description: 'Description for sundae',
      },
      {
        title: 'Vanilla Cone',
        image: 'apple_pie.jpg',
        price: '$1.49',
        description: 'Description for apple pie',
      },
      {
        title: `Chocolate Shake`,
        image: 'sundae.jpg',
        price: '$2.49',
        description: 'Description for sundae',
      },
    ],
  },
  beverages: {
    title: 'Beverages',
    items: [
      {
        title: 'Coca-Cola®',
        image: 'soft_drink_small.jpg',
        price: '$1.99',
        description: 'Description for small soft drink',
      },
      {
        title: 'Sprite®',
        image: 'milkshake.jpg',
        price: '$3.99',
        description: 'Description for milkshake',
      },
      {
        title: 'Sweet Tea',
        image: 'soft_drink_small.jpg',
        price: '$1.99',
        description: 'Description for small soft drink',
      },
      {
        title: 'Lemonade',
        image: 'milkshake.jpg',
        price: '$3.99',
        description: 'Description for milkshake',
      },
    ],
  },
  dollarMenu: {
    title: '$1 $2 $3 Dollar Menu*',
    items: [
      {
        title: 'McDouble®',
        image: 'item_1.jpg',
        price: '$1.00',
        description: 'Description for item $1',
      },
      {
        title: 'McChicken®',
        image: 'item_2.jpg',
        price: '$2.00',
        description: 'Description for item $2',
      },
      {
        title: 'Sausage Burrito',
        image: 'item_3.jpg',
        price: '$3.00',
        description: 'Description for item $3',
      },
      {
        title: 'Sausage Biscuit',
        image: 'item_3.jpg',
        price: '$3.00',
        description: 'Description for item $3',
      },
    ],
  },
};
