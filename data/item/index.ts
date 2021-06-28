export type ItemImage = {
  img: string;
  colour: string;
};
export type ItemDatum = {
  name: string;
  kind: string;
  isNew: boolean;
  comment: string;
  images: ItemImage[];
};
export const itemData: ItemDatum[] = [
  {
    name: "S310",
    kind: "long-sleeve T-shirt",
    isNew: true,
    comment: `今作のテーマは、脳回路の研究に劇的な進歩をもたらしたオプトジェネティクス（光遺伝学）という実験手法です。
光ファイバーなどを頭に通して光を当てることで研究対象の脳細胞だけを活性化させることができます。`,
    images: [
      {
        colour: "Green",
        img: "/image/S310/Green_3_2.jpg",
      },
      {
        colour: "Blue",
        img: "/image/S310/Blue_1_2.jpg",
      },
      {
        colour: "Red",
        img: "/image/S310/Red_3_2.jpg",
      },
    ],
  },
];
