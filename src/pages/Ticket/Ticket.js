var can=document.getElementById("canva1");
var ctx=can.getContext("2d");
ctx.fillStyle= "#FF99FF";
ctx.fillRect(0, 0, 900, 400);
ctx.beginPath()
ctx.fillStyle = "#330000"
ctx.arc(250, 90, 40, 0, Math.PI*2, true);
ctx.fill();
ctx.font = "25px Arial";
ctx.fillStyle= "#000000";
ctx.fillText("Ticket Registration Agency", 0, 30);
ctx.font = "bold 20px Arial"
ctx.fillText("REGION:", 10, 80);
ctx.fillText("TOWN:", 10, 120);
ctx.fillText("DATE:", 10, 160);
ctx.fillText("TIME:", 150, 160);
ctx.fillText("TICKET FEE:", 10, 240);
ctx.fillText("Number:", 10, 280);
ctx.rotate(-50);
ctx.font = "60px Arial"
ctx.strokeText("PAID", 200, 190)
