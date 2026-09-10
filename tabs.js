document.querySelectorAll(".tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    // 全タブ非表示
    document.querySelectorAll(".tab-content").forEach(sec => {
      sec.classList.remove("active");
    });

    // 全ボタンの active を消す
    document.querySelectorAll(".tabs button").forEach(b => {
      b.classList.remove("active");
    });

    // 押したボタンを active に
    btn.classList.add("active");

    // 対応するセクションを表示
    const id = btn.dataset.tab;
    document.getElementById(id).classList.add("active");
  });
});

// 初期表示
document.querySelector(".tabs button").click();
