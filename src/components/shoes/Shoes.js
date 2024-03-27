import ShoesImageMain from "../../assets/shoes/shoes-image-main.png";
import ShoesImage1 from "../../assets/shoes/shoes-image-1.png";
import ShoesImage2 from "../../assets/shoes/shoes-image-2.png";
import ShoesImage3 from "../../assets/shoes/shoes-image-3.png";

const Shoes = [
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
    mainImage: ShoesImageMain,
    liked: true,
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
    mainImage: ShoesImageMain,
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
    mainImage: ShoesImageMain,
    liked: true,
  },
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
    mainImage: ShoesImageMain,
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
    mainImage: ShoesImageMain,
    liked: true,
  },
];

export default Shoes;
