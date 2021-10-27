var AI = AI || {};

// khởi tạo trí tuệ nhân tạo
AI.init = function () {


};

AI.evaluate = function (map, my) {
  var val = 0;
  for (var i = 0; i < map.length; i++) {
    for (var n = 0; n < map[i].length; n++) {
      var key = map[i][n];
      if (key) {
        val += play.mans[key].value[i][n] * play.mans[key].my;
      }
    }
  }
  //val+=Math.floor( Math.random() * 10);  // Hãy để AI di chuyển để tăng các yếu tố ngẫu nhiên
  //com.show()
  //z(val*my)
  AI.number++;
  return val * my;
};

// Đánh giá trò chơi để có sự khác biệt giữa các quân cờ
AI.evaluate1 = function (map, my) {
  var val = 0;
  for (var i in play.mans) {
    var man = play.mans[i];
    if (man.isShow) {
      val += man.value[man.y][man.x] * man.my;
    }
  }
  //val+=Math.floor( Math.random() * 10);  // Hãy để AI di chuyển để tăng các yếu tố ngẫu nhiên
  //com.show()
  //z(val*my)
  AI.number++;
  return val * my;
};
