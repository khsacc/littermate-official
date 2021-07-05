export type ItemImage = {
  img: string;
  colour: string;
  lookOnly: boolean;
};
export type ItemDatum = {
  id: string;
  name: string;
  kind: string;
  isNew: boolean;
  comment: string;
  images: ItemImage[];
  photographer?: string;
  model?: string;
  hair?: string;
  stylist?: string;
};

export type Category = {
  category: string;
  items: ItemDatum[];
};

const S309_Sweatshirt: ItemDatum = {
  id: "S309_Sweatshirt",
  name: "S309",
  kind: "Sweatshirt",
  isNew: false,
  comment: `今作のテーマは、脳回路の研究に劇的な進歩をもたらしたオプトジェネティクス（光遺伝学）という実験手法です。
光ファイバーなどを頭に通して光を当てることで研究対象の脳細胞だけを活性化させることができます。`,
  images: [
    {
      colour: "Burgundy",
      img: "/image/S309/shirt_burgundy_1.jpg",
      lookOnly: false,
    },
    {
      colour: "White",
      img: "/image/S309/shirt_white_1.jpg",
      lookOnly: false,
    },
  ],
};

const S310: ItemDatum = {
  id: "S310",
  name: "S310",
  kind: "Long-sleeve T-shirt",
  isNew: true,
  comment: `今作のテーマは、脳回路の研究に劇的な進歩をもたらしたオプトジェネティクス（光遺伝学）という実験手法です。
光ファイバーなどを頭に通して光を当てることで研究対象の脳細胞だけを活性化させることができます。`,
  images: [
    {
      colour: "Green",
      img: "/image/S310/Green_3_2.jpg",
      lookOnly: false,
    },

    {
      colour: "Blue",
      img: "/image/S310/Blue_1_2.jpg",
      lookOnly: false,
    },
    {
      colour: "Red",
      img: "/image/S310/Red_3_2.jpg",
      lookOnly: false,
    },
  ],
  photographer: "Hugo Wakui",
  stylist: "Tomoka Kume",
  hair: "Natsuko Ogita(UpperCrust)",
  model: "Audrey & Takumi",
};

// export const itemData: ItemDatum[] = [S310, S309_Sweatshirt];

export const categoryData: Category[] = [
  {
    category: "T-shirt",
    items: [S310, S309_Sweatshirt],
  },
];

export const itemData = categoryData.reduce((pre, cur) => {
  return [...pre, ...cur.items];
}, [] as ItemDatum[]);
