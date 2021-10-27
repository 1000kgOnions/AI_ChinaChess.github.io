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
