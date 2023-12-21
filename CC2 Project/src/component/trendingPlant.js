const products = [
    {
      id: 1,
      imageSrc: require("../assets/images/plants/Monstera-Thai-Constellation.jpg"),
      title: "Monstera Thai Constellation",
      price: 29.99,
      stock: 5, // Limited Stock!
      description: "Striking variegated foliage, unique and eye-catching.",
      link: "monstera-thai-constellation",
      Type: "Houseplant",
    },
    {
      id: 2,
      imageSrc: require("../assets/images/plants/Philodendron-Birkin.jpg"),
      title: "Philodendron Birkin",
      price: 14.99,
      description: "Elongated leaves with captivating stripes, perfect for hanging baskets.",
      link: "philodendron-birkin",
      Type: "Houseplant",
    },
    {
      id: 3,
      imageSrc: require("../assets/images/plants/String-of-Pearls.jpg"),
      title: "String of Pearls",
      price: 9.99,
      description: "Delicate and charming, ideal for adding texture to shelves or terrariums.",
      link: "string-of-pearls",
      Type: "Houseplant",
    },
    {
      id: 4,
      imageSrc: require("../assets/images/plants/Pilea-Peperomioides.jpg"),
      title: "Pilea Peperomioides (Pancake Plant)",
      price: 12.99,
      description: "Round, coin-shaped leaves, easy to care for and brings good vibes.",
      link: "pilea-peperomioides",
      Type: "Houseplant",
    },
    {
      id: 5,
      imageSrc: require("../assets/images/plants/Jade-Plant.jpeg"),
      title: "Jade Plant (Money Plant)",
      price: 19.99,
      description: "Symbol of prosperity and luck, thick leaves with vibrant green color.",
      link: "jade-plant",
      Type: "Houseplant",
    },
  
    {
      id: 6,
      imageSrc: require("../assets/images/plants/lavender-plant.jpg"),
      title: "English Lavender",
      price: 7.99,
      description: "Fragrant blooms and beautiful foliage, attracts bees and butterflies.",
      link: "lavender",
      Type: "Outdoor Plant",
    },
  
    {
      id: 7,
      imageSrc: require("../assets/images/plants/calathea-orbifolia.jpg"),
      title: "Calathea Orbifolia",
      price: 39.99,
      description: "Unique textured leaves, a conversation starter for any living space.",
      link: "calathea-orbifolia",
      Type: "Houseplant",
    },
    {
      id: 8,
      imageSrc: require("../assets/images/plants/Black-Eyed-Susan.jpg"),
      title: "Black-Eyed Susan",
      price: 3.99, // Price per pack
      stock: 50,
      description: "Cheerful annuals with vibrant yellow daisy-like flowers, attract pollinators.",
      link: "black-eyed-susan",
      Type: "Outdoor Plant",
    },
    {
      id: 9,
      imageSrc: require("../assets/images/plants/Air-Plants.jpg"),
      title: "Air Plant Tillandsia",
      price: 8.99,
      stock: 25,
      description: "Low-maintenance and air purifying, perfect for unique displays.",
      link: "air-plant-tillandsia",
      Type: "Houseplant",
    },
  
    // ... Add more bonus plants with details ...
  
  ];

  export default products;