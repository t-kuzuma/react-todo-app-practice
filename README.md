# react-todo-app-practice

フィヨルドブートキャンプの「React の基本」プラクティス用リポジトリです。

## プラクティスを進めるにあたって

このリポジトリのブランチを切り替えると、正解が見えてしまいます。また、他の受講生が作成した提出物も見ようと思えば見ることができます。

正解を見てしまわないように注意しながら進めていってください。 実力をつけていくためにも、自分自身の力でソースコードを完成させていきましょう。

## How to use

1. 右上の `Fork` ボタンを押してください。
2. `#{自分のアカウント名}/react-todo-app-practice` が作成されます。
3. 作業 PC の任意の作業ディレクトリにて `git clone` してください。

```
$ git clone https://github.com/自分のアカウント名/react-todo-app-practice.git
```

4. `cd react-todo-app-practice` でカレントディレクトリを変更してください。
5. `npx http-server`を実行するとローカルサーバーが起動し、`localhost:8080`でアクセスできます。最初は`index.html`が空なので真っ白な画面が表示されます。
6. Todo アプリを実装してください。React と Babel は CDN から読み込み、全てのソースコードは`index.html`、`todo.js`、`style.css`の中に書いてください。
7. html/js/css を修正したら、ブラウザをリロードして動作を確認してください。キャッシュをクリアするために、Windows なら「Ctrl + F5」、Mac なら「shift + cmd + R」でリロードしましょう。
8. 自分が書いたコードを GitHub に push してください。
9. ソースコードが完成したら、以下の注意点に気を付けながら自分のリポジトリへの Pull Request を作成し、URL を提出してください。
   - OK `自分のアカウント名/main` ← `自分のアカウント名/react-todo-app-practice`
   - NG `fjordllc/main` ← `自分のアカウント名/react-todo-app-practice`
10. 合格したら上記 Pull Request をマージしてください。

## 補足

`index.html`を直接開かずに`http-server`を使用する理由は、[CORS](https://developer.mozilla.org/ja/docs/Web/HTTP/CORS)エラーを避けるためです。
