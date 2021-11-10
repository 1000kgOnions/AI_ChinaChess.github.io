var AI = AI || {};
// khởi tạo trí tuệ nhân tạo
AI.init = function (pace)
{
  var bill = AI.historyBill || com.gambit; // Mở thư viện
  if (bill.length) {
    var len = pace.length;
    var arr = [];
    // Tìm kiếm trò chơi trước
    for (var i = 0; i < bill.length; i++) {
      if (bill[i].slice(0, len) == pace) {
        arr.push(bill[i]);
      }
    }
    if (arr.length) {
      var inx = Math.floor(Math.random() * arr.length);
      AI.historyBill = arr;
      return arr[inx].slice(len, len + 4).split("");
    } else {
      AI.historyBill = [];
    }
  }
  AI.treeDepth = play.depth;

};

//Hàm lượng giá
AI.evaluate = function (map,my){
	var val=0;
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){

		}
	}
	return val;
};
// Lấy tất cả các quân trên bảng
AI.getMapAllMan = function (map, my) {
  var mans = [];
  for (var i = 0; i < map.length; i++) {
    for (var n = 0; n < map[i].length; n++) {
      var key = map[i][n];
      if (key && play.mans[key].my == my) {
        play.mans[key].x = n;
        play.mans[key].y = i;
        mans.push(play.mans[key]);
      }
    }
  }
  return mans;
};

// Nhận tất cả các bước di chuyển của quân cờ
AI.getMoves = function (map, my) {
  var manArr = AI.getMapAllMan(map, my);
  var moves = [];
  for (var i = 0; i < manArr.length; i++) {
    var man = manArr[i];
    var val = man.bl(map);

    for (var n = 0; n < val.length; n++) {
      var x = man.x;
      var y = man.y;
      var newX = val[n][0];
      var newY = val[n][1];
      moves.push([x, y, newX, newY, man.key]);
    }
  }
  return moves;
};