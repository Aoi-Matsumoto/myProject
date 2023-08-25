const newElement = document.createElement("p");
newElement.textContent = "新しく追加しました";
newElement.style.color = "skyblue";

const content = document.querySelector(".content");
content.append(newElement);

// prepend()とappend()は子要素の先頭と末尾に要素を追加する
// before()とafter()は)指定要素の前後に要素を追加する
// remove()は要素を削除する
//append , prepend , before , after , remove , replaceWith
