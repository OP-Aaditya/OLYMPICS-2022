canvas=
document.getElementById("my_canvas");
ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4 ;
ctx.arc(270, 200, 40, 0, 2*Math.PI);
ctx.stroke();
  
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4 ;
ctx.arc(310, 250, 40, 0, 2*Math.PI);
ctx.stroke();
  
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(360, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4 ;
ctx.arc(400, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4 ;
ctx.arc(445, 200, 40, 0, 2*Math.PI);
ctx.stroke();
