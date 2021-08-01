export type ItemImage = {
  img: string;
  colour: string;
  baseLink: string;
  lookOnly: boolean;
  productOnly?: boolean;
  okiga?: boolean;
};
export type ItemDatum = {
  id: string;
  name: string;
  kind: string;
  isNew: boolean;
  comment: string;
  images: ItemImage[];
  ogimage?: string;
  photographer?: string;
  model?: string;
  hair?: string;
  stylist?: string;
};

export type Category = {
  category: string;
  items: ItemDatum[];
};

const S309_Hoodie: ItemDatum = {
  id: "S309_Hoodie",
  name: "S309",
  kind: "Hoodie",
  isNew: false,
  comment: `今作のテーマは、脳回路の研究に劇的な進歩をもたらした、オプトジェネティクス(光遺伝学)という実験手法です。

  光に当たることで神経を活性化させる因子を研究対象の脳細胞に発現させ、光ファイバーなどを頭に通して光を当てます。

  これにより生きたまま目的の脳部位の神経活性をON/OFFに切り替えられます。

  例えば今作のように脳の「快楽中枢」につなげたファイバーを光らせるとマウスが快楽に溺れる様子が観察されます。`,
  images: [
    {
      colour: "Black",
      img: "/image/S309/S309_Hoodie_Black_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/36131917",
    },
    {
      colour: "Black",
      img: "/image/S309/S309_Hoodie_Black_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/36131917",
    },

    {
      colour: "White",
      img: "/image/S309/S309_Hoodie_White_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/36131782",
    },
    {
      colour: "White",
      img: "/image/S309/S309_Hoodie_White_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/36131782",
    },
  ],
};

const S309_Sweatshirt: ItemDatum = {
  id: "S309_Sweatshirt",
  name: "S309",
  kind: "Sweatshirt",
  isNew: false,
  comment: `今作のテーマは、脳回路の研究に劇的な進歩をもたらした、オプトジェネティクス(光遺伝学)という実験手法です。

  光に当たることで神経を活性化させる因子を研究対象の脳細胞に発現させ、光ファイバーなどを頭に通して光を当てます。

  これにより生きたまま目的の脳部位の神経活性をON/OFFに切り替えられます。

  例えば今作のように脳の「快楽中枢」につなげたファイバーを光らせるとマウスが快楽に溺れる様子が観察されます。`,
  images: [
    {
      colour: "Burgundy",
      img: "/image/S309/S309_Sweartshirt_Burgundy_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/36132089",
    },
    {
      colour: "Burgundy",
      img: "/image/S309/S309_Sweartshirt_Burgundy_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/36132089",
    },
    {
      colour: "White",
      img: "/image/S309/S309_Sweartshirt_White_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/36132113",
    },
    {
      colour: "White",
      img: "/image/S309/S309_Sweartshirt_White_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/36132113",
    },
  ],
};

const S310: ItemDatum = {
  id: "S310",
  name: "S310",
  kind: "Long-sleeve T-shirt",
  isNew: true,
  comment: `今作のテーマは、脳回路の研究に劇的な進歩をもたらしたオプトジェネティクス(光遺伝学)という実験手法です。

  光ファイバーなどを頭に通して光を当てることで研究対象の脳細胞だけを活性化させます。

  これにより生きたまま目的の脳神経のON/OFFを切り替えられます。

  例えば今作のように学習・記憶を司る脳の領域にファイバーをつなげて光らせるとマウスの物覚えがよくなる様子が観察されます。`,
  images: [
    {
      colour: "Green",
      img: "/image/S310/S310_Green_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077806",
    },
    {
      colour: "Green",
      img: "/image/S310/S310_Green_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077806",
    },
    {
      colour: "Green",
      img: "/image/S310/S310_Green_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077806",
    },
    {
      colour: "Green",
      img: "/image/S310/S310_Green_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077806",
    },

    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077546",
    },

    {
      colour: "Red",
      img: "/image/S310/S310_Red_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077956",
    },
    {
      colour: "Red",
      img: "/image/S310/S310_Red_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077956",
    },
    {
      colour: "Red",
      img: "/image/S310/S310_Red_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077956",
    },
    {
      colour: "Red",
      img: "/image/S310/S310_Red_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077956",
    },
  ],
  ogimage: "/image/S310/ogimage-item-S310.jpg",
  photographer: "Hugo Wakui",
  stylist: "Tomoka Kume",
  hair: "Natsuko Ogita(UpperCrust)",
  model: "Audrey & Takumi",
};

// export const itemData: ItemDatum[] = [S310, S309_Sweatshirt];

export const categoryData: Category[] = [
  {
    category: "T-shirt",
    items: [S310, S309_Sweatshirt, S309_Hoodie],
  },
];

export const itemData = categoryData.reduce((pre, cur) => {
  return [...pre, ...cur.items];
}, [] as ItemDatum[]);
