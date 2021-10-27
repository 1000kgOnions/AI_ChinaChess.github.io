com.get("normalPlay").addEventListener("click", function (e) {
  if (confirm("Xác nhận bắt đầu trò chơi mức Trung Bình ?")) {
    play.isPlay = true;
    com.get("chessRight").style.display = "none";
    com.get("moveInfo").style.display = "block";
    com.get("moveInfo").innerHTML = "";
    play.depth = 4;
    play.init();
  }
});
com.get("easyPlay").addEventListener("click", function (e) {
  if (confirm("Xác nhận bắt đầu trò chơi mức Dễ？")) {
    play.isPlay = true;
    com.get("chessRight").style.display = "none";
    com.get("moveInfo").style.display = "block";
    com.get("moveInfo").innerHTML = "";
    play.depth = 3;
    play.init();
  }
});
com.get("hardPlay").addEventListener("click", function (e) {
  if (confirm("Xác nhận bắt đầu trò chơi mức Khó？")) {
    play.isPlay = true;
    com.get("chessRight").style.display = "none";
    com.get("moveInfo").style.display = "block";
    com.get("moveInfo").innerHTML = "";
    play.depth = 5;
    play.init();
  }
});