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
// Nhấp vào tướng, trong hai trường hợp, chọn hoặc ăn
play.clickMan = function (key, x, y) {
  var man = com.mans[key];
  //an quan
  if (
    play.nowManKey &&
    play.nowManKey != key &&
    man.my != com.mans[play.nowManKey].my
  ) {
    //manCho các miếng được ăn
    if (play.indexOfPs(com.mans[play.nowManKey].ps, [x, y])) {
      man.isShow = false;
      var pace = com.mans[play.nowManKey].x + "" + com.mans[play.nowManKey].y;
      //z(bill.createMove(play.map,man.x,man.y,x,y))
      delete play.map[com.mans[play.nowManKey].y][com.mans[play.nowManKey].x];
      play.map[y][x] = play.nowManKey;
      com.showPane(
        com.mans[play.nowManKey].x,
        com.mans[play.nowManKey].y,
        x,
        y
      );
      com.mans[play.nowManKey].x = x;
      com.mans[play.nowManKey].y = y;
      com.mans[play.nowManKey].alpha = 1;

      play.pace.push(pace + x + y);
      play.nowManKey = false;
      com.pane.isShow = false;
      com.dot.dots = [];
      com.show();
      com.get("clickAudio").play();
      setTimeout("play.AIPlay()", 500);
      if (key == "j0") play.showWin(-1);
      if (key == "J0") play.showWin(1);
    }
    // kiểm tra tướng
  } else {
    if (man.my === 1) {
      if (com.mans[play.nowManKey]) com.mans[play.nowManKey].alpha = 1;
      man.alpha = 0.6;
      com.pane.isShow = false;
      play.nowManKey = key;
      com.mans[key].ps = com.mans[key].bl(); // Nhận tất cả các điểm bạn có thể
      com.dot.dots = com.mans[key].ps;
      com.show();
      //com.get("selectAudio").start(0);
      com.get("selectAudio").play();
    }
  }
};

// Nhấp vào điểm
play.clickPoint = function (x, y) {
  var key = play.nowManKey;
  var man = com.mans[key];
  if (play.nowManKey) {
    if (play.indexOfPs(com.mans[key].ps, [x, y])) {
      var pace = man.x + "" + man.y;
      //z(bill.createMove(play.map,man.x,man.y,x,y))
      delete play.map[man.y][man.x];
      play.map[y][x] = key;
      com.showPane(man.x, man.y, x, y);
      man.x = x;
      man.y = y;
      man.alpha = 1;
      play.pace.push(pace + x + y);
      play.nowManKey = false;
      com.dot.dots = [];
      com.show();
      com.get("clickAudio").play();
      setTimeout("play.AIPlay()", 500);
    } else {
      //alert("Không thể đi theo cách này!")
    }
  }
};
