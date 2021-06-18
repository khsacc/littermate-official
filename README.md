# Littermate-official

本プロジェクトでは [Next.js](https://nextjs.org/) を Typescript で使用します。

## 環境構築

- パッケージ管理には`yarn`を用います。`npm`は利用しません。
- node のバージョンは 15.0.1 です。
- エディタには VSCode を推奨し、VSCode 用の設定ファイル類も git の管理下に含めることにします。
  - 拡張機能として、prettier / eslint をインストールしてください。ファイルの保存時に自動的にコードをフォーマットします。

## 開発用サーバーの起動

クローンしたら、

```bash
yarn
```

を走らせて依存関係をダウンロードしてください。

次に、ターミナルで

```bash
yarn dev
```

を実行してください。 [http://localhost:3000](http://localhost:3000) にコンパイルされた結果が表示されます。

## Contributions

- 基本的には機能別にブランチを切ってください。たとえば`feature/top-page`のような命名にしてください。
- 特定のバグフィックスなどの修正を目的とする場合、`fix/loading-animation`のような命名にしてください。
- コミットはできるだけ細かく！
- 一通り開発が終了したら、`dev`ブランチに向けて Pull Request を出してください。PR を作成するとテンプレートが表示されますので、可能な限りテンプレに記載された項目を埋めて PR を出してください。なお、`dev`ブランチと`main`ブランチは保護されており、直接のプッシュはできません。
- 修正すべき事項はできる限り Issue で管理してください。

## Coding

- `.eslintrc.js`以外の全てのファイルは TypeScript で記述します。
- エディタとして VSCode を利用してください。自動でコードがフォーマットされます。
- CSS には CSS-in-JS ライブラリとして[`@material-ui/core`](https://material-ui.com/)を利用します。
  - レスポンシブ対応に関する既知のバグがありますが、react-jss など他のライブラリでは gsap が利用できなかったので諦めました。基本的に「モバイルファースト」で書けば問題ないはずです。iPhone SE 対応したい場合相談してください。
- アニメーション関連のライブラリとして、gsap と [react-gsap](https://bitworking.github.io/react-gsap/) を導入しています。基本的には react-gsap の記法に従い、それでは実現できない場合（`<ScrollTrigger>`周りの型システムに不完全な部分があるようです）には gsap の記法を使うというルールにしようと思います。
- root 直下に`.env`ファイルを作り、`DEV=true`とすると Google Analytics のデバッグ用に、Google に送信されるのと同じ内容が console.log に出力されます

- `main`ブランチの内容が Vercel を経由して自動でデプロイされるように設定する予定です。
