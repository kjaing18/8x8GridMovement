

var player_one_down = document.querySelector("p1_down");
var player_two_down = document.querySelector("p2_down");
var player_one_up = document.querySelector("p1_up");
var player_two_up = document.querySelector("p2_up");
var player_one_left = document.querySelector("p1_left");
var player_two_left = document.querySelector("p2_left");
var player_one_right = document.querySelector("p1_right");
var player_one_right = document.querySelector("p2_right");

player_one_down.onclick = function ()
{
  data.player[0].y --;
  handleWrap();
  draw();

}
player_two_down.onlick = function ()
{
  //decrement row
  data.player[1].y --;
  handleWrap();
  draw();

}
player_one_up.onclick = function ()
{
  //increment row
  data.player[0].y ++;
  handleWrap();
  draw();
}
player_two_up.onclick = function ()
{
  //increment row
  data.player[1].y ++;
  handleWrap();
  draw();
}
player_one_left.onclick = function ()
{
  //decrement column
  data.player[0].x --;
  handleWrap();
  draw();
}
player_two_left.onclick = function ()
{
  //decrement column
  data.player[1].x --;
  handleWrap();
  draw();
}
player_one_right.onclick = function ()
{
  //increment column
  data.player[0].x ++;
  handleWrap();
  draw();
}
player_two_right.onclick = function ()
{
  //increment column
  data.player[1].x ++;
  handleWrap();
  draw();

}
