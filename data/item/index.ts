export type ItemImage = {
  img: string;
  colour: string;
};
export type ItemDatum = {
  name: string;
  kind: string;

  images: ItemImage[];
};
export const itemData: ItemDatum[] = [
  {
    name: "S310",
    kind: "long-sleeve T-shirt",
    images: [
      {
        colour: "Green",
        img: "/image/S310/Green_2_2.jpg",
      },
      {
        colour: "Blue",
        img: "/image/S310/Blue_3_3.jpg",
      },
      {
        colour: "Red",
        img: "/image/S310/Red_3_2.jpg",
      },
    ],
  },
];
