
const productsData = [
  {
    id: 1,
    type: "jacket",
    title: "Winter Wonderland Women's Parka",
    price: 79.99,
    description:
      "Stay warm and stylish with our 3-in-1 parka. Versatile design for any season. Detachable fleece liner for extra coziness.",
    category: "women's clothing",
    image:
      "https://s.alicdn.com/@sc04/kf/H5fb6de4caa6148799498a5f54e25e11bu.jpg_720x720q50.jpg",
    rating: {
      rate: 4.2,
      count: 120,
    },
  },
  {
    id: 2,
    type: "jacket",
    title: "Urban Chic Trench Coat",
    price: 64.95,
    description:
      "Step out in style with our elegant trench coat. Adjustable waist belt for a flattering fit. Perfect for a day in the city.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/91/62/cf/9162cf2eaf222c6f502466a59cf8886f.jpg",
    rating: {
      rate: 3.8,
      count: 90,
    },
  },
  {
    id: 3,
    type: "jacket",
    title: "Mountain Explorer 3-Layer Jacket",
    price: 89.99,
    description:
      "Conquer the peaks with our durable 3-layer jacket. Waterproof and breathable, with plenty of pockets for your essentials.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/c1/85/c3/c185c3233abdc5b7540030769b3a7809.jpg",
    rating: {
      rate: 4.5,
      count: 150,
    },
  },
  {
    id: 4,
    type: "Pants",
    title: "Everyday Comfort Stretch Pants",
    price: 39.99,
    description:
      "Upgrade your wardrobe with these stretchy and comfortable pants. Versatile for any occasion, from work to casual outings.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/736x/8a/88/d8/8a88d8b8c5a2de6529a52bebf9d33af3.jpg",
    rating: {
      rate: 4.0,
      count: 80,
    },
  },
  {
    id: 11,
    type: "accessories",
    title: "Statement Necklace",
    price: 19.95,
    description:
      "Elevate your style with our statement necklace. A versatile accessory that adds a touch of glamour to any outfit. Perfect for special occasions.",
    category: "accessories",
    image:
      "https://i.pinimg.com/564x/10/62/f4/1062f4f20539cc13b88f7d42a7c9a04b.jpg",
    rating: {
      rate: 4.1,
      count: 70,
    },
  },
  {
    id: 5,
    type: "Pants",
    title: "Classic Denim Jeans",
    price: 49.95,
    description:
      "Timeless denim jeans for a casual and chic look. Perfect fit for all body types. A wardrobe essential for every woman.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/6f/dd/21/6fdd219884b1598a2f6b3b2bd3745eac.jpg",
    rating: {
      rate: 4.2,
      count: 100,
    },
  },
  {
    id: 6,
    type: "sneakers",
    title: "Sporty Sneakers for Women",
    price: 54.99,
    description:
      "Stay active with our stylish and comfortable sporty sneakers. Lightweight design for all-day comfort. Ideal for workouts or casual wear.",
    category: "shoes",
    image:
      "https://i.pinimg.com/564x/fb/2d/60/fb2d60fd9e45e6427edee69d4621d4f0.jpg",
    rating: {
      rate: 4.4,
      count: 110,
    },
  },
  {
    id: 12,
    type: "accessories",
    title: "Cozy Knit Beanie",
    price: 14.99,
    description:
      "Stay warm and fashionable with our cozy knit beanie. Soft and comfortable, perfect for chilly days. Available in various colors.",
    category: "accessories",
    image:
      "https://i.pinimg.com/564x/ea/af/74/eaaf741384c98a00c96bfd066870a964.jpg",
    rating: {
      rate: 4.0,
      count: 60,
    },
  },
  {
    id: 7,
    type: "sneakers",
    title: "Elegant High-Heel Pumps",
    price: 69.95,
    description:
      "Step into sophistication with our elegant high-heel pumps. Classic design for formal occasions. Make a statement with every step.",
    category: "heels",
    image:
      "https://i.pinimg.com/564x/e7/e8/e3/e7e8e313c08cba841c92e422617bdbc6.jpg",
    rating: {
      rate: 4.6,
      count: 130,
    },
  },
  {
    id: 8,
    type: "sneakers",
    title: "Casual Canvas Shoes",
    price: 29.99,
    description:
      "Keep it casual with our comfortable canvas shoes. Versatile and stylish, perfect for everyday wear. Available in various colors.",
    category: "shoes",
    image:
      "https://i.pinimg.com/564x/21/14/77/211477cf3fd3cb17baac46c9845f2227.jpg",
    rating: {
      rate: 4.0,
      count: 95,
    },
  },
  {
    id: 9,
    type: "sneakers",
    title: "Strappy Summer Sandals",
    price: 39.95,
    description:
      "Enjoy the sun in style with our strappy summer sandals. Comfortable and trendy, perfect for beach days or outdoor events.",
    category: "heels",
    image:
      "https://i.pinimg.com/564x/c6/50/13/c6501365c8fad5ce2f73d6a46cad4586.jpg",
    rating: {
      rate: 4.2,
      count: 85,
    },
  },
  {
    id: 10,
    type: "handbag",
    title: "Chic Leather Handbag",
    price: 49.99,
    description:
      "Complete your look with our chic leather handbag. Spacious and stylish, perfect for daily essentials. Carry it with confidence.",
    category: "accessories",
    image:
      "https://i.pinimg.com/564x/5d/80/c9/5d80c9987ce8cf6a01b8633d12fa5f17.jpg",
    rating: {
      rate: 4.5,
      count: 120,
    },
  },
  {
    id: 13,
    type: "jacket",
    title: "Cozy Winter Jacket",
    price: 69.99,
    description:
      "Stay cozy with our winter jacket. Stylish and warm, perfect for chilly days. Faux fur lining for added comfort.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/dd/4b/be/dd4bbe4fe5a23dd768fd6b7d6a59aefe.jpg",
    rating: {
      rate: 4.4,
      count: 95,
    },
  },
  {
    id: 14,
    type: "jacket",
    title: "Elegant Black Blazer",
    price: 79.95,
    description:
      "Step into elegance with our black blazer. Versatile for both casual and formal occasions. Classic and chic.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/2b/bf/ec/2bbfecf0145042d4eabb685acbc68730.jpg",
    rating: {
      rate: 4.7,
      count: 110,
    },
  },
  {
    id: 15,
    type: "jacket",
    title: "Quilted Winter Coat",
    price: 89.99,
    description:
      "Stay warm in style with our quilted winter coat. Trendy design with quilted pattern. Perfect for a fashionable winter look.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/96/72/f9/9672f91f5c6b9107528022e84411d058.jpg",
    rating: {
      rate: 4.6,
      count: 120,
    },
  },
  {
    id: 16,
    type: "Pants",
    title: "Casual Slim Fit Trousers",
    price: 44.99,
    description:
      "Upgrade your wardrobe with our casual slim fit trousers. Comfortable and stylish for any casual occasion.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/00/74/68/007468661210171b1ab6d0e1beb706d2.jpg",
    rating: {
      rate: 4.3,
      count: 85,
    },
  },
  {
    id: 17,
    type: "Pants",
    title: "High-Waisted Flare Pants",
    price: 54.95,
    description:
      "Achieve a retro look with our high-waisted flare pants. Flattering fit for a stylish and trendy appearance.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/236x/b1/99/59/b19959abde0d96f47fa232c844bf719e.jpg",
    rating: {
      rate: 4.5,
      count: 100,
    },
  },
  {
    id: 18,
    type: "Pants",
    title: "Comfortable Jogger Pants",
    price: 34.99,
    description:
      "Stay comfortable and stylish with our jogger pants. Perfect for a relaxed and casual day out.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/88/4b/94/884b94bff0627aeb06ded6f7595afe69.jpg",
    rating: {
      rate: 4.2,
      count: 75,
    },
  },
  {
    id: 19,
    type: "sneakers",
    title: "Running Shoes for Women",
    price: 59.99,
    description:
      "Stay active with our running shoes. Lightweight and comfortable for your daily workout routines.",
    category: "shoes",
    image:
      "https://i.pinimg.com/564x/dd/00/01/dd0001ba422f21a0321adae594b22cfe.jpg",
    rating: {
      rate: 4.8,
      count: 130,
    },
  },
  {
    id: 20,
    type: "sneakers",
    title: "Fashionable High-Top Sneakers",
    price: 69.95,
    description:
      "Step out in style with our fashionable high-top sneakers. Trendy design for a chic and urban look.",
    category: "shoes",
    image:
      "https://i.pinimg.com/236x/fb/40/58/fb405873eadf0dd5f506984da2db875e.jpg",
    rating: {
      rate: 4.7,
      count: 110,
    },
  },
  {
    id: 21,
    type: "sneakers",
    title: "Casual Slip-On Shoes",
    price: 49.99,
    description:
      "Keep it casual with our comfortable slip-on shoes. Easy to wear and perfect for everyday outings.",
    category: "shoes",
    image:
      "https://i.pinimg.com/236x/b0/29/67/b02967e49a1147eaf56acfd1344c55f0.jpg",
    rating: {
      rate: 4.5,
      count: 95,
    },
  },
  {
    id: 31,
    type: "Pants",
    title: "wide leg sweatpants",
    price: 70.2,
    description:
      "Tall wide leg drawstring pants, I ordered a size XL tall and they are the best pants ever.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/38/08/f1/3808f1aebf2543ca4ffd8e34cb9c693d.jpg",
    rating: {
      rate: 4.2,
      count: 75,
    },
  },
  {
    id: 32,
    type: "Pants",
    title: "skinny jeans",
    price: 19.2,
    description: "Reformation Cynthia High Relaxed Jean.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/eb/19/8d/eb198dcc77a89240e6b368b8ce50c38b.jpg",
    rating: {
      rate: 4.2,
      count: 75,
    },
  },
  {
    id: 33,
    type: "Pants",
    title: "Pants Women Solid",
    price: 53.44,
    description:
      "Fashionkova Draped Straight Pants Women Solid All-match S-3xl Elegant Office Ladies High Waist Trousers.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/92/ea/ad/92eaad001c3d64d52e5cefe8d697c6fd.jpg",
    rating: {
      rate: 4.2,
      count: 75,
    },
  },
  {
    id: 34,
    type: "sneakers",
    title: "Square Toe High Ankle Bootie",
    price: 30.99,
    description:
      "Online shopping from a great selection at Clothing, Shoes & Jewelry Store.",
    category: "shoes",
    image:
      "https://i.pinimg.com/564x/c0/1e/b0/c01eb0c9ce232493b50d6173aee3e419.jpg",
    rating: {
      rate: 4.5,
      count: 95,
    },
  },
  {
    id: 35,
    type: "jacket",
    title: "Luxury nude Woolen Coats",
    price: 89.99,
    description:
      "Luxury nude Woolen Coats oversize long winter coat double breast NotchedThis dress is made of cotton .",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/d1/aa/50/d1aa50e21f0aaace69e3db9b1b7085c6.jpg",
    rating: {
      rate: 4.6,
      count: 120,
    },
  },
  {
    id: 36,
    type: "jacket",
    title: "drop shoulder jacket",
    price: 89.99,
    description:
      "Apricot Casual Collar Long Sleeve Fabric Plain Other Embellished Non-Stretch Women Outerwear.",
    category: "women's clothing",
    image:
      "https://i.pinimg.com/564x/b8/dd/f9/b8ddf9f4785edaecbdbb8d8606e0757e.jpg",
    rating: {
      rate: 4.6,
      count: 120,
    },
  },
];
export default productsData;
