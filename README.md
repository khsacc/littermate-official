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
- 一通り開発が終了したら、`dev`ブランチに向けて Pull Request を出してください。
- 修正すべき事項はできる限り Issue で管理してください。
