
function triangle(val1,type1,val2,type2){

    const ValidTypes = ["leg","hypotenuse","adjacent angle","opposite angle", "angle"];
    const ValidVariants = 
    [
        ["leg", "hypotenuse"],
        ["leg","leg"],
        ["leg","adjacent angle"],
        ["leg","opposite angle"],
        ["hypotenuse","angle"]
    ]

    function degToRad(degAngle){
        return degAngle*(Math.PI/180);
    }

    function radToDeg(radAngle){
        return radAngle*(180/Math.PI);
    }

    function searchArr(){
        for(let i=0;i<=4;i++){
           if(ValidVariants[i][0]===type1 && ValidVariants[i][1]===type2){
            return false;
        }else if(ValidVariants[i][0]===type2 && ValidVariants[i][1]===type1){
            return false;
        }
        }
        return true;
    }

    if(!ValidTypes.includes(type1) || !ValidTypes.includes(type2)|| searchArr()){
        console.log("Будь ласка, перевірте правильність вказаних типів.\n failed");
        return "failed";
    }else if(val1<=0 || val2<=0){
        console.log("Значення не можуть бути від'ємними або нульовими.\n failed");
        return "failed";
    }else if(((type1==="adjacent angle"||type1==="opposite angle"|| type1==="angle")&&val1>=90)|| ((type2==="adjacent angle"||type2==="opposite angle"|| type2==="angle")&&val2>=90)){
        console.log("Задані кути не можуть бути більше 90.\n failed");
        return "failed";
    }else if((type1==="hypotenuse"&&type2==="leg"&&val1<=val2)|| (type2==="hypotenuse"&&type1==="leg"&&val1>=val2)){
        console.log("Катет не може бути більшим за гіпотенузу.\n failed");
        return "failed";
    }else{
        let a,b,c,alpha,beta;

        if(type1=="leg"&&type2=="adjacent angle"){
            a=val1;
            beta=val2;
            alpha=90-beta;
            b=a*Math.tan(degToRad(beta));
            c=Math.sqrt(a*a+b*b);          
        }else if(type1=="leg"&&type2=="opposite angle"){
            a=val1;
            alpha=val2;
            beta=90-alpha;
            b=a*Math.tan(degToRad(beta));
            c=Math.sqrt(a*a+b*b); 
        }else if(type2=="leg"&&type1=="adjacent angle"){
            a=val2;
            beta=val1;
            alpha=90-beta;
            b=a*Math.tan(degToRad(beta));
            c=Math.sqrt(a*a+b*b);    
        }else if(type2=="leg"&&type1=="opposite angle"){
            a=val2;
            alpha=val1;
            beta=90-alpha;
            b=a*Math.tan(degToRad(beta));
            c=Math.sqrt(a*a+b*b); 
        }else if(type1=="leg"&&type2=="leg"){
            a=val1;
            b=val2;
            c=Math.sqrt(a*a+b*b);
            alpha=radToDeg(Math.atan(a/b));
            beta=90-alpha;
        }else if(type1=="hypotenuse"&&type2=="leg"){
            a=val2;
            c=val1;
            b=Math.sqrt(c*c-a*a);
            alpha=radToDeg(Math.atan(a/b));
            beta=90-alpha;
        }else if(type2=="hypotenuse"&&type1=="leg"){
            a=val1;
            c=val2;
            b=Math.sqrt(c*c-a*a);
            alpha=radToDeg(Math.atan(a/b));
            beta=90-alpha;
        }else if(type1=="hypotenuse"&&type2=="angle"){
            c=val1;
            beta=val2;
            alpha=90-beta;
            a=c*Math.sin(degToRad(alpha));
            b=c*Math.sin(degToRad(beta));
        }else if(type2=="hypotenuse"&&type1=="angle"){
            c=val2;
            beta=val1;
            alpha=90-beta;
            a=c*Math.sin(degToRad(alpha));
            b=c*Math.sin(degToRad(beta));
        }

        
        console.log("a="+ a+ "\nb="+b+"\nc="+ c+"\nalpha="+ alpha+"\nbeta="+ beta+"\nsuccess!");
        return("success!");

    }

}


console.log("\n leg --- катет\n hypotenuse --- гіпотенуза\n adjacent angle --- прилеглий до катета кут\n opposite angle --- протилежний до катета кут\n angle --- один з двох гострих кутів(коли задана гіпотенуза)");
console.log("Ввід здійснюємо так:\n  ім'я функції(перший аргумент, тип першого аргументу, другий аргумент, тип другого аргументу)\n Наприклад: triangle(10,angle,13,hypotenuse)");

console.log("********triangle(3,leg,4,leg)")
triangle(3,"leg",4,"leg");
console.log("********triangle(3,leg,60,opposite angle)")
triangle(3,"leg",60,"opposite angle");
console.log("********triangle(-3,leg,60,adjacent angle)")
triangle(-3,"leg",60,"adjacent angle");
console.log("********triangle(3,leg,60,opposite angle)")
triangle(3,"leg",60,"opposite angle");
console.log("********triangle(5,hypotenuse,7,hypotenuse)")
triangle(5,"hypotenuse",7,"hypotenuse");
console.log("********triangle(35,angle,7,hypotenuse)")
triangle(35,"angle",7,"hypotenuse");
console.log("********triangle(110,angle,7,hypotenuse)")
triangle(110,"angle",7,"hypotenuse");
console.log("********triangle(35,leg,7,hypotenuse)")
triangle(35,"leg",7,"hypotenuse");

