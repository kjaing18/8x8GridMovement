var x;
for (x = 0; x < 8; x++) { 

    for(var y = 0; y < 8; y++){
     var div =  document.createElement("div");
     div.id = "cell-" + x + "-" + y;
     div.className = "background-tile";
     var container = document.getElementById("container");
    container.appendChild(div);

    }
  
}