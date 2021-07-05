# data/item/index.ts

ウェブサイト内に表示される全てのアイテムをここで管理します。

## step 1

まず、アイテムの情報を書き込みます。たとえばこのようにしてください。

```ts
onst S310: ItemDatum = {
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
      baseLink: "https://littermate.thebase.in/items/44077806",
    },

    {
      colour: "Blue",
      img: "/image/S310/Blue_1_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077546",
    },
    {
      colour: "Red",
      img: "/image/S310/Red_3_2.jpg",
      lookOnly: false,
      baseLink: "https://littermate.thebase.in/items/44077956",
    },
  ],
  photographer: "Hugo Wakui",
  stylist: "Tomoka Kume",
  hair: "Natsuko Ogita(UpperCrust)",
  model: "Audrey & Takumi",
};
```

- `comment`の中の改行は正しく反映されます。
- `images`の配列内で、`lookOnly: true`とすると、商品ページ（`item/id/`）には表示されず、Look ページにのみ表示されます。
- トップページには、各カラーの一番先頭に登録した写真が代表として表示されます。したがって、同一カラーの写真を複数枚`images`に登録する場合は、トップページに表示させたいものを先頭に配置してください。
- その際、`baseLink`はお手数ですが毎回（同じものになりますが）書いてもらうようにお願いします。
- `Photographer`, `stylist`, `hair`, `model`の 4 つは任意の属性です。登録しない場合その行自体を削除してしまって構わないです。また、これ以外の属性がほしい場合にはご相談ください。

## step 2

以下の部分に登録した`items`を追加してください。

```ts
export const categoryData: Category[] = [
  {
    category: "T-shirt",
    items: [S310, S309_Sweatshirt],
  },
  {
    category: "Hoodie",
    items: [...],
  },
  ...
];
```

- `category`を新規に追加すると、メニューやトップページなどに即時反映されます。

## その他

- トップページのトップのアイキャッチの画像を変更したい場合は、`components/Pages/Top/parameters.ts`で変更してください。ただしロゴ位置の変更が必要かもしれないので、その場合はご相談ください。
