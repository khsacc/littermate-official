## STYLES

- 複数のファイルにまたがるようなスタイル定義やパラメータ格納はこのディレクトリ内部で行います。
- material-ui の theme に含めることができるパラメータに関しては、`theme.ts`内で定義してください。
  - このプロジェクトは material design ではないので、material-ui のパラメータ設定では過不足があると思います。
  - material-ui の theme に関する情報はこちらを参照してください。 [https://material-ui.com/customization/theming/#createmuitheme-options-args-theme](https://material-ui.com/customization/theming/#createmuitheme-options-args-theme)
- それ以外のパラメータに関しては、新しく`ts`ファイルを作って定めてください。
