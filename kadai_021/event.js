// 画面から取得したHTML要素を定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックしたら2秒後に文字変更する
 btn.addEventListener('click', () => {
    setTimeout(() => {text.textContent = 'ボタンをクリックしました';
    }, 2000);   
});

