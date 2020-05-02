const unfollow = function () {
  console.log("フォローを外しました");
}

const cancelTweet = function () {
  console.log("ツイートをキャンセルしました");
}

function confirmed(fn) {
  if (window.confirm("実行しますか？")) {
    fn();
  }
}

confirmed(function () {
  console.log("フォローを外しました");
});
