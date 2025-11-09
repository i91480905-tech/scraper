
import type { Business } from '../types';

export const BUSINESS_DATA: Business[] = [
  // San Francisco - Coffee Shops
  {
    name: 'Blue Bottle Coffee',
    city: 'San Francisco',
    category: 'coffee shops',
    address: '66 Mint St, San Francisco, CA 94103',
    phone: '(510) 653-3394',
    website: 'bluebottlecoffee.com',
    rating: 4.5,
    reviewCount: 1200,
    operatingHours: '7 AM - 7 PM'
  },
  {
    name: 'Ritual Coffee Roasters',
    city: 'San Francisco',
    category: 'coffee shops',
    address: '1026 Valencia St, San Francisco, CA 94110',
    phone: '(415) 641-1011',
    website: 'ritualcoffee.com',
    rating: 4.6,
    reviewCount: 980,
    operatingHours: '7 AM - 6 PM'
  },
  {
    name: 'Four Barrel Coffee',
    city: 'San Francisco',
    category: 'coffee shops',
    address: '375 Valencia St, San Francisco, CA 94103',
    phone: '(415) 252-0800',
    website: 'fourbarrelcoffee.com',
    rating: 4.4,
    reviewCount: 1500,
    operatingHours: '7 AM - 4 PM'
  },
  {
    name: 'Sightglass Coffee',
    city: 'San Francisco',
    category: 'coffee shops',
    address: '270 7th St, San Francisco, CA 94103',
    phone: '(415) 861-1313',
    website: 'sightglasscoffee.com',
    rating: 4.7,
    reviewCount: 2200,
    operatingHours: '7 AM - 5 PM'
  },
  {
    name: 'Philz Coffee',
    city: 'San Francisco',
    category: 'coffee shops',
    address: '3101 24th St, San Francisco, CA 94110',
    phone: '(415) 875-9370',
    website: 'philzcoffee.com',
    rating: 4.8,
    reviewCount: 3500,
    operatingHours: '6 AM - 8 PM'
  },
  
  // San Francisco - Pizza
  {
    name: 'Tony\'s Pizza Napoletana',
    city: 'San Francisco',
    category: 'pizza restaurants',
    address: '1570 Stockton St, San Francisco, CA 94133',
    phone: '(415) 835-9888',
    website: 'tonyspizzanapoletana.com',
    rating: 4.6,
    reviewCount: 4500,
    operatingHours: '12 PM - 10 PM'
  },
  {
    name: 'Golden Boy Pizza',
    city: 'San Francisco',
    category: 'pizza restaurants',
    address: '542 Green St, San Francisco, CA 94133',
    phone: '(415) 982-9738',
    website: 'goldenboypizza.com',
    rating: 4.7,
    reviewCount: 3200,
    operatingHours: '11:30 AM - 11:30 PM'
  },
  {
    name: 'Del Popolo',
    city: 'San Francisco',
    category: 'pizza restaurants',
    address: '855 Bush St, San Francisco, CA 94108',
    phone: '(415) 589-7940',
    website: 'delpopolosf.com',
    rating: 4.5,
    reviewCount: 1100,
    operatingHours: '5 PM - 10 PM'
  },
  
  // New York - Coffee Shops
  {
    name: 'Stumptown Coffee Roasters',
    city: 'New York',
    category: 'coffee shops',
    address: '30 W 8th St, New York, NY 10011',
    phone: '(855) 711-3385',
    website: 'stumptowncoffee.com',
    rating: 4.6,
    reviewCount: 1800,
    operatingHours: '7 AM - 6 PM'
  },
  {
    name: 'Joe Coffee Company',
    city: 'New York',
    category: 'coffee shops',
    address: '141 Waverly Pl, New York, NY 10014',
    phone: '(212) 924-7400',
    website: 'joecoffeecompany.com',
    rating: 4.4,
    reviewCount: 900,
    operatingHours: '7 AM - 7 PM'
  },
    {
    name: 'Abraço',
    city: 'New York',
    category: 'coffee shops',
    address: '81 E 7th St, New York, NY 10003',
    phone: '(212) 388-9731',
    website: 'abraconyc.com',
    rating: 4.8,
    reviewCount: '750',
    operatingHours: '8 AM - 4 PM'
  },

  // New York - Pizza
  {
    name: 'Joe\'s Pizza',
    city: 'New York',
    category: 'pizza places',
    address: '7 Carmine St, New York, NY 10014',
    phone: '(212) 366-1182',
    website: 'joespizzanyc.com',
    rating: 4.5,
    reviewCount: 6000,
    operatingHours: '10 AM - 4 AM'
  },
  {
    name: 'Lombardi\'s Pizza',
    city: 'New York',
    category: 'pizza places',
    address: '32 Spring St, New York, NY 10012',
    phone: '(212) 941-7994',
    website: 'firstpizza.com',
    rating: 4.3,
    reviewCount: 5500,
    operatingHours: '11:30 AM - 11 PM'
  },
  {
    name: 'Juliana\'s Pizza',
    city: 'New York',
    category: 'pizza places',
    address: '19 Old Fulton St, Brooklyn, NY 11201',
    phone: '(718) 596-6700',
    website: 'julianaspizza.com',
    rating: 4.7,
    reviewCount: 4200,
    operatingHours: '11:30 AM - 10:15 PM'
  },

  // London - Pubs
  {
    name: 'The Churchill Arms',
    city: 'London',
    category: 'pubs',
    address: '119 Kensington Church St, London W8 7LN, UK',
    phone: '+44 20 7727 4242',
    website: 'churchillarmskensington.co.uk',
    rating: 4.6,
    reviewCount: 7800,
    operatingHours: '11 AM - 11 PM'
  },
  {
    name: 'Ye Olde Cheshire Cheese',
    city: 'London',
    category: 'pubs',
    address: '145 Fleet St, London EC4A 2BU, UK',
    phone: '+44 20 7353 6170',
    website: 'yeoldecheshirecheese.com',
    rating: 4.4,
    reviewCount: 6500,
    operatingHours: '12 PM - 11 PM'
  },
  {
    name: 'The Mayflower',
    city: 'London',
    category: 'pubs',
    address: '117 Rotherhithe St, London SE16 4NF, UK',
    phone: '+44 20 7237 4088',
    website: 'mayflowerpub.co.uk',
    rating: 4.5,
    reviewCount: 3200,
    operatingHours: '12 PM - 11 PM'
  },

  // Tokyo - Ramen
  {
    name: 'Ichiran Ramen',
    city: 'Tokyo',
    category: 'ramen restaurants',
    address: '1 Chome-22-7 Jinnan, Shibuya City, Tokyo 150-0041, Japan',
    phone: '+81 3-5428-3558',
    website: 'ichiran.com',
    rating: 4.5,
    reviewCount: 11000,
    operatingHours: '24 hours'
  },
  {
    name: 'Ippudo',
    city: 'Tokyo',
    category: 'ramen restaurants',
    address: '4 Chome-10-3 Ginza, Chuo City, Tokyo 104-0061, Japan',
    phone: '+81 3-3547-1010',
    website: 'ippudo.com',
    rating: 4.4,
    reviewCount: 5000,
    operatingHours: '11 AM - 2 AM'
  },
  {
    name: 'Tsuta',
    city: 'Tokyo',
    category: 'ramen restaurants',
    address: '3 Chome-2-4 Nishihara, Shibuya City, Tokyo 151-0066, Japan',
    phone: '+81 3-6416-8666',
    website: 'tsuta.com',
    rating: 4.6,
    reviewCount: 2500,
    operatingHours: '11 AM - 5 PM'
  }
];
