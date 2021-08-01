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

const S308: ItemDatum = {
  id: "S308",
  name: "S308",
  kind: "T-shirt",
  isNew: false,
  comment: `夜行性のマウスには、光が当たると行動量が抑制されるという現象が見られます。

  こういった光刺激は体内時計による規則正しい行動リズムを「覆い隠す」ような効果をもつためマスキング(masking)と呼ばれます。

  今作のマウスは元気に動いていたところ光を当てられて行動が落ち着き、布団に引きこもろうとしています。

  昼行性の私たちで言えば、夜中パッと電気が点けられた時に元気になって部屋をウロウロしてしまうようなものですね。`,
  images: [
    {
      colour: "White",
      img: "/image/S308/S308_W_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899670",
    },
    {
      colour: "White",
      img: "/image/S308/S308_W_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899670",
    },
    {
      colour: "White",
      img: "/image/S308/S308_W_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899670",
    },
    {
      colour: "White",
      img: "/image/S308/S308_W_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899670",
    },

    {
      colour: "Sand",
      img: "/image/S308/S308_S_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899670",
    },
    {
      colour: "Sand",
      img: "/image/S308/S308_S_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899670",
    },
    {
      colour: "Sand",
      img: "/image/S308/S308_S_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899670",
    },
    {
      colour: "Sand",
      img: "/image/S308/S308_S_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899670",
    },
  ],
};

const S201: ItemDatum = {
  id: "S201",
  name: "S201",
  kind: "T-shirt",
  isNew: false,
  comment: `ショウジョウバエは飼育の易しさと世代交代の短さからモデル生物として重宝されています。

  ショウジョウバエを用いた遺伝学により多くの重要な遺伝子が発見されてきました。

  そんな中、本来触角に当たる位置に「脚」が生えている変異体が見つかりました。

  この変異体は「アンテナ(触角)ペディア(脚)」と呼ばれ、ショウジョウバエの体のデザインの形成を制御する遺伝子群の一つが変異していたことがわかりました。

  顔に脚が生えてては、どんなに大きなマスクをしていてもはみ出してしまいます。　`,
  images: [
    {
      colour: "Green",
      img: "/image/S201/S201_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32153279",
    },
    {
      colour: "Green",
      img: "/image/S201/S201_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32153279",
    },
  ],
};

const coffee: ItemDatum = {
  id: "coffee",
  name: "Iced Coffee",
  kind: "Long-sleeve T-shirt",
  isNew: false,
  comment: `Littermateカフェのアイスコーヒー。
  LサイズとMサイズがございます。

  通常のロンTと比べて、よりゆったりとしたトレンドに合ったシルエットとなっております。`,
  images: [
    {
      colour: "White",
      img: "/image/coffee/coffee_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/34789986",
    },
    {
      colour: "White",
      img: "/image/coffee/coffee_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/34789986",
    },
    {
      colour: "White",
      img: "/image/coffee/coffee_7.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/34789986",
    },
    {
      colour: "White",
      img: "/image/coffee/coffee_8.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/34789986",
    },
  ],
};

const falling: ItemDatum = {
  id: "falling",
  name: "Falling Mouse",
  kind: "Hoodie",
  isNew: false,
  comment: `秋冬にぴったりの裏起毛のフーディ。
  ゲージの上にある餌を取ろうとしたマウスが、足を踏み外して落ちてしまったシーンが刺繍にて施されています。`,
  images: [
    {
      colour: "Blue",
      img: "/image/falling/falling_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/34742723",
    },
    {
      colour: "Blue",
      img: "/image/falling/falling_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/34742723",
    },
    {
      colour: "Blue",
      img: "/image/falling/falling_6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/34742723",
    },
  ],
};


const S401_Hoodie: ItemDatum = {
  id: "S401_Hoodie",
  name: "S401",
  kind: "Hoodie",
  isNew: false,
  comment: `今作のテーマはコモンマーモセットと呼ばれる小型のサルの一種です。

  マーモセットは生理学・解剖学的特徴が人間と近いことから霊長類のモデル生物として生命科学研究に利用されています。

  創薬研究にも用いられており、みなさんが使っている薬もマーモセットによって有効性が確かめられたものかもしれません。

  手に持っているのは実験で用いられるチューブで、目を離したすきに研究者が取られてしまったみたいです。`,
  images: [
    {
      colour: "Cream",
      img: "/image/S401/S401_H_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/33861789",
    },
    {
      colour: "Cream",
      img: "/image/S401/S401_H_7.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/33861789",
    },
  ],
};

const S401: ItemDatum = {
  id: "S401_Long-sleeve T-shirt",
  name: "S401",
  kind: "Long-sleeve T-shirt",
  isNew: false,
  comment: `今作のテーマはコモンマーモセットと呼ばれる小型のサルの一種です。

  マーモセットは生理学・解剖学的特徴が人間と近いことから霊長類のモデル生物として生命科学研究に利用されています。

  創薬研究にも用いられており、みなさんが使っている薬もマーモセットによって有効性が確かめられたものかもしれません。

  手に持っているのは実験で用いられるチューブで、目を離したすきに研究者が取られてしまったみたいです。`,
  images: [
    {
      colour: "Green",
      img: "/image/S401/S401_LT_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/33861469",
    },
    {
      colour: "Green",
      img: "/image/S401/S401_LT_6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/33861469",
    },
  ],
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
    items: [S310, S309_Sweatshirt, S309_Hoodie, S401_Hoodie, S401, falling, coffee, S201, S308],
  },
];

export const itemData = categoryData.reduce((pre, cur) => {
  return [...pre, ...cur.items];
}, [] as ItemDatum[]);
