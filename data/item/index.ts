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

const neuralNetworks: ItemDatum = {
  id: "neuralNetworks",
  name: `Musicophilia`,
  kind: "Long Sleeve T-shirt",
  isNew: false,
  comment: `脳内の情報処理は、脳神経の電気的な活動の連鎖で行われます。
  科学者は様々な方法で、この電気的なシグナルを測定することで、脳の活動を捉えます。
  それにより、音楽を聴いた時の様々な脳の反応がわかってきました。

  例えば、ある特定の周波数の音を聴いた時、脳がその周波数に合わせた脳波を出すという、ASSR (聴性定常反応) が知られています。

  常に様々な武器を駆使して、科学者は生命現象を顕にしようとしているのです。`,
  images: [
    {
      colour: "Black",
      img: "/image/neuralNetworks/neuralNetworks-black1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859860",
    },
    {
      colour: "Black",
      img: "/image/neuralNetworks/neuralNetworks-black2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859860",
    },
    {
      colour: "Black",
      img: "/image/neuralNetworks/neuralNetworks-black3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859860",
    },
    {
      colour: "Black",
      img: "/image/neuralNetworks/neuralNetworks-black4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859860",
    },
    {
      colour: "Black",
      img: "/image/neuralNetworks/neuralNetworks-black5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859860",
    },
    {
      colour: "Black",
      img: "/image/neuralNetworks/neuralNetworks-black6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859860",
    },
    {
      colour: "Blue",
      img: "/image/neuralNetworks/neuralNetworks-blue1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859877",
    },
    {
      colour: "Blue",
      img: "/image/neuralNetworks/neuralNetworks-blue2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859877",
    },
    {
      colour: "White",
      img: "/image/neuralNetworks/neuralNetworks-w1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88858520",
    },
    {
      colour: "White",
      img: "/image/neuralNetworks/neuralNetworks-w2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88858520",
    },
    {
      colour: "White",
      img: "/image/neuralNetworks/neuralNetworks-w3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88858520",
    },
    {
      colour: "White",
      img: "/image/neuralNetworks/neuralNetworks-w4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88858520",
    },
    {
      colour: "White",
      img: "/image/neuralNetworks/neuralNetworks-w5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88858520",
    },
    {
      colour: "White",
      img: "/image/neuralNetworks/neuralNetworks-w6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88858520",
    },
    {
      colour: "White",
      img: "/image/neuralNetworks/neuralNetworksCap-1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88860075",
    },
    {
      colour: "White",
      img: "/image/neuralNetworks/neuralNetworks-w7.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88858520",
    },
    {
      colour: "White",
      img: "/image/neuralNetworks/neuralNetworks-w8.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88858520",
    },
  ],
};

const neuralNetworksThreeQuarter: ItemDatum = {
  id: "neuralNetworksThreeQuarter",
  name: `Functional
  connectivity`,
  kind: "Long Sleeve T-shirt",
  isNew: false,
  comment: `脳内はいくつかの領域に分かれ、異なる処理を専門的に担う領域が、
  互いにネットワークを形成して複雑な処理を行なっています。

  科学者は脳の電気的なシグナルを測定することで、それぞれの部位の役割や関係性を紐解きます。
  それにより、音楽を聴いた時の反応を司る様々な脳領域がわかってきました。

  例えば、ある特定の周波数の音を聴いた時、脳がその周波数に合わせた脳波を出すという、ASSR (聴性定常反応) が知られていますが、
  これは聴覚皮質や脳幹などの部位が、周波数ごとに役割分担をしながら処理しています。

  常に様々な武器を駆使して、科学者は生命現象を顕にしようとしているのです。`,
  images: [
    {
      colour: "Black",
      img: "/image/neuralNetworksThreeQuarter/neuralNetworksThreeQuarter-1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859903",
    },
    {
      colour: "Black",
      img: "/image/neuralNetworksThreeQuarter/neuralNetworksThreeQuarter-2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859903",
    },
  ],
};

