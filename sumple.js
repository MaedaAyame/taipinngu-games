'use strict';

{
  //////問題文
  const word = "cat";
  //////文字列の何番目かを管理する変数
  let loc = 0;
  //スコアーを管理する変数
  let score = 0; 
  //ミスを管理する変数
  let miss = 0;

  /////表示エリアを取得
  const target = document.getElementById('target');
  //打った文字を入れる
  target.textContent = word;
  //スコア表示エリアを取得
  const score = document.getElementById('score');
  //ミス表示エリアを取得
  const miss = document.getElementById('miss');



  document.addEventListener('keydown',e =>{
    //キーを押したら以下の処理を実行
    if(e.key === word[loc]){//打ったキーがwordのloc番目の文字と同じじゃないなら
      //次の文字へ
    loc++;
      //正解数プラス１
    score++;
     //1;_ed
     //2:__b
     //3;___
     target.textContent = '_'.repeat(loc) + word.substring(loc);

    }else{
      return;
      missLabel++;//ミス数をプラス１
      
    };
    
     
  });
}