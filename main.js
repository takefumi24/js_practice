window.addEventListener("load", function () {
  let btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    console.log("Hello world");
  });


  let btn2 = document.querySelector("#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click", function () {
    changeText.innerHTML = "変更されました"
  });
});
