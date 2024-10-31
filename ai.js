import { getGeminiResponse } from './node.mjs';

async function fetchData() {
// HTMLのinputの値を取得
    let Problem = document.getElementById("problem").value

    // mjsの関数に値を渡してAPIを呼び出し
    let response = await getGeminiResponse(Problem);

    // APIからの応答をHTMLに表示
    document.getElementById("ai_answer").textContent = response;
}

export { fetchData };