window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth-200;
    ctx.strokeStyle = "black";
    let draw = false;
    var erasing = false;
    
    var count=0;
    var xCoords = [];
    var yCoords = [];
    var strokeCount = [];

    
    function startDraw(e){
        draw = true;
        drawing(e);
    }
    function endDraw(){
        draw = false;
        ctx.beginPath();
        strokeCount.push(count);
        count = 0;
        erasing = false;
    }
    function drawing(e){
        if(!draw){
            return;
        };
        xCoords.push(e.clientX);
        yCoords.push(e.clientY);
        if(erasing){
            count--;
        }
        else{
            count++;
        }
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    
    function undo(){
        var currentCount = 0;
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth-200;
        for(var  i = 0; i < strokeCount.length-1; i++){
            for(var j = 0; j < Math.abs(strokeCount[i]); j++){
                if(xCoords[currentCount] == -1 && yCoords[currentCount] == -1){
                    canvas.height = window.innerHeight;
                    canvas.width = window.innerWidth-200;
                    currentCount++;
                }
                else{
                    if(strokeCount[i] < 0){
                        ctx.strokeStyle="white";
                    }
                    else{
                        ctx.strokeStyle="black";
                    }
                    ctx.lineWidth = 10;
                    ctx.lineCap = "round";
                    ctx.lineTo(xCoords[currentCount], yCoords[currentCount])
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(xCoords[currentCount], yCoords[currentCount]);
                    currentCount++;
                }

            }
            ctx.beginPath();
        }
        for(var i = 0; i < Math.abs(strokeCount[strokeCount.length-1]); i++){
            xCoords.pop();
            yCoords.pop();
        }
        strokeCount.pop();
    }

    function clearScreen(){
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth-200;
        xCoords.push(-1);
        yCoords.push(-1);
        strokeCount.push(1);
    }
    
    function drawpen(){
        ctx.strokeStyle="black";
        erasing = false;
    }

    function eraserpen(){
        ctx.strokeStyle="white";
        erasing = true;
    }

    
    canvas.addEventListener("mousedown",startDraw);
    canvas.addEventListener("mouseup",endDraw);
    canvas.addEventListener("mousemove",drawing);
    buttonClear.addEventListener("click",clearScreen)
    buttonDraw.addEventListener("click",drawpen)
    buttonEraser.addEventListener("click",eraserpen);
    buttonUndo.addEventListener("click", undo);
})

