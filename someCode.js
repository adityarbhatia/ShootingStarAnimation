var xPos = 0;
var yPos = 400;
var radi = 2;
var sunColor1 = 240;
var sunColor2 = 230;
var sunColor3 = 45;
draw = function() {
    background(29, 40, 115);
    
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    if(yPos<300)
    {
        background(77, 36, 224);
        fill(sunColor1, sunColor2, sunColor3);
        ellipse(xPos+10, yPos+10, radi, radi);
    }
    
    if(yPos < 250)
    {
        background(77, 36, 224);
        fill(sunColor1, sunColor2, sunColor3);
        ellipse(xPos+10, yPos+10, radi, radi);
        
        //Second Star
        fill(sunColor1, sunColor2, sunColor3);
        ellipse(xPos+20, 250, radi, radi);
    }
    
    if(yPos < 200)
    {
        background(77, 36, 224);
        fill(sunColor1, sunColor2, sunColor3);
        ellipse(xPos+10, yPos+10, radi, radi);
        
        //Second Star
        fill(sunColor1, sunColor2, sunColor3);
        ellipse(xPos+20, 250, radi, radi);
        
        //Third Star
        fill(200-sunColor1, 150-sunColor2, 100-sunColor3);
        ellipse(xPos+40, 400-yPos, radi, radi);
        
    }
    
    sunColor1 +=1;
    sunColor2 -= 1;
    sunColor3 -= 1;
    radi ++;
    xPos++;
    yPos--;
};