const S315: ItemDatum = {
  id: "S315",
  name: "S315",
  kind: "T-shirt",
  isNew: false,
  comment: `音楽を聴いているとき、脳はその旋律を予測します。
  これは頭に接地した脳波計で測ることができ、
  予想通りの音が続くときには、振れ幅の小さい波形を見ることができます。

  しかし、予測とは異なる音が提示されると脳は反応を示し、
  MMN (Mismatch Negativity) と言われる脳波の反応を
  ディスプレイ上で観察することができます。

  音楽に関するMMNは、音楽の専門家と非専門家で異なる反応を示すことも報告されています。
  古来より"心"を動かす音楽を、実は私たちは無機質で工学的な仕組みで聴いているのかもしれません。`,
  images: [
    {
      colour: "Black",
      img: "/image/S315/s315-b1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859938",
    },
    {
      colour: "Black",
      img: "/image/S315/s315-b3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859938",
    },
    {
      colour: "White",
      img: "/image/S315/s315-w1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859949",
    },
    {
      colour: "White",
      img: "/image/S315/s315-w2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859949",
    },
    {
      colour: "Black",
      img: "/image/S315/s315.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/88859949",
    },
  ],
};

const shortDay: ItemDatum = {
  id: "shortDay",
  name: `Short-day
  plant`,
  kind: "Sweatshirt",
  isNew: false,
  comment: `花はその多様さ故に季節によって世界を全く異なる風景に彩ります。
  この多様性の一因は，植物が持つ，日照時間を基に季節を知る術にあります。
  秋に花を咲かせる植物を「短日植物」と言います。短日植物は，暗期の時間が閾値を超えると花を咲かせます。例えばカランコエという赤い花を咲かせる多肉植物は，日照時間が12時間以下の日が続くと花を咲かせ，それよりも長いと蕾すらつけません。また，日照時間が12時間以下であっても暗期を一時光で妨げると蕾をつけないことも実験によって知られています。
  花々が織りなす四季の風景はこのようなメカニズムの上に成り立っているのです。`,
  images: [
    {
      colour: "Burgundy",
      img: "/image/shortDay/shortDay-b1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69322241",
    },
    {
      colour: "White",
      img: "/image/shortDay/shortDay-w1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69322241",
    },
    {
      colour: "Burgundy",
      img: "/image/shortDay/shortDay-b2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69322241",
    },
    {
      colour: "White",
      img: "/image/shortDay/shortDay-w2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69322241",
    },
  ],
};

const abcModel: ItemDatum = {
  id: "abcModel",
  name: "ABCmodel",
  kind: "Sweatshirt",
  isNew: false,
  comment: `花は雌しべを雄しべが囲み、更に花びらとがくがそれらを守るような構造をとっています。これらの器官の形成はたった3つの遺伝子A、B、Cの組み合わせによって決まり、これをABCモデルと呼びます。
  遺伝子Aのみがはたらくする場合はがく、AとBの場合は花弁、BとCの場合は雄しべ、Cのみの場合は雌しべが形成されます。そのため，Bの遺伝子がはたらかなくなくなるとがくと雌しべのみの無弁花となります。
  この単純で精巧なABCモデルが複雑で美しい花の形成を支えているのです。`,
  images: [
    {
      colour: "Ash",
      img: "/image/abc/abc-ash1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69322183",
    },
    {
      colour: "Ash",
      img: "/image/abc/abc-ash2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69322183",
    },
    {
      colour: "Ash",
      img: "/image/abc/abc-ash3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69322183",
    },
    {
      colour: "Ash",
      img: "/image/abc/abc-ash4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69322183",
    },
    {
      colour: "Ash",
      img: "/image/abc/abc-ash5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69322183",
    },
  ],
};

const lure: ItemDatum = {
  id: "lure",
  name: "LURE",
  kind: "Hoodie",
  isNew: false,
  comment: `花は植物の生殖器官です。
  花粉がめしべに付着して受粉すると、精細胞を卵細胞へと届けるために、花粉は管を伸ばします。 見事なのは、複雑な構造のめしべの奥深くにある卵細胞まで、迷うことなく一直線に花粉管が伸びていくことです。
  このメカニズムには「ルアー」と呼ばれています。分泌することで、あたかも魚を誘き寄せるように、花粉管を誘導するのです。
  美しい花の奥にはかくもダイナミックで精巧なイベントが行われていたのです。`,
  images: [
    {
      colour: "Forest Green",
      img: "/image/lure/lure-g1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69321965",
    },
    {
      colour: "Forest Green",
      img: "/image/lure/lure-g2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69321965",
    },
    {
      colour: "Forest Green",
      img: "/image/lure/lure-g3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69321965",
    },
    {
      colour: "Forest Green",
      img: "/image/lure/lure-g4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/69321965",
    },
  ],
};

