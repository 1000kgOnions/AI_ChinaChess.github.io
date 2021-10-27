var play = play || {};

play.init = function () {
  play.my = 1; // người chơi
  play.map = com.arr2Clone(com.initMap); // Khởi tạo bảng
  play.nowManKey = false; // play sẽ vận hành ngay bây giờ
  play.pace = []; // Ghi lại từng bước
  play.isPlay = true; // Bạn có thể chơi cờ tướng không?
  play.mans = com.mans;
  play.bylaw = com.bylaw;
  play.show = com.show;
  play.showPane = com.showPane;
  play.isOffensive = true; // Cho dù đó là lần đầu tiên
  play.depth = play.depth || 3; // Độ sâu tìm kiếm
  play.isFoul = false; // Bạn có phạm lỗi
  com.pane.isShow = false; // Ẩn hộp

  // Khởi tạo quân cờ
  for (var i = 0; i < play.map.length; i++) {
    for (var n = 0; n < play.map[i].length; n++) {
      var key = play.map[i][n];
      if (key) {
        com.mans[key].x = n;
        com.mans[key].y = i;
        com.mans[key].isShow = true;
      }
    }
  }
  play.show();

  //Sự kiện nhấp chuột
  com.canvas.addEventListener("click", play.clickCanvas);

  com.get("regretBn").addEventListener("click", function (e) {
    play.regret();
  });
};
// Bấm vào bảng sự kiện
play.clickCanvas = function (e) {
  if (!play.isPlay) return false;
  var key = play.getClickMan(e);
  var point = play.getClickPoint(e);

  var x = point.x;
  var y = point.y;

  if (key) {
    play.clickMan(key, x, y);
  } else {
    play.clickPoint(x, y);
  }
  play.isFoul = play.checkFoul(); // Kiểm tra xem nó có lâu không
};
