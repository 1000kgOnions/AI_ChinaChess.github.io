var AI = AI || {};
// khởi tạo trí tuệ nhân tạo
AI.init = function ()
{
  AI.treeDepth = play.depth;
  var val = AI.getAlphaBeta(
    -99999,
    99999,
    AI.treeDepth,
    com.arr2Clone(play.map),
    play.my
  );
  // console.log("my:",play.my);
  //var val = AI.iterativeSearch(com.arr2Clone(play.map),play.my)
  if (!val || val.value == -8888) {
    AI.treeDepth = 2;
    val = AI.getAlphaBeta(
      -99999,
      99999,
      AI.treeDepth,
      com.arr2Clone(play.map),
      play.my
    );
  }
};



//Hàm lượng giá
AI.evaluate = function (map,my){
	var val=0;
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){

		}
	}
	return val;
}
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