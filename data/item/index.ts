export type ItemImage = {
  img: string;
  colour: string;
  baseLink?: string;
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

const seq_Hoodie: ItemDatum = {
  id: "seq_Hoodie",
  name: "sequence",
  kind: "Hoodie",
  isNew: false,
  comment: `それぞれの生物は彼らをその生物たらしめる設計図を持っています。
  ゲノムと呼ばれるその設計図はA、T、G、Cで書かれた“暗号“から成り立っています。
  それらは３つで1つのアルファベットに“翻訳“することができます。
  1977年、人類はついに“暗号“の文字列を読み解く技術を発明しました。

  本作ではある“暗号“を読み取りました。
  それをアルファベットに翻訳すると
  「L」「I」「T」「T」「E」「R」...。
  興味深い解読ができそうです。`,
  images: [
    {
      colour: "Black",
      img: "/image/seq_Hoodie/seq_Hoodie_b4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395571",
    },
    {
      colour: "Black",
      img: "/image/seq_Hoodie/seq_Hoodie_b2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395571",
    },
    {
      colour: "Black",
      img: "/image/seq_Hoodie/seq_Hoodie_b3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395571",
    },
    {
      colour: "Black",
      img: "/image/seq_Hoodie/seq_Hoodie_b1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395571",
    },
    {
      colour: "Black",
      img: "/image/seq_Hoodie/seq_Hoodie_b5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395571",
    },
    {
      colour: "Black",
      img: "/image/seq_Hoodie/seq_Hoodie_b6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395571",
    },

    {
      colour: "White",
      img: "/image/seq_Hoodie/seq_Hoodie_w1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395591",
    },
    {
      colour: "White",
      img: "/image/seq_Hoodie/seq_Hoodie_w2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395591",
    },
    {
      colour: "White",
      img: "/image/seq_Hoodie/seq_Hoodie_w3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395591",
    },
    {
      colour: "White",
      img: "/image/seq_Hoodie/seq_Hoodie_w4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395591",
    },
    {
      colour: "White",
      img: "/image/seq_Hoodie/seq_Hoodie_w5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395591",
    },
    {
      colour: "White",
      img: "/image/seq_Hoodie/seq_Hoodie_w6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/52395591",
    },
  ],
};

const S312: ItemDatum = {
  id: "S312",
  name: "S312",
  kind: "Long-sleeve T-shirt",
  isNew: false,
  comment: `本作のマウスは布を体に切り貼り(カット&ペースト)することで白と黒の混じった体色になっています。

  実は昨今話題のゲノム編集も遺伝子の「カット&ペースト」によるものです。

  細菌などの生き物がもつ免疫機構を応用した「CRISPR-Casシステム」という技法を用いると生物のDNAをカット&ペーストしゲノム編集を行うことができます。

  例えば受精卵から成長する途中で白い毛を黒い毛にするようこの技法を用いると実際に本作のような白黒マウスを作ることができます。`,
  images: [
    {
      colour: "White",
      img: "/image/S312/s312_w1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50765722",
    },
    {
      colour: "White",
      img: "/image/S312/s312_w2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50765722",
    },
    {
      colour: "White",
      img: "/image/S312/s312_w3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50765722",
    },

    {
      colour: "Gray",
      img: "/image/S312/s312_g1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50765971",
    },
    {
      colour: "Gray",
      img: "/image/S312/s312_g2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50765971",
    },
    {
      colour: "Gray",
      img: "/image/S312/s312_g3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50765971",
    },
  ],
};

const S312_Hoodie: ItemDatum = {
  id: "S312_Hoodie",
  name: "S312",
  kind: "Hoodie",
  isNew: false,
  comment: `本作のマウスは布を体に切り貼り(カット&ペースト)することで白と黒の混じった体色になっています。

  実は昨今話題のゲノム編集も遺伝子の「カット&ペースト」によるものです。

  細菌などの生き物がもつ免疫機構を応用した「CRISPR-Casシステム」という技法を用いると生物のDNAをカット&ペーストしゲノム編集を行うことができます。

  例えば受精卵から成長する途中で白い毛を黒い毛にするようこの技法を用いると実際に本作のような白黒マウスを作ることができます。`,
  images: [
    {
      colour: "Brown",
      img: "/image/S312/s312_b4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50766139",
    },
    {
      colour: "Brown",
      img: "/image/S312/s312_b1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50766139",
    },
    {
      colour: "Brown",
      img: "/image/S312/s312_b3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50766139",
    },
    {
      colour: "Brown",
      img: "/image/S312/s312_b2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/50766139",
    },
  ],
};

const S311: ItemDatum = {
  id: "S311",
  name: "S311",
  kind: "T-shirt",
  isNew: false,
  comment: `今作のテーマは「モリス水迷路試験」と呼ばれるマウスの学習と記憶を評価する実験手法です。

  円形のプールの中にマウスの足が着く高さのゴール地点を設置してマウスを泳がせます。

  初めマウスはプール全体をうろうろ泳ぎ回ってゴールに達しますが、何回も同様の試行を繰り返すにつれ周りの景色を記憶し、それを手掛かりにゴールの位置を割り出せるようになります。

  それにより記憶力の良いマウスはゴールを探して泳ぎ回るマウスを尻目により素早くゴールに辿り着けるようになるわけです。`,
  images: [
    {
      colour: "White",
      img: "/image/S311/S311_W_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_W_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_W_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_W_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_WB_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_WB_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716951",
    },

    {
      colour: "Blue",
      img: "/image/S311/S311_B_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716947",
    },
    {
      colour: "Blue",
      img: "/image/S311/S311_B_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716947",
    },
    {
      colour: "Blue",
      img: "/image/S311/S311_B_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716947",
    },
    {
      colour: "Blue",
      img: "/image/S311/S311_WB_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716947",
    },
    {
      colour: "Blue",
      img: "/image/S311/S311_WB_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/49716947",
    },
  ],
};

const sequence: ItemDatum = {
  id: "sequence",
  name: "sequence",
  kind: "T-shirt",
  isNew: false,
  comment: `それぞれの生物は彼らをその生物たらしめる設計図を持っています。
  ゲノムと呼ばれるその設計図はA、T、G、Cで書かれた“暗号“から成り立っています。
  それらは３つで1つのアルファベットに“翻訳“することができます。
  1977年、人類はついに“暗号“の文字列を読み解く技術を発明しました。

  本作ではある“暗号“を読み取りました。
  それをアルファベットに翻訳すると
  「L」「I」「T」「T」「E」「R」...。
  興味深い解読ができそうです。`,
  images: [
    {
      colour: "Black",
      img: "/image/sequence/TagTBlack2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47796109",
    },
    {
      colour: "Black",
      img: "/image/sequence/TagTBlack1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47796109",
    },
    {
      colour: "White",
      img: "/image/sequence/TagTWhite2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47775349",
    },
    {
      colour: "White",
      img: "/image/sequence/TagTWhite1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47775349",
    },
    {
      colour: "Black",
      img: "/image/sequence/TagTWhiteBlack1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47796109",
    },
    {
      colour: "Black",
      img: "/image/sequence/TagTWHiteBlack2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47796109",
    },
    {
      colour: "White",
      img: "/image/sequence/TagTWhiteBlack1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47775349",
    },
    {
      colour: "White",
      img: "/image/sequence/TagTWHiteBlack2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47775349",
    },
  ],
};

const Logo: ItemDatum = {
  id: "Logo",
  name: "Logo",
  kind: "T-shirt",
  isNew: false,
  comment: `この度私たちのブランドロゴが新しくなりました。
  精密、厳格、論理的---
  一方で自由で挑戦的で創造的---
  生物学がもつそんな“二面性“を体現したロゴです。
  そんな新ロゴがフロントに刺繍されたTシャツを作製いたしました。`,
  images: [
    {
      colour: "White",
      img: "/image/new_logo/NewLogoWomenMen1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47775644",
    },
    {
      colour: "White",
      img: "/image/new_logo/NewLogoMen1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47775644",
    },
    {
      colour: "White",
      img: "/image/new_logo/NewLogoMen2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47775644",
    },
    {
      colour: "White",
      img: "/image/new_logo/NewLogoWomen1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47775644",
    },
    {
      colour: "White",
      img: "/image/new_logo/NewLogoWomen2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/47775644",
    },
  ],
};

const TET: ItemDatum = {
  id: "TET",
  name: "TET",
  kind: "T-shirt",
  isNew: false,
  comment: `本ブランドのメインロゴにもなっている、マウスを識別するためのイヤタグ。
  今作ではそのイヤタグが背中に大きく3つプリントされています。

  4色展開となっていますので、是非お好きな色をご購入ください`,
  images: [
    {
      colour: "Blue Green",
      img: "/image/TET/TET_B_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152635",
    },
    {
      colour: "Blue Green",
      img: "/image/TET/TET_B_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152635",
    },
    {
      colour: "Blue Green",
      img: "/image/TET/TET_B_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152635",
    },

    {
      colour: "Charcoal",
      img: "/image/TET/TET_C_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152688",
    },
    {
      colour: "Charcoal",
      img: "/image/TET/TET_C_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152688",
    },
    {
      colour: "Charcoal",
      img: "/image/TET/TET_C_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152688",
    },

    {
      colour: "Pink",
      img: "/image/TET/TET_P_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152604",
    },
    {
      colour: "Pink",
      img: "/image/TET/TET_P_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152604",
    },
    {
      colour: "Pink",
      img: "/image/TET/TET_P_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152604",
    },
    {
      colour: "Pink",
      img: "/image/TET/TET_YP_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152604",
    },

    {
      colour: "Yellow",
      img: "/image/TET/TET_Y_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152393",
    },
    {
      colour: "Yellow",
      img: "/image/TET/TET_YP_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/32152393",
    },
  ],
};

const S301: ItemDatum = {
  id: "S301",
  name: "S301",
  kind: "T-shirt",
  isNew: false,
  comment: `生物実験のモデル生物として非常によく使われるマウス（Mus musculus）。

  これから実験を始めるためにまずマウスを持たなければなりません。
  素早いマウスをゲージから持ち上げる時はいきなり体を掴むのはかなり困難。
  マウスに気づかれないように尻尾を掴み、優しく持ち上げましょう。
  。`,
  images: [
    {
      colour: "White",
      img: "/image/S301/S301_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494178",
    },
  ],
};

const S302: ItemDatum = {
  id: "S302",
  name: "S302",
  kind: "T-shirt",
  isNew: false,
  comment: `生物実験のモデル生物として非常によく使われるマウス(Mus musculus)。

  マウスに、麻酔を始め薬剤を投与する時のスタンダードは、マウスのお腹に注射をして
  薬剤を腹腔内投与する方法。
  マウスのストレスにならないよう、首根っこをキュッと掴み注射針をサクッと刺しましょう。`,
  images: [
    {
      colour: "Black",
      img: "/image/S302/S302_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494315",
    },
    {
      colour: "Black",
      img: "/image/S302/S302_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494315",
    },
    {
      colour: "Black",
      img: "/image/S302/S302_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494315",
    },
    {
      colour: "Black",
      img: "/image/S302/S302_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494315",
    },
    {
      colour: "Black",
      img: "/image/S302/S302_5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/22494315",
    },
  ],
};

const S303: ItemDatum = {
  id: "S303",
  name: "S303",
  kind: "T-shirt",
  isNew: false,
  comment: `変異マウスシリーズ第一弾の本作。
  マウスがお腹いっぱいになると、エネルギーをたくさん使うよう指令を出し、肥満を抑制するホルモンであるレプチン(leptin)。

  この遺伝子を欠損したob/ob変異個体は糖尿病様症状を引き起こし、ぶくぶく太って通常のマウス（野生型）の倍ほどの大きさになります。`,
  images: [
    {
      colour: "Orange",
      img: "/image/S303/S303_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/23042114",
    },
    {
      colour: "Orange",
      img: "/image/S303/S303_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/23042114",
    },
    {
      colour: "Orange",
      img: "/image/S303/S303_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/23042114",
    },
    {
      colour: "Orange",
      img: "/image/S303/S303_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/23042114",
    },
  ],
};

const S304: ItemDatum = {
  id: "S304",
  name: "S304",
  kind: "Long-sleeve T-shirt",
  isNew: false,
  comment: `変異マウスシリーズ第二弾の本作。

  マウスがお腹いっぱいになると、エネルギーをたくさん使うよう指令を出し、肥満を抑制するホルモンであるレプチン(leptin)。

  このレプチンを受け取る受容体の遺伝子を欠損したdb/db変異個体は、糖尿病様症状を引き起こし、ぶくぶく太って通常のマウス(野生型)の倍ほどの大きさになります。`,
  images: [
    {
      colour: "Black",
      img: "/image/S304/S304_5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/23694327",
    },
    {
      colour: "Black",
      img: "/image/S304/S304_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/23694327",
    },
    {
      colour: "Black",
      img: "/image/S304/S304_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/23694327",
    },
    {
      colour: "Black",
      img: "/image/S304/S304_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/23694327",
    },
  ],
};

const S305: ItemDatum = {
  id: "S305",
  name: "S305",
  kind: "Hoodie",
  isNew: false,
  comment: `変異マウスシリーズの第三弾。

  人で言えば数十年という長い期間保持されるような記憶を「遠隔記憶」と呼びます。
  昔の自分の住所や電話番号は歳をとっても忘れにくいのではないでしょうか。

  「記憶といえば海馬」と思われがちですが、遠隔記憶は前帯状皮質(ACC)という別の脳領域に保存されます。
  ACCの神経活性を欠損させたマウスでは遠隔記憶の形成ができず、地図を見ても自分の家がわかりません。`,
  images: [
    {
      colour: "White",
      img: "/image/S305/S305_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/25209207",
    },
    {
      colour: "White",
      img: "/image/S305/S305_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/25209207",
    },
    {
      colour: "White",
      img: "/image/S305/S305_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/25209207",
    },
    {
      colour: "White",
      img: "/image/S305/S305_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/25209207",
    },
  ],
};

const S306: ItemDatum = {
  id: "S306",
  name: "S306 Jacket",
  kind: "Jacket",
  isNew: false,
  comment: `変異マウスシリーズの第三弾であるS305のマイナーチェンジ。

  バイオ実験ではしばしば、ある因子の機能を人為的に欠くことでどんな影響が変異体に表れるかを調べます。
  そして
  「この流れでわかった目的の因子の機能は〇〇である」
  という主張をサポートするために『レスキュー実験』というものを行うことがあります。
  これは目的因子を欠いた個体に再びその因子を外入れすることで、変異によって影響を受けた個体の性質が“回復”するか調べるというものです。

  前作で前帯状皮質(ACC)の神経活性が損なわれ、遠隔記憶ができなくたったマウス。
  この責任因子がわかれば、レスキューによって記憶の形成を回復させることができるかもしれません！　`,
  images: [
    {
      colour: "Black",
      img: "/image/S306/S306_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/26786875",
    },
    {
      colour: "Black",
      img: "/image/S306/S306_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/26786875",
    },
    {
      colour: "Black",
      img: "/image/S306/S306_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/26786875",
    },
    {
      colour: "Black",
      img: "/image/S306/S306_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/26786875",
    },
    {
      colour: "Black",
      img: "/image/S306/S306_5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/26786875",
    },
  ],
};

const S307: ItemDatum = {
  id: "S307",
  name: "S307",
  kind: "Long-sleeve T-shirt",
  isNew: false,
  comment: `変異マウスシリーズ第五弾。
  地球上の多くの生物は、地球の自転により変動する外界の環境に適応するために約24時間周期で体内の状態や行動を制御する「概日時計」という機能を獲得しました。

  マウスは行動時にゲージ内の輪回しをするという特性を活かし、
  時計の研究ではしばしば輪回しの回転数をカウントして行動を測る方法が用いられます。

  マウスをはじめ哺乳類の概日時計はいくつかの時計タンパク質の相互作用によって成立していますが、この時計タンパク質の遺伝子を欠損した本作のマウスは約24時間周期の規則正しい行動が損なわれ、昼夜問わず寝たり起きたりして輪を回します。　`,
  images: [
    {
      colour: "Black",
      img: "/image/S307/S307_B_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/27176797",
    },
    {
      colour: "Black",
      img: "/image/S307/S307_B_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/27176797",
    },
    {
      colour: "Black",
      img: "/image/S307/S307_BN_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/27176797",
    },

    {
      colour: "White",
      img: "/image/S307/S307_W_6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/27176836",
    },
    {
      colour: "White",
      img: "/image/S307/S307_W_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/27176836",
    },
    {
      colour: "White",
      img: "/image/S307/S307_W_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/27176836",
    },
    {
      colour: "White",
      img: "/image/S307/S307_W_5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/27176836",
    },
  ],
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
      baseLink: "https://littermate.thebase.in/items/31899567",
    },
    {
      colour: "Sand",
      img: "/image/S308/S308_S_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899567",
    },
    {
      colour: "Sand",
      img: "/image/S308/S308_S_3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899567",
    },
    {
      colour: "Sand",
      img: "/image/S308/S308_S_4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/31899567",
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
      colour: "Natural",
      img: "/image/S401/S401_H_1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/33861789",
    },
    {
      colour: "Natural",
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

export const itemsData: ItemDatum[] = [
  seq_Hoodie,
  S312,
  S312_Hoodie,
  S311,
  sequence,
  Logo,
  S310,
  S309_Sweatshirt,
  S309_Hoodie,
  falling,
  coffee,
  S401_Hoodie,
  S401,
  S201,
  TET,
  S308,
  S307,
  S306,
  S305,
  S304,
  S303,
  S302,
  S301,
];

export const categoryData: Category[] = [
  {
    category: "T-shirt",
    items: [S201, S308, S303, S302, S301, TET, Logo, sequence, S311],
  },
  {
    category: "Hoodie",
    items: [S309_Hoodie, S401_Hoodie, S305, S312_Hoodie, seq_Hoodie],
  },
  {
    category: "Sweatshirt",
    items: [S309_Sweatshirt, falling],
  },
  {
    category: "Long-sleeve T-shirt",
    items: [S310, S401, coffee, S307, S304, S312],
  },
  {
    category: "Jacket",
    items: [S306],
  },
];

export const itemData = categoryData.reduce((pre, cur) => {
  return [...pre, ...cur.items];
}, [] as ItemDatum[]);
