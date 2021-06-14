# Logo Component

- Logo を出力するコンポーネントです。jsx 文中で `<LittermateLogo />`として呼び出します。これを利用するとインライン SVG として描画されます。
- 画像を利用したい特段の理由がない場合にはこちらを利用しましょう。なお、画像を利用したい場合には以下のようにします。

```tsx
<img src="/Logo/Logo_max.svg" />
```

- Logo Component は prop として `size` をとります。`"max"`, `"middle"`, `"min"`のいずれかを指定してください。指定しない場合`"max"`になります。
- インライン SVG なので、その場所に描画される文字と同じ色がデフォルトであてがわれます。
- Logo Component は任意の prop として `className`と`style`を受け取ります。いずれも他の tsx で指定するのと同じ型を受け入れます。
- まとめると、たとえば以下のように使うことができます。

```tsx
<LittermateLogo
  size="max"
  className="additional_class_name"
  style={{ fontSize: "0.5em" }}
/>
```
