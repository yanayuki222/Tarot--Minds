


document.addEventListener("DOMContentLoaded", function () {
 
    let HelpButton = document.getElementById("help_button")
    let Start = document.getElementById("start")
    let Example = document.getElementById("example")
    let Cut = document.getElementById("cut")
    let LookResult = document.getElementById("look_result")
    let GoResult = document.getElementById("go_result")
    let Result;

    //javascriptで14枚の画像を別々に動かしたい。htmlの画像のidに数字をつけ、jsのfor文で1~14のidを取得しiを使って変数を示す方法

    if (HelpButton) {
        HelpButton.addEventListener("click", function () {
            if (Example.style.display === 'none') {
                Example.style.display = 'block'; // 詳細を表示
            } else {
                Example.style.display = 'none'; // 詳細を非表示
            }
        }, false);
    };


    if (Start) {
        Start.addEventListener("click", function () {
            const TarotCards = document.querySelectorAll('.tarot_card');
            let Keyframe;
            TarotCards.forEach(card => {
                // ランダムに移動させる
                moveRandomly(card);
                Cut.addEventListener("click", function () {
                    const centerX = window.innerWidth / 2 - card.clientWidth / 2;
                    const centerY = window.innerHeight / 2 - card.clientHeight / 2;
                    if (window.matchMedia('(max-width: 1000px)').matches) {
                        Keyframe={ transform: `translate(115px, 100px)` }
                    }else if (window.matchMedia('(min-width:1001px)').matches){
                        Keyframe={ transform: `translate(420px, -100px)` }
                    }

                    card.animate(
                        [
                            Keyframe
                        ],
                        {
                            duration: 1000, // アニメーションの長さ（1秒）
                            easing: 'ease-in-out', // 滑らかな移動
                            fill: 'forwards' // アニメーション後の状態を維持
                        }
                    );
                    LookResult.style.display = "block"
                });
            });

        });
    }

    // window.location.href = "tarot.html";

    //★❤
    // if(LookResult){
    //     LookResult.addEventListener("click", function () {
    //         let ClearTarot = document.querySelectorAll('.clear_tarot');

    //         let choice = Math.floor(Math.random() * ClearTarot.length)
    //         Result = ClearTarot[choice]
    //         localStorage.setItem('selected_card_src', Result.src)
    //         localStorage.setItem('selected_card_alt', Result.alt)
    //         let ResultArea = document.getElementById("result_area");
    //         ResultArea.innerHTML += `<img src="${Result.src}" width="25%">`
    //         if (LookResult.style.display === 'block') {
    //             LookResult.style.display = 'none';
    //             GoResult.style.display = 'block';
    //         }
    //         let ResultName = document.getElementById("result_name");
    //         let ResultImg = document.getElementById("result_img");
    //         let SelectedSrc = localStorage.getItem('selected_card_src')
    //         let SelectedAlt = localStorage.getItem('selected_card_alt')

            
    //     });
        
        // GoResult.addEventListener("click", function () {
        //     window.location.href = "result.html";
        // });

    
    
    // const apiUrl = 'https://api.geminiflash.com/v1/devices';  // 仮のURL。実際のAPIエンドポイントを使用

    // API呼び出し関数
    // async function getDeviceStatus() {
    //     try {
    //         const response = await fetch(apiUrl, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer YOUR_API_TOKEN'  // APIキーを設定
    //             }
    //         });

    //         if (!response.ok) {
    //             throw new Error('ネットワークの問題が発生しました');
    //         }

    //         const data = await response.json();
    //         console.log('デバイスステータス:', data);
    //     } catch (error) {
    //         console.error('エラー:', error);
    //     }
    // }

    // ページ読み込み後にAPI呼び出し
    // getDeviceStatus();

    // { transform: `translate(${centerX}px, ${centerY}px)` }
    // window.addEventListener("load", function () {
    //     let ResultName = document.getElementById("result_name");
    //     let ResultImg = document.getElementById("result_img");
    //     let SelectedSrc = localStorage.getItem('selected_card_src')
    //     let SelectedAlt = localStorage.getItem('selected_card_alt')
    //     if (SelectedSrc && SelectedAlt){
    //         ResultName.innerHTML = SelectedAlt
    //         ResultImg.src = SelectedSrc
    //     }
    // });
    // ランダム移動を設定する関数
    function moveRandomly(card) {
        const area = document.querySelector('.tarot_area');
        const areaWidth = area.clientWidth;
        const areaHeight = area.clientHeight;
        let randomY=0;

        // ランダムな位置を計算（カードがはみ出ないように範囲調整）
        const randomX = Math.random() * (areaWidth - card.clientWidth);
        if (window.matchMedia('(max-width: 1000px)').matches) {
            randomY = Math.random() * (areaHeight - card.clientHeight+400);
        } else if (window.matchMedia('(min-width:1001px)').matches) {
            randomY = Math.random() * (areaHeight - card.clientHeight-100);
        }
        

        // ランダムな位置に移動
        card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(0deg)`;

        // スピンしながら移動させるアニメーション
        card.style.transition = "transform 4s ease-in-out";
        setTimeout(() => {
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(360deg)`;
        }, 100); // 少し遅延させて移動を自然に
    }

    
});

    // if (Start) {
    //     Start.addEventListener("click", function() {
    //         const targetElement = document.querySelector('.tarot_card');
    //             tarot_card.addEventListener('animationend', (e) => {
    //                 const animationName = e.animationName;
    //                 switch(animationName){
    //                     case 'fadeIn':
    //                         // 要素が回転するアニメーション付与
    //                         targetElement.classList.add('spin')
    //                         break;
    //                     case 'spin':
    //                         console.log('アニメーション終了')
    //                         break;
    //                 }
    //             });
    //     });
    // }
    // if (Start) {
    //     Start.addEventListener("click", function() {
    //         for(let i=1; i<23; i++){
    //             let TarotCard=document.getElementById(`tarot_card${i}`)
                // TarotCard.animate(
                //     [
                //         { transform: 'translateX(0)'}, // 開始時の状態（左端）
                //         { transform: `translateX(${i*20}px)` } // 終了時の状態（左端から200pxの位置）
                //     ], 
    //                 // タイミングに関する設定
    //                 {
    //                     fill: 'forwards', // 再生前後の状態（再生前、開始時の状態を適用）
    //                     duration: 1000, // 再生時間（1000ミリ秒）
    //                 },
    //             );
    //         }   
    //         if (Start.style.display==="block"){
    //             Start.style.display="none"
    //             Cut.style.display="block"
    //         }
    //     }, false);
    // }




    // if (Start) {
    //     let canvas = document.getElementById("tarot_area");
    //     let ctx = canvas.getContext("2d");
        // for(let i=1; i<23; i++){
        //     let `image${i}` = new Image();
        //     `image${i}`.src = "tarotcard.jpg";
        //     ctx.drawImage(image, 0, 0, 32, 32);
        // }


        // Start.addEventListener("click", shuffle);

        // function shuffle() {
        //     // 画面全体をクリア
        //     ctx.clearRect(0, 0, 640, 480);
        //     list=[]

        //         for(let i=1; i<23; i++){
        //             list.push({
        //                 let Image = new Image();
        //                 Image.src = "tarotcard.jpg";
        //                 ctx.drawImage(Image, 0, 0, 32, 32);

        //                 x:Math.random() * (canvas.width - `image${i}`.width)
        //                 y:Math.random() * (canvas.height - `image${i}`.height)

        //                 rotation: Math.random() * Math.PI * 2,
        //                 speedX: Math.random() * 2 + 1, // X方向の速度
        //                 speedY: Math.random() * 2 + 1, // Y方向の速度
        //                 rotationSpeed: (Math.random() - 0.5) * 0.05 // 回転速度
        //             })
        //         }

            // window.requestAnimationFrame(shuffle);
            // if (Start.style.display==="block"){
            //     Start.style.display="none"
            //     Cut.style.display="block"
            // }
    //     }
    // }
