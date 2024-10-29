import { ContentType, Post } from "../_homepage/_body/IBody";

export const posts: Post[] = [
  {
    id: 1,
    title: "Lion King",
    subTitle: "What to expect for fantastic performances!",
    category: "musical",
    content: `
    Experience the magic of Disney's *The Lion King*, a breathtaking musical that transports you to the heart of Africa. 
    With its stunning visuals, captivating performances, and unforgettable music by Elton John and Tim Rice, 
    this show brings the beloved story of Simba, Nala, and the circle of life to life. 
    From the moment the curtain rises, you'll be immersed in a world filled with vibrant costumes, elaborate puppetry, 
    and breathtaking choreography. Join us for an evening of enchantment and emotion that will leave you singing the songs 
    and feeling the spirit of the savannah long after the final bow.
  `,
    summary: "A magical musical experience that brings the beloved story of The Lion King to life.",
    tags: ["music", "performance"],
    contentType: ContentType.template,
    location: "21 Wellington St, London WC2E 7RQ",
    latitude: 51.5128,
    longitude: -0.1195,
    rating: 4.5,
    openingHours: "7:30 PM - 10:00 PM",
    bookingRequired: true,
  },
  {
    id: 2,
    title: "London Eye",
    subTitle: "Enjoy dramatic senary from the best place in London!",
    category: "landmarks",
    content: `
    The London Eye is not just a Ferris wheel; it is a breathtaking observation deck that offers a unique perspective 
    of the iconic London skyline. Standing at 135 meters tall, this architectural marvel provides stunning panoramic 
    views of the city's most famous landmarks, including Big Ben, Buckingham Palace, and the River Thames. 
    Enjoy a 30-minute rotation in one of the glass capsules, complete with informative audio guides to enrich 
    your experience. Whether you're a first-time visitor or a lifelong resident, the London Eye offers a 
    remarkable way to see the city from new heights. Don't forget to catch the view at sunset for a truly magical experience!
  `,
    summary: "Discover the breathtaking views and history of London's iconic landmark.",
    tags: ["history", "architecture"],
    contentType: ContentType.template,
    location: "Riverside Building, County Hall, London SE1 7PB",
    latitude: 51.5033,
    longitude: -0.1195,
    rating: 3.5,
    openingHours: "10:00 AM - 8:30 PM",
    bookingRequired: true,
  },
  {
    id: 3,
    title: "Da Mario",
    subTitle: "Perfect for a night out with your partner or your family",
    category: "restaurant",
    content: `
    Nestled in the heart of the city, *Da Mario* is a culinary gem that brings authentic Italian flavors to your plate. 
    Known for its warm ambiance and friendly service, this restaurant offers a delightful menu filled with classic dishes 
    made from the freshest ingredients. From homemade pasta and rich risottos to delectable pizzas and mouthwatering 
    desserts, every dish is crafted with passion. Join us for a special evening of Italian dining, where each bite tells 
    a story of tradition and taste. Don't miss out on their signature tiramisu—a perfect ending to your meal!
  `,
    summary: "Experience authentic Italian cuisine at Da Mario, where every dish is crafted with love.",
    tags: ["food", "dining"],
    contentType: ContentType.html,
    location: "63 Endell St, London WC2H 9AJ",
    latitude: 51.5145,
    longitude: -0.1257,
    rating: 4.5,
    openingHours: "12:00 PM - 11:00 PM",
    bookingRequired: false,
  },
  {
    id: 4,
    title: "Local Alcoholic Beverage",
    subTitle: "Enjoy drinking? This is a place",
    category: "alcohol",
    content: `
    Discover the rich flavors of our local alcoholic beverage, *Tennessee Whiskey*, a true American classic. 
    Crafted in small batches, this whiskey is known for its smooth finish and unique character, derived from 
    the purest spring water and a mash bill of corn, rye, and malted barley. Join us for a tasting experience 
    where you'll learn about the distillation process, the history behind this beloved spirit, and how to appreciate 
    its complex notes of vanilla, caramel, and oak. Perfect for sipping neat or mixing into your favorite cocktails, 
    *Tennessee Whiskey* is a must-try for anyone looking to explore local flavors.
  `,
    summary: "A deep dive into the flavors and history of Tennessee Whiskey, an American classic.",
    tags: ["beverage", "local"],
    contentType: ContentType.template,
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
    rating: 3,
    openingHours: "5:00 PM - 10:00 PM",
    bookingRequired: true,
  },
  {
    id: 5,
    title: "Sky Garden",
    subTitle: "Way tooo nice for a free day out",
    category: "view",
    content: `
    Experience breathtaking views of the city at the *Sky Garden*, London's highest public garden. 
    Perched atop the Walkie Talkie building, this stunning space offers a 360-degree panorama of the city's skyline. 
    Stroll through the lush greenery and beautifully landscaped gardens while enjoying a drink at one of the 
    restaurants or bars. It's the perfect spot for relaxation or a romantic evening out. Be sure to arrive early 
    to catch the sunset; it's an unforgettable sight that you won't want to miss!
  `,
    summary: "Enjoy stunning views and lush gardens at London's Sky Garden, a perfect escape from the bustling city.",
    tags: ["scenery", "nature"],
    contentType: ContentType.template,
    location: "R1, Sky Garden Walk, London EC3M 8AF",
    latitude: 51.5116,
    longitude: -0.0839,
    rating: 5,
    openingHours: "10:00 AM - 6:00 PM",
    bookingRequired: false,
  },
];
