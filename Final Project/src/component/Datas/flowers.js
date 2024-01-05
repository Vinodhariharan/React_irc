const products = [
    // Existing plant entries...
  
    {
      id: 1,
      imageSrc: require("../../assets/images/flowers/lavender.jpg"),
      title: "English Lavender",
      price: 7.99,
      description: "Fragrant blooms and beautiful foliage, attracts bees and butterflies.",
      link: "lavender",
      Type: "Outdoor Plant",
    category:"flowers"
    },
    {
      id: 2,
      imageSrc: require("../../assets/images/flowers/hydrangeas.jpg"),
      title: "Hydrangeas",
      price: 14.99,
      description: "Puffy spheres of vibrant blooms in diverse colors, a showstopper for any landscape.",
      link: "hydrangeas",
      Type: "Outdoor Plant",
    category:"flowers"
    },
    {
      id: 3,
      imageSrc: require("../../assets/images/flowers/tulips.jpg"),
      title: "Tulips",
      price: 2.99, // Per bunch
      description: "A symbol of spring and new beginnings, available in a rainbow of colors.",
      link: "tulips",
      Type: "Spring Bulb",
    category:"flowers"
    },
    {
      id: 4,
      imageSrc: require("../../assets/images/flowers/orchids.jpg"),
      title: "Orchids",
      price: 29.99,
      description: "Exotic elegance with long-lasting blooms, ideal for luxury gifts.",
      link: "orchids",
      Type: "Houseplant",
    category:"flowers"
    },
    {
      id: 5,
      imageSrc: require("../../assets/images/flowers/peonies.jpg"),
      title: "Peonies",
      price: 8.99,
      description: "Fluffy mounds of delicate petals, perfect for romantic occasions and symbolizing prosperity.",
      link: "peonies",
      Type: "Perennial",
    category:"flowers"
    },
    {
      id: 6,
      imageSrc: require("../../assets/images/flowers/garden-roses.jpg"),
      title: "Garden Roses",
      price: 4.99, // Per stem
      description: "The classic symbol of love and romance, in a spectrum of colors and fragrances.",
      link: "garden-roses",
      Type: "Outdoor Shrub",
    category:"flowers"
    },
    {
      id: 7,
      imageSrc: require("../../assets/images/flowers/ranunculus.jpg"),
      title: "Ranunculus",
      price: 6.99,
      description: "Playful pom-poms in vibrant hues, adding cheerfulness to any occasion.",
      link: "ranunculus",
      Type: "Spring Bulb",
    category:"flowers"
    },
    {
      id: 8,
      imageSrc: require("../../assets/images/flowers/calla-lilies.jpg"),
      title: "Calla Lilies",
      price: 12.99,
      description: "Elegant and sophisticated, ideal for funerals and symbolizing purity.",
      link: "calla-lilies",
      Type: "Summer Bulb",
    category:"flowers"
    },
    {
      id: 9,
      imageSrc: require("../../assets/images/flowers/anemones.jpg"),
      title: "Anemones",
      price: 7.99,
      description: "Delicate and graceful, symbolizing anticipation and hope.",
      link: "anemones",
      Type: "Spring Bulb",
    category:"flowers"
    },
    {
      id: 10,
      imageSrc: require("../../assets/images/flowers/freesia.jpg"),
      title: "Freesias",
      price: 4.99,
      description: "Sweetly scented trumpet-shaped blooms in various colors, symbolizing friendship and trust.",
      link: "freesia",
      Type: "Spring Bulb",
    category:"flowers"
    },

{
    id: 11,
    imageSrc: require("../../assets/images/flowers/poppies.jpg"),
    title: "Poppies",
    price: 3.99, // Per pack
    description: "Bold and vibrant with papery red, orange, and pink petals, symbolizing remembrance and hope.",
    link: "poppies",
    Type: "Annual",
  category:"flowers"
  },
  {
    id: 12,
    imageSrc: require("../../assets/images/flowers/dahlias.jpg"),
    title: "Dahlias",
    price: 9.99, // Per bulb
    description: "Showstopping blooms in dazzling shapes and colors, adding drama and signifying gratitude.",
    link: "dahlias",
    Type: "Summer Bulb",
  category:"flowers"
  },
  {
    id: 13,
    imageSrc: require("../../assets/images/flowers/gerbera-daisies.jpg"),
    title: "Gerbera Daisies",
    price: 3.99,
    description: "Sunny smiles with cheerful yellow, orange, pink, and red petals, symbolizing innocence and joy.",
    link: "gerbera-daisies",
    Type: "Perennial",
  category:"flowers"
  },
  {
    id: 14,
    imageSrc: require("../../assets/images/flowers/irises.jpg"),
    title: "Irises",
    price: 8.99,
    description: "Delicate and elegant with velvety petals in purple, blue, and white, symbolizing wisdom and hope.",
    link: "irises",
    Type: "Perennial",
  category:"flowers"
  },
  {
    id: 15,
    imageSrc: require("../../assets/images/flowers/lilies.jpg"),
    title: "Lilies",
    price: 15.99,
    description: "Fragrant beauties with white, pink, and yellow blooms, symbolizing purity and devotion.",
    link: "lilies",
    Type: "Summer Bulb",
  category:"flowers"
  },
  {
    id: 16,
    imageSrc: require("../../assets/images/flowers/delphiniums.jpg"),
    title: "Delphiniums",
    price: 7.99,
    description: "Tall spikes of delicate blue, purple, and white florets, symbolizing joy and an open heart.",
    link: "delphiniums",
    Type: "Summer Perennial",
  category:"flowers"
  },
  {
    id: 17,
    imageSrc: require("../../assets/images/flowers/alstroemeria.jpg"),
    title: "Alstroemerias",
    price: 5.99,
    description: "Long-lasting and versatile with vibrant colors, symbolizing friendship and prosperity.",
    link: "alstroemerias",
    Type: "Summer Bulb",
  category:"flowers"
  },
  {
    id: 18,
    imageSrc: require("../../assets/images/flowers/hyacinths.jpg"),
    title: "Hyacinths",
    price: 6.99, // Per cluster
    description: "Sweetly scented clusters in blue, purple, pink, and white, symbolizing playfulness and gratitude.",
    link: "hyacinths",
    Type: "Spring Bulb",
  category:"flowers"
  },
  {
    id: 19,
    imageSrc: require("../../assets/images/flowers/marigolds.jpg"),
    title: "Marigolds",
    price: 2.99,
    description: "Cheerful and vibrant with yellow, orange, and red blooms, symbolizing warmth and longevity.",
    link: "marigolds",
    Type: "Annual",
  category:"flowers"
  },
  {
    id: 20,
    imageSrc: require("../../assets/images/flowers/sunflowers.jpg"),
    title: "Sunflowers",
    price: 5.99,
    description: "Cheerful giants with radiant yellow faces, perfect for summer gardens and bouquets.",
    link: "sunflowers",
    Type: "Outdoor Plant",
  category:"flowers"
  },
  
  ];

  export default products;