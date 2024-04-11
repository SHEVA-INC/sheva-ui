import ShoesImage1 from "../../assets/carousel-shoes-data/carousel-shoes-image-1.png";
import ShoesImage2 from "../../assets/carousel-shoes-data/carousel-shoes-image-2.png";
import ShoesImage3 from "../../assets/carousel-shoes-data/carousel-shoes-image-3.png";

const ShoesCarouselData = [
  [
    {
      id: 1,
      name: "Nike Air Max",
      description: "Mercurial Vapor XV Elite FG",
      colors: ["black", "yellow"],
      price: "$100",
      sizes: [
        { id: 1, value: 38 },
        { id: 2, value: 39 },
        { id: 3, value: 40 },
      ],
      stock: true,
      brand: "Nike",
      images: [ShoesImage1, ShoesImage2, ShoesImage3],
      mainImage: ShoesImage1,
      liked: true,
      modelNumber: "B0028",
      rating: {
        reviewAmount: 3205,
        ratingNumber: 4.4,
      },
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      description: "Running shoes",
      colors: ["white", "blue"],
      price: "$120",
      sizes: [
        { id: 1, value: 38 },
        { id: 2, value: 39 },
        { id: 3, value: 40 },
      ],
      stock: true,
      brand: "Adidas",
      images: [ShoesImage1, ShoesImage2, ShoesImage3],
      mainImage: ShoesImage2,
      liked: false,
    },
    {
      id: 3,
      name: "Adidas Ultraboost",
      description: "Running shoes",
      colors: ["white", "blue"],
      price: "$120",
      sizes: [
        { id: 1, value: 38 },
        { id: 2, value: 39 },
        { id: 3, value: 40 },
      ],
      stock: true,
      brand: "Adidas",
      images: [ShoesImage1, ShoesImage2, ShoesImage3],
      mainImage: ShoesImage3,
      liked: true,
    },
  ],
  [
    {
      id: 4,
      name: "Adidas Ultraboost",
      description: "Running shoes",
      colors: ["white", "blue"],
      price: "$120",
      sizes: [
        { id: 1, value: 38 },
        { id: 2, value: 39 },
        { id: 3, value: 40 },
      ],
      stock: true,
      brand: "Adidas",
      images: [ShoesImage1, ShoesImage2, ShoesImage3],
      mainImage: ShoesImage3,
      liked: false,
    },
    {
      id: 5,
      name: "Adidas Ultraboost",
      description: "Running shoes",
      colors: ["white", "blue"],
      price: "$120",
      sizes: [
        { id: 1, value: 38 },
        { id: 2, value: 39 },
        { id: 3, value: 40 },
      ],
      stock: true,
      brand: "Adidas",
      images: [ShoesImage1, ShoesImage2, ShoesImage3],
      mainImage: ShoesImage2,
      liked: true,
    },
    {
      id: 6,
      name: "Adidas Ultraboost",
      description: "Running shoes",
      colors: ["white", "blue"],
      price: "$120",
      sizes: [
        { id: 1, value: 38 },
        { id: 2, value: 39 },
        { id: 3, value: 40 },
      ],
      stock: true,
      brand: "Adidas",
      images: [ShoesImage1, ShoesImage2, ShoesImage3],
      mainImage: ShoesImage1,
      liked: true,
    },
  ],
];

export default ShoesCarouselData;