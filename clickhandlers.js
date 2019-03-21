

var playerOneDown = document.getElementById("p1Down");
var playerTwoDown = document.getElementById("p2Down");
var playerOneUp = document.getElementById("p1UP");
var playerTwoUp = document.getElementById("p2UP");
var playerOneLeft = document.getElementById("p1Left");
var playerTwoLeft = document.getElementById("p2Left");
var playerOneRight = document.getElementById("p1Right");
var playerOneRight = document.getElementById("p2Right");

playerOneDown.onclick = function ()
{
  data.player[0].y--;
  handleWrap();
  draw();

}
playerTwoDown.onlick = function ()
{
  //decrement row
  data.player[1].y--;
  handleWrap();
  draw();

}
playerOneUP.onclick = function ()
{
  //increment row
  data.player[0].y++;
  handleWrap();
  draw();
}
playerTwoUP.onclick = function ()
{
  //increment row
  data.player[1].y++;
  handleWrap();
  draw();
}
playerOneLeft.onclick = function ()
{
  //decrement column
  data.player[0].x--;
  handleWrap();
  draw();
}
playerTwoLeft.onclick = function ()
{
  //decrement column
  data.player[1].x--;
  handleWrap();
  draw();
}
playerOneRight.onclick = function ()
{
  //increment column
  data.player[0].x++;
  handleWrap();
  draw();
}
playerTwoRight.onclick = function ()
{
  //increment column
  data.player[1].x++;
  handleWrap();
  draw();

}
