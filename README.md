```mermaid
graph LR
subgraph gitHub
a[CSS]
d[js]
end
subgraph template google
b[htmlファイル]
end
subgraph body
c[mdファイル]
end
b-->|head Javascript 読込|d
b-->|head style 読込|a
b-->|id #main 本文|c
```
- [x] GitHubアカウント作成

    [無料アカウントでも非公開に設定できる](https://notepad-blog.com/content/59/)

    <font color="red">公開にしないとWEBページが表示されません</font>
    すでにアカウントもっていました。

    [[HOME]](https://github.com/takemoto61)

    

    [ホームページ・更新の仕方](https://prog-8.com/docs/github-pages)

- [X] New Repository / [template]
- [X] Link to GitHub with VSCode
- [ ] responsive design index.html
- [ ] stack_edit.css 拡張 change to my own css
- [ ] stack_edit template を index.htmlを基準にして、作成

ホームページは、Google側で表示して、あくまでも、gitHubは、テンプレート作成のための CSS, JavaScriptを作成するためのものとする。

- [ ] stack_edit.css 必要なものを抜粋
    - [ ] KaTex class css

```mermaid
graph TD
a[gitHub]
b[responsive design]
c[style.css]
d[stack_edit.css]
subgraph CSS & JavaScript 
a
e[VSCode]
c
end
subgraph User Interface
b
end
```
