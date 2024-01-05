const products = [
    // ... Existing plant entries
  
    {
      id: 43,
      imageSrc: require("../../assets/images/pots/terracotta-pot.jpg"),
      title: "Terracotta Clay Pot",
      price: 7.99,
      description: "Classic and breathable, ideal for succulents, cacti, and herbs.",
      link: "terracotta-pot",
      Type: "Pot",
      Material: "Clay",
    category:"containers"
    },
    {
      id: 44,
      imageSrc: require("../../assets/images/pots/ceramic-pot.jpg"),
      title: "Ceramic Glazed Pot",
      price: 12.99,
      description: "Stylish and versatile, available in various glazes and sizes for diverse plants.",
      link: "ceramic-pot",
      Type: "Pot",
      Material: "Ceramic",
    category:"containers"
    },
    {
      id: 45,
      imageSrc: require("../../assets/images/pots/plastic-pot.jpg"),
      title: "Durable Plastic Pot",
      price: 4.99,
      description: "Lightweight and affordable, perfect for indoor and outdoor plants.",
      link: "plastic-pot",
      Type: "Pot",
      Material: "Plastic",
    category:"containers"
    },
    {
      id: 46,
      imageSrc: require("../../assets/images/pots/hanging-basket.jpg"),
      title: "Hanging Basket",
      price: 9.99,
      description: "Adds vertical interest, ideal for trailing plants and balcony gardens.",
      link: "hanging-basket",
      Type: "Pot",
      Category: "Hanging",
    category:"containers"
    },
    {
      id: 47,
      imageSrc: require("../../assets/images/pots/self-watering-pot.jpg"),
      title: "Self-Watering Pot",
      price: 19.99,
      description: "Reduces watering frequency, keeps plants thriving during busy schedules.",
      link: "self-watering-pot",
      Type: "Pot",
      Features: "Self-Watering",
    category:"containers"
    },
    {
      id: 48,
      imageSrc: require("../../assets/images/pots/raised-bed.jpg"),
      title: "Raised Garden Bed",
      price: 39.99,
      description: "Improves soil drainage and offers better access for vegetables and herbs.",
      link: "raised-bed",
      Type: "Bed",
      Category: "Raised",
    category:"containers"
    },
    {
      id: 49,
      imageSrc: require("../../assets/images/pots/window-box.jpg"),
      title: "Window Box",
      price: 14.99,
      description: "Adds color and charm to windowsills, perfect for herbs and flowers.",
      link: "window-box",
      Type: "Pot",
      Category: "Window",
    category:"containers"
    },
    {
      id: 50,
      imageSrc: require("../../assets/images/pots/planter-trio.jpg"),
      title: "Planter Trio Set",
      price: 24.99,
      description: "Three coordinating planters in different sizes, ideal for creating focal points.",
      link: "planter-trio",
      Type: "Pot",
      Set: true,
    category:"containers"
    },
    
  ];
  
  export default products;