const embryoT: ItemDatum = {
  id: "embryoT",
  name: "Embryo Dev",
  kind: "T-shirt",
  isNew: false,
  comment: `今作のテーマは「胚発生」。
  ヒトの体は数十兆の細胞でできていますが、その人生はたった一個の細胞からスタートをきります。
  一つの受精卵が2つに分裂し、それが4つ、8つ...と増えていき、徐々に体の形を形作っていきます。
  この過程を胚発生と呼びます。
  今回は特に、その初期で、受精卵から腸や口や背骨の原型ができていく様子をデザインしました。
  海を泳ぐ魚や空を飛ぶ鳥など、多種多様な形を持つ脊椎動物ですが、不思議なことにこの時期の個体の形態は非常に似ています。
  生物全体を見渡せば、私たちは非常に似たグループであると言えるのです。  `,
  images: [
    {
      colour: "Black",
      img: "/image/embryo/emb-t-b1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241360",
    },
    {
      colour: "Black",
      img: "/image/embryo/emb-t-b2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241360",
    },
    {
      colour: "Black",
      img: "/image/embryo/emb-t-b3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241360",
    },
    {
      colour: "Black",
      img: "/image/embryo/emb-t-b4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241360",
    },
    {
      colour: "Black",
      img: "/image/embryo/emb-t.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241360",
    },
    {
      colour: "White",
      img: "/image/embryo/emb-t-w1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241342",
    },
    {
      colour: "White",
      img: "/image/embryo/emb-t-w2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241342",
    },
    {
      colour: "White",
      img: "/image/embryo/emb-t-w3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241342",
    },
  ],
};

const embryo_Sweat: ItemDatum = {
  id: "embryo_Sweat",
  name: "Embryo Dev",
  kind: "Sweatshirt",
  isNew: false,
  comment: `今作のテーマは「胚発生」。
  ヒトの体は数十兆の細胞でできていますが、その人生はたった一個の細胞からスタートをきります。
  一つの受精卵が2つに分裂し、それが4つ、8つ...と増えていき、徐々に体の形を形作っていきます。
  この過程を胚発生と呼びます。
  今回は特に、その初期で、受精卵から腸や口や背骨の原型ができていく様子をデザインしました。
  海を泳ぐ魚や空を飛ぶ鳥など、多種多様な形を持つ脊椎動物ですが、不思議なことにこの時期の個体の形態は非常に似ています。
  生物全体を見渡せば、私たちは非常に似たグループであると言えるのです。  `,
  images: [
    {
      colour: "Black",
      img: "/image/embryo/emb-black2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241239",
    },
    {
      colour: "Black",
      img: "/image/embryo/emb-black1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241239",
    },
    {
      colour: "Black",
      img: "/image/embryo/emb-black3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241239",
    },
    {
      colour: "Black",
      img: "/image/embryo/emb1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241239",
    },
    {
      colour: "Black",
      img: "/image/embryo/emb2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241239",
    },
    {
      colour: "Blue",
      img: "/image/embryo/emb-blue2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241242",
    },
    {
      colour: "Blue",
      img: "/image/embryo/emb-blue1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241242",
    },
    {
      colour: "Blue",
      img: "/image/embryo/emb-blue3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241242",
    },
  ],
};

const S314_Hoodie: ItemDatum = {
  id: "S314_Hoodie",
  name: "S314",
  kind: "Hoodie",
  isNew: false,
  comment: `本作では産まれる前のマウス(胎児マウス)が培養槽で飼育されています。
  哺乳類は体内で子を育てることで、胎児の生存確率を大幅に高めました。
  胎児は母親の子宮内で、へその緒と胎盤を介して栄養や酸素、老廃物のやり取りをしています。
  近年、人工的に作った受精卵を子宮に入れて育てる人工受精や、胎児を子宮から一時的に取り出して薬剤投与や遺伝子導入を行うExo utero法といった技術が確立してきました。
  ゆくゆくは完全に一から生物個体を生み出すことも可能になるかもしれません。
  `,
  images: [
    {
      colour: "Black",
      img: "/image/S314/314Hoodie-black3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241044",
    },
    {
      colour: "Black",
      img: "/image/S314/314Hoodie-black2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241044",
    },
    {
      colour: "Black",
      img: "/image/S314/314Hoodie-black1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241044",
    },
    {
      colour: "Black",
      img: "/image/S314/314Hoodie.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241044",
    },
    {
      colour: "Blue",
      img: "/image/S314/314Hoodie-blue3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241054",
    },
    {
      colour: "Blue",
      img: "/image/S314/314Hoodie-blue2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241054",
    },
    {
      colour: "Blue",
      img: "/image/S314/314Hoodie-blue1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241054",
    },
  ],
};

const S314T: ItemDatum = {
  id: "S314T",
  name: "S314",
  kind: "Long Sleeve T-shirt",
  isNew: false,
  comment: `本作では産まれる前のマウス(胎児マウス)が培養槽で飼育されています。
  哺乳類は体内で子を育てることで、胎児の生存確率を大幅に高めました。
  胎児は母親の子宮内で、へその緒と胎盤を介して栄養や酸素、老廃物のやり取りをしています。
  近年、人工的に作った受精卵を子宮に入れて育てる人工受精や、胎児を子宮から一時的に取り出して薬剤投与や遺伝子導入を行うExo utero法といった技術が確立してきました。
  ゆくゆくは完全に一から生物個体を生み出すことも可能になるかもしれません。
  `,
  images: [
    {
      colour: "Black",
      img: "/image/S314/314long-b1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241111",
    },
    {
      colour: "Black",
      img: "/image/S314/314long-b2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241111",
    },
    {
      colour: "Black",
      img: "/image/S314/314long.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241111",
    },
    {
      colour: "Light Blue",
      img: "/image/S314/314long-l1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241102",
    },
    {
      colour: "Light Blue",
      img: "/image/S314/314long-l2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60241102",
    },
  ],
};

const SmallLogoT: ItemDatum = {
  id: "SmallLogoT",
  name: "SmallLogo",
  kind: "T-shirt",
  isNew: false,
  comment: `Littermateは生物学の用語でマウスの同腹子を意味します。
  遺伝的に近いマウスは実験場重要な意味を持つのです。

  ロゴの上半分では「精密」「厳格」「論理的」---
  一方、下半分では「自由」「挑戦的」「創造的」---
  私たちのロゴは生物学がもつそんな“二面性”を体現しています。

  今回はそんなロゴをワッペンにした作品を作成しました。`,
  images: [
    {
      colour: "Black",
      img: "/image/smalllogo/t-black1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077225",
    },
    {
      colour: "White",
      img: "/image/smalllogo/t-white1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077231",
    },
  ],
};

const SmallLogoLongT: ItemDatum = {
  id: "SmallLogoLongT",
  name: "SmallLogo",
  kind: "Long-sleeve T-shirt",
  isNew: false,
  comment: `Littermateは生物学の用語でマウスの同腹子を意味します。
  遺伝的に近いマウスは実験場重要な意味を持つのです。

  ロゴの上半分では「精密」「厳格」「論理的」---
  一方、下半分では「自由」「挑戦的」「創造的」---
  私たちのロゴは生物学がもつそんな“二面性”を体現しています。

  今回はそんなロゴをワッペンにした作品を作成しました。`,
  images: [
    {
      colour: "Black",
      img: "/image/smalllogo/long-black1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077151",
    },
    {
      colour: "Black",
      img: "/image/smalllogo/long-black2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077151",
    },
    {
      colour: "Black",
      img: "/image/smalllogo/long-black3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077151",
    },
    {
      colour: "White",
      img: "/image/smalllogo/long-white1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077141",
    },
    {
      colour: "White",
      img: "/image/smalllogo/long-white2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077141",
    },
  ],
};

const SmallLogoSweat: ItemDatum = {
  id: "SmallLogoSweat",
  name: "SmallLogo",
  kind: "Sweat",
  isNew: false,
  comment: `Littermateは生物学の用語でマウスの同腹子を意味します。
  遺伝的に近いマウスは実験場重要な意味を持つのです。

  ロゴの上半分では「精密」「厳格」「論理的」---
  一方、下半分では「自由」「挑戦的」「創造的」---
  私たちのロゴは生物学がもつそんな“二面性”を体現しています。

  今回はそんなロゴをワッペンにした作品を作成しました。`,
  images: [
    {
      colour: "Black",
      img: "/image/smalllogo/sweat-black2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077039",
    },
    {
      colour: "Black",
      img: "/image/smalllogo/sweat-black1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077039",
    },
    {
      colour: "Black",
      img: "/image/smalllogo/sweat-black3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077039",
    },
    {
      colour: "White",
      img: "/image/smalllogo/sweat-white1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077031",
    },
    {
      colour: "White",
      img: "/image/smalllogo/sweat-white2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077031",
    },
    {
      colour: "Gray",
      img: "/image/smalllogo/sweat-gray1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077047",
    },
    {
      colour: "Gray",
      img: "/image/smalllogo/sweat-gray2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60077047",
    },
  ],
};

const StrucJacket: ItemDatum = {
  id: "StrucJacket",
  name: "Protein Structure",
  kind: "Jacket",
  isNew: false,
  comment: `生命の設計図であるDNAは20種類のアミノ酸に“翻訳”できます。
  設計図通りにアミノ酸をつなげると、タンパク質になります。タンパク質はアミノ酸の並びに基づいて自然に折りたたまれます。
  しかし、その折りたたみの法則はあまりに複雑で、長い間解かれていませんでした。
  その問題がついに、2021年に公開されたAIソフトのAlphaFold によって解かれ、世界で一大ムーブになっています。

  本作ではブランド名のアミノ酸に見立てた時の折りたたみをAlphaFoldで予測してプリントしました。ついに人類に解かれた自然界の法則によるデザインをぜひお楽しみください。`,
  images: [
    {
      colour: "Black",
      img: "/image/alphafold/alphafold3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60076663",
    },
    {
      colour: "Black",
      img: "/image/alphafold/alphafold2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60076663",
    },
    {
      colour: "Black",
      img: "/image/alphafold/alphafold1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60076663",
    },
    {
      colour: "Black",
      img: "/image/alphafold/alphafold4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/60076663",
    },
  ],
};

const S313: ItemDatum = {
  id: "S313",
  name: "S313",
  kind: "Sweatshirt",
  isNew: false,
  comment: `今作のテーマは｢ヌードマウス｣として知られる変異マウス。
  全身の体毛がないマウスとして1960年代に発見されました。
  その体の構造を調べていると、驚くべきことに免疫細胞の工場の一つである胸腺が欠けていることがわかりました。
  これにより免疫細胞の一つ、T細胞の産生ができなくなり、免疫不全となります。
  この性質により、病原体の感染はもとより、他個体や多種の組織を移植しても拒絶反応を起こさないため、癌腫瘍の研究にも大きな躍進をもたらしました。`,
  images: [
    {
      colour: "black",
      img: "/image/s313/s313-1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54834270",
    },
    {
      colour: "black",
      img: "/image/s313/s313-3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54834270",
    },
    {
      colour: "pink",
      img: "/image/s313/s313-2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54830812",
    },
  ],
};

const nude: ItemDatum = {
  id: "nude",
  name: "Immune Cell",
  kind: "Hoodie",
  isNew: false,
  comment: `私たちは、血中の様々な免疫細胞がそれぞれの役割をもち、互いに巧みなコミュニケーションを取ることで、外部からの感染から身を守っています。
  細菌やウイルス、寄生虫を飲み込む細胞、飲み込んだ異物の情報を他の細胞に伝える細胞、異物に対して武器(抗体)を作り攻撃する細胞、その記憶を保持し次の感染に備える細胞…。
  実はこれらの細胞は全て元々は｢造血幹細胞｣という同じ種類の細胞でした。
  骨の中心部にある骨髄で作られた後、様々な種類に分化していき複雑な防衛システムを構築しているのです。`,
  images: [
    {
      colour: "green",
      img: "/image/immune/immune1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54834330",
    },
    {
      colour: "green",
      img: "/image/immune/immune2.png",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54834330",
    },
    {
      colour: "pink",
      img: "/image/immune/immune3.png",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54830919",
    },
  ],
};

const immune: ItemDatum = {
  id: "immune",
  name: "Immune Cell",
  kind: "Hoodie",
  isNew: false,
  comment: `私たちは、血中の様々な免疫細胞がそれぞれの役割をもち、互いに巧みなコミュニケーションを取ることで、外部からの感染から身を守っています。
  細菌やウイルス、寄生虫を飲み込む細胞、飲み込んだ異物の情報を他の細胞に伝える細胞、異物に対して武器(抗体)を作り攻撃する細胞、その記憶を保持し次の感染に備える細胞…。
  実はこれらの細胞は全て元々は｢造血幹細胞｣という同じ種類の細胞でした。
  骨の中心部にある骨髄で作られた後、様々な種類に分化していき複雑な防衛システムを構築しているのです。`,
  images: [
    {
      colour: "green",
      img: "/image/immune/immune1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54834330",
    },
    {
      colour: "green",
      img: "/image/immune/immune2.png",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54834330",
    },
    {
      colour: "pink",
      img: "/image/immune/immune3.png",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54830919",
    },
  ],
};

const accessories: ItemDatum = {
  id: "Accessories",
  name: "Accessories",
  kind: "Accessories",
  isNew: false,
  comment: ``,
  images: [
    {
      colour: "Ear Tag",
      img: "/image/accessories/eartag1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54831026",
    },
    {
      colour: "Ear Tag",
      img: "/image/accessories/eartag2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54831026",
    },
    {
      colour: "Ear Tag",
      img: "/image/accessories/eartag3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54831026",
    },

    {
      colour: "DNA",
      img: "/image/accessories/dna1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54831094",
    },
    {
      colour: "DNA",
      img: "/image/accessories/dna2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54831094",
    },
  ],
};

const alcohol: ItemDatum = {
  id: "alcohol",
  name: "Alcohol Mice",
  kind: "Long-sleeve T-shirt",
  isNew: false,
  comment: `Littermateバーのアルコールに溺れる可愛いマウス達。
  発酵の化学反応式やLittermateを表す日本語も隠れているとかいないとか、、、。`,
  images: [
    {
      colour: "White",
      img: "/image/alcohol/alcohol4.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54682635",
    },
    {
      colour: "White",
      img: "/image/alcohol/alcohol2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54682635",
    },
    {
      colour: "White",
      img: "/image/alcohol/alcohol3.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54682635",
    },
    {
      colour: "White",
      img: "/image/alcohol/alcohol1.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54682635",
    },
    {
      colour: "White",
      img: "/image/alcohol/alcohol5.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54682635",
    },
    {
      colour: "White",
      img: "/image/alcohol/alcohol6.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/54682635",
    },
  ],
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
      // baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_W_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_W_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_W_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_WB_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716951",
    },
    {
      colour: "White",
      img: "/image/S311/S311_WB_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716951",
    },

    {
      colour: "Blue",
      img: "/image/S311/S311_B_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716947",
    },
    {
      colour: "Blue",
      img: "/image/S311/S311_B_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716947",
    },
    {
      colour: "Blue",
      img: "/image/S311/S311_B_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716947",
    },
    {
      colour: "Blue",
      img: "/image/S311/S311_WB_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716947",
    },
    {
      colour: "Blue",
      img: "/image/S311/S311_WB_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/49716947",
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
      // baseLink: "https://littermate.thebase.in/items/47796109",
    },
    {
      colour: "Black",
      img: "/image/sequence/TagTBlack1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/47796109",
    },
    {
      colour: "White",
      img: "/image/sequence/TagTWhite2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/47775349",
    },
    {
      colour: "White",
      img: "/image/sequence/TagTWhite1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/47775349",
    },
    {
      colour: "Black",
      img: "/image/sequence/TagTWhiteBlack1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/47796109",
    },
    {
      colour: "Black",
      img: "/image/sequence/TagTWhiteBlack2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/47796109",
    },
    {
      colour: "White",
      img: "/image/sequence/TagTWhiteBlack1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/47775349",
    },
    {
      colour: "White",
      img: "/image/sequence/TagTWhiteBlack2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/47775349",
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
      // baseLink: "https://littermate.thebase.in/items/32152635",
    },
    {
      colour: "Blue Green",
      img: "/image/TET/TET_B_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152635",
    },
    {
      colour: "Blue Green",
      img: "/image/TET/TET_B_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152635",
    },

    {
      colour: "Charcoal",
      img: "/image/TET/TET_C_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152688",
    },
    {
      colour: "Charcoal",
      img: "/image/TET/TET_C_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152688",
    },
    {
      colour: "Charcoal",
      img: "/image/TET/TET_C_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152688",
    },

    {
      colour: "Pink",
      img: "/image/TET/TET_P_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152604",
    },
    {
      colour: "Pink",
      img: "/image/TET/TET_P_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152604",
    },
    {
      colour: "Pink",
      img: "/image/TET/TET_P_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152604",
    },
    {
      colour: "Pink",
      img: "/image/TET/TET_YP_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152604",
    },

    {
      colour: "Yellow",
      img: "/image/TET/TET_Y_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152393",
    },
    {
      colour: "Yellow",
      img: "/image/TET/TET_YP_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32152393",
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
      // baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_5.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/22494178",
    },
    {
      colour: "White",
      img: "/image/S301/S301_6.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/22494178",
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
      // baseLink: "https://littermate.thebase.in/items/22494315",
    },
    {
      colour: "Black",
      img: "/image/S302/S302_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/22494315",
    },
    {
      colour: "Black",
      img: "/image/S302/S302_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/22494315",
    },
    {
      colour: "Black",
      img: "/image/S302/S302_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/22494315",
    },
    {
      colour: "Black",
      img: "/image/S302/S302_5.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/22494315",
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
      // baseLink: "https://littermate.thebase.in/items/23042114",
    },
    {
      colour: "Orange",
      img: "/image/S303/S303_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/23042114",
    },
    {
      colour: "Orange",
      img: "/image/S303/S303_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/23042114",
    },
    {
      colour: "Orange",
      img: "/image/S303/S303_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/23042114",
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
      // baseLink: "https://littermate.thebase.in/items/23694327",
    },
    {
      colour: "Black",
      img: "/image/S304/S304_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/23694327",
    },
    {
      colour: "Black",
      img: "/image/S304/S304_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/23694327",
    },
    {
      colour: "Black",
      img: "/image/S304/S304_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/23694327",
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
      // baseLink: "https://littermate.thebase.in/items/25209207",
    },
    {
      colour: "White",
      img: "/image/S305/S305_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/25209207",
    },
    {
      colour: "White",
      img: "/image/S305/S305_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/25209207",
    },
    {
      colour: "White",
      img: "/image/S305/S305_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/25209207",
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
      // baseLink: "https://littermate.thebase.in/items/26786875",
    },
    {
      colour: "Black",
      img: "/image/S306/S306_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/26786875",
    },
    {
      colour: "Black",
      img: "/image/S306/S306_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/26786875",
    },
    {
      colour: "Black",
      img: "/image/S306/S306_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/26786875",
    },
    {
      colour: "Black",
      img: "/image/S306/S306_5.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/26786875",
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
      // baseLink: "https://littermate.thebase.in/items/27176797",
    },
    {
      colour: "Black",
      img: "/image/S307/S307_B_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/27176797",
    },
    {
      colour: "Black",
      img: "/image/S307/S307_BN_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/27176797",
    },

    {
      colour: "White",
      img: "/image/S307/S307_W_6.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/27176836",
    },
    {
      colour: "White",
      img: "/image/S307/S307_W_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/27176836",
    },
    {
      colour: "White",
      img: "/image/S307/S307_W_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/27176836",
    },
    {
      colour: "White",
      img: "/image/S307/S307_W_5.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/27176836",
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
      // baseLink: "https://littermate.thebase.in/items/31899670",
    },
    {
      colour: "White",
      img: "/image/S308/S308_W_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/31899670",
    },
    {
      colour: "White",
      img: "/image/S308/S308_W_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/31899670",
    },
    {
      colour: "White",
      img: "/image/S308/S308_W_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/31899670",
    },

    {
      colour: "Sand",
      img: "/image/S308/S308_S_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/31899567",
    },
    {
      colour: "Sand",
      img: "/image/S308/S308_S_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/31899567",
    },
    {
      colour: "Sand",
      img: "/image/S308/S308_S_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/31899567",
    },
    {
      colour: "Sand",
      img: "/image/S308/S308_S_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/31899567",
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
      // baseLink: "https://littermate.thebase.in/items/32153279",
    },
    {
      colour: "Green",
      img: "/image/S201/S201_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/32153279",
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
      // baseLink: "https://littermate.thebase.in/items/34789986",
    },
    {
      colour: "White",
      img: "/image/coffee/coffee_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/34789986",
    },
    {
      colour: "White",
      img: "/image/coffee/coffee_7.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/34789986",
    },
    {
      colour: "White",
      img: "/image/coffee/coffee_8.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/34789986",
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
      // baseLink: "https://littermate.thebase.in/items/34742723",
    },
    {
      colour: "Blue",
      img: "/image/falling/falling_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/34742723",
    },
    {
      colour: "Blue",
      img: "/image/falling/falling_6.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/34742723",
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
      // baseLink: "https://littermate.thebase.in/items/33861789",
    },
    {
      colour: "Natural",
      img: "/image/S401/S401_H_7.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/33861789",
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
      // baseLink: "https://littermate.thebase.in/items/33861469",
    },
    {
      colour: "Green",
      img: "/image/S401/S401_LT_6.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/33861469",
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
      // baseLink: "https://littermate.thebase.in/items/36131917",
    },
    {
      colour: "Black",
      img: "/image/S309/S309_Hoodie_Black_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/36131917",
    },

    {
      colour: "White",
      img: "/image/S309/S309_Hoodie_White_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/36131782",
    },
    {
      colour: "White",
      img: "/image/S309/S309_Hoodie_White_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/36131782",
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
      // baseLink: "https://littermate.thebase.in/items/36132089",
    },
    {
      colour: "Burgundy",
      img: "/image/S309/S309_Sweartshirt_Burgundy_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/36132089",
    },
    {
      colour: "White",
      img: "/image/S309/S309_Sweartshirt_White_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/36132113",
    },
    {
      colour: "White",
      img: "/image/S309/S309_Sweartshirt_White_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/36132113",
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
      // baseLink: "https://littermate.thebase.in/items/44077806",
    },
    {
      colour: "Green",
      img: "/image/S310/S310_Green_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077806",
    },
    {
      colour: "Green",
      img: "/image/S310/S310_Green_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077806",
    },
    {
      colour: "Green",
      img: "/image/S310/S310_Green_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077806",
    },

    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_6.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Blue",
      img: "/image/S310/S310_Blue_5.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077546",
    },

    {
      colour: "Red",
      img: "/image/S310/S310_Red_2.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077956",
    },
    {
      colour: "Red",
      img: "/image/S310/S310_Red_1.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077956",
    },
    {
      colour: "Red",
      img: "/image/S310/S310_Red_3.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077956",
    },
    {
      colour: "Red",
      img: "/image/S310/S310_Red_4.jpg",
      lookOnly: false,
      // baseLink: "https://littermate.thebase.in/items/44077956",
    },
  ],
  ogimage: "/image/S310/ogimage-item-S310.jpg",
  photographer: "Hugo Wakui",
  stylist: "Tomoka Kume",
  hair: "Natsuko Ogita(UpperCrust)",
  model: "Audrey & Takumi",
};

export const itemsData: ItemDatum[] = [
  neuralNetworks,
  neuralNetworksThreeQuarter,
  S315,
  shortDay,
  abcModel,
  lure,
  embryoT,
  embryo_Sweat,
  S314_Hoodie,
  S314T,
  SmallLogoT,
  SmallLogoLongT,
  SmallLogoSweat,
  StrucJacket,
  S313,
  immune,
  accessories,
  alcohol,
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
    items: [
      S201,
      S308,
      S303,
      S302,
      S301,
      TET,
      Logo,
      sequence,
      S311,
      SmallLogoT,
      embryoT,
      S315,
      neuralNetworks,
    ],
  },
  {
    category: "Hoodie",
    items: [
      S309_Hoodie,
      S401_Hoodie,
      S305,
      S312_Hoodie,
      seq_Hoodie,
      immune,
      S314_Hoodie,
      lure,
    ],
  },
  {
    category: "Sweatshirt",
    items: [
      S309_Sweatshirt,
      falling,
      S313,
      SmallLogoSweat,
      embryo_Sweat,
      abcModel,
      shortDay,
    ],
  },
  {
    category: "Long-sleeve T-shirt",
    items: [
      S310,
      S401,
      coffee,
      S307,
      S304,
      S312,
      alcohol,
      SmallLogoLongT,
      S314T,
      neuralNetworks,
      neuralNetworksThreeQuarter,
    ],
  },
  {
    category: "Jacket",
    items: [S306, StrucJacket],
  },
  {
    category: "Aaccessories",
    items: [accessories],
  },
];

export const itemData = categoryData.reduce((pre, cur) => {
  return [...pre, ...cur.items];
}, [] as ItemDatum[]);