// server.js
    // document.addEventListener("DOMContentLoaded", function () {
        
    //     const nextButton = document.getElementById("next1");
    //     nextButton.addEventListener("click", async function () {
    //         const problem = document.getElementById("problem").value;
    //         localStorage.setItem("problem", problem);

    //         try {
    //             // サーバーAPIにデータを送信
    //             const response = await fetch("http://localhost:3000", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({ query: problem })
    //             });

    //             const data = await response.json();

    //             console.log("サーバーレスポンス:", data);

    //             localStorage.setItem("geminiResponse", data.response); // 結果をlocalStorageに保存
    //             window.location.href = "result.html"; // 結果ページにリダイレクト
    //         } catch (error) {
    //             console.error("エラー:", error);
    //             alert("占い結果を取得できませんでした。");
    //         }
    //     });
    // });

    // document.getElementById("next1").addEventListener("submit", async function(event) {
    //     event.preventDefault(); // デフォルトのフォーム送信を防ぐ
    //     const userInput = document.getElementById("userInput").value;
    
    //     try {
    //         const response = await fetch("http://localhost:5000/process", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({ input: userInput })
    //         });
    
    //         const result = await response.json();
    
    //         // 結果をlocalStorageに保存して次のページに渡す
    //         localStorage.setItem("apiResult", result.data);
    
    //         // 別のページにリダイレクト
    //         // window.location.href = "result.html";
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // });

    // document.getElementById("next1").addEventListener("click", async () => {
    //     let Problem=localStorage.setItem('problem', Problem)
    //     let ResultAlt=localStorage.setItem('selected_card_alt', Result.alt)
    //     // const userInput = document.getElementById("problem").value;
    //     try {
    //         const response = await fetch("http://localhost:5000/api/call-gemini", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({ query: `悩み：${Problem}タロット：${ResultAlt}、この悩みは現在どのような状態で、未来はどうなると示していますか` })
    //         });
            
    //         const data = await response.json();
    //         localStorage.setItem("geminiResponse", data.response);

    //         // 別ページに移動
    //         // window.location.href = "result.html";
    //     } catch (error) {
    //         console.error("エラー:", error);
    //         alert("エラーが発生しました。もう一度お試しください。");
    //     }
    // });

