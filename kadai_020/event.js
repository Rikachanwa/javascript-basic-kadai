// 画面から取得したHTML要素を定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックした際に文字変更を行う
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});

