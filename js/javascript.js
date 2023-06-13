/************************************************************** 
how to import GitHub CSS

https://takemoto61.github.io/template/css/javascript.js

***************************************************************/


/* Vue after create menu is NULL, need write in main.js */
const menuId=document.getElementById('menu');
const menuList = document.getElementById('menu-list');
console.log(menuId);
if (menuId) {
  menuId.addEventListener("click",() => {
    //console.log(el);
    if (menuId.classList.contains('menuOpen')) {
      menuId.classList.remove('menuOpen');
      menuList.style.display ='none';
    }
    else {
      menuId.classList.add("menuOpen");
      menuList.style.display ='block';
    }
  });
}


//スクロールすると上部にMenuを固定 する関数
// use with css class
//
//#mainNav.fixed{
//	width:100%; /*横幅指定*/
//	position: fixed;/*fixedを設定して固定*/
//  z-index: 999;/*最前面へ*/
//  top:0;/*位置指定*/
//  left:0;/*位置指定*/
//}
function FixedMenu() {
  let nav = document.getElementById('main-nav');
  let headerH = nav.offsetHeight;
  let scroll = window.scrollY;
  if (scroll >= headerH){//headerの高さ以上になったら
      nav.classList.add('fixed');//fixedというクラス名を付与
  }else{//それ以外は
      nav.classList.remove('fixed');//fixedというクラス名を除去
  }
}

/* 画面をスクロールをしたら動かしたい場合の記述 */
window.addEventListener('scroll',function () {
  // スクロール途中からヘッダーを出現させる関数を呼ぶ
  FixedMenu();
});

/* ページが読み込まれたらすぐに動かしたい場合の記述
この機能がなくても、今のところ不便ではないので、いったんコメントアウト
2023/01/11
window.onload = function () {
  FixedMenu();// スクロール途中からヘッダーを出現させる関数を呼ぶ
};*/

