const onClickAdd = () => {
  // 入力内容を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リストへ追加
  createIncompleteList(inputText);
};

// 未完了リストから削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する
const createIncompleteList = (text) => {
  // div の生成
  const div = document.createElement("div");
  div.className = "list-row";
  // li のお生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンを追加する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 完了ボタンが押されたときの動作
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除する
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // 完了リストに追加するリストの文字列を取得
    const text = addTarget.firstElementChild.innerText;
    // div 以下を初期化する
    addTarget.textContent = null;
    // li タグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻すボタンを押されたときの動作
    backButton.addEventListener("click", () => {
      // 戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキストを取得;
      const text = backButton.parentNode.firstElementChild.innerText;
      // 未完了リストへ戻す
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了ボタンの親タグを完了リストへ追加する
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンを追加する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンを押されたときの動作
  deleteButton.addEventListener("click", () => {
    // 削除ボタンの親タグを未完了リストから削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素として各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
