function show1(){let x;x = document.getElementById('one').value;document.getElementById('screen1').value+=x;}
function show2(){let x;x=document.getElementById("two").value;document.getElementById("screen1").value+=x;}
function show3(){let x;x=document.getElementById("three").value;document.getElementById("screen1").value+=x;}
function show4(){let x;x=document.getElementById("four").value;document.getElementById("screen1").value+=x;}
function show5(){let x;x=document.getElementById("five").value;document.getElementById("screen1").value+=x;}
function show6(){let x;x=document.getElementById("six").value;document.getElementById("screen1").value+=x;}
function show7(){let x;x=document.getElementById("seven").value;document.getElementById("screen1").value+=x;}
function show8(){let x;x=document.getElementById("eight").value;document.getElementById("screen1").value+=x;}
function show9(){let x;x=document.getElementById("nine").value;document.getElementById("screen1").value+=x;}
function show0(){let x;x=document.getElementById("zero").value;document.getElementById("screen1").value+=x;}
function showplus(){let x;x=document.getElementById("plus").value;document.getElementById("screen1").value+=x;}
function showmul(){let x;x=document.getElementById("mul").value;document.getElementById("screen1").value+=x;}
function showsub(){let x;x=document.getElementById("sub").value;document.getElementById("screen1").value+=x;}
function showdiv(){let x;x=document.getElementById("div").value;document.getElementById("screen1").value+=x;}
function dot(){let x;x=document.getElementById("dot").value;document.getElementById("screen1").value+=x;}
function showsqrt(){document.getElementById("screen1").value = Math.sqrt(document.getElementById("screen1").value);}
function showsquare(){document.getElementById("screen1").value = (document.getElementById("screen1").value)*(document.getElementById("screen1").value);}
function showpercent(){document.getElementById("screen1").value =eval(document.getElementById("screen1").value/100);}
function reciprocal(){document.getElementById("screen1").value =eval(1/document.getElementById("screen1").value);}
function changeSign() {
    let p;p=document.getElementById('screen1').value;
 if(p.substring(0, 1) == "-")
 document.getElementById('screen1').value = p.substring(1, p.length)
 else
 document.getElementById('screen1').value = "-" + p
 }

function calc(){
    document.getElementById("screen1").value=eval(document.getElementById("screen1").value);//
}
function c(){
    let x=document.getElementById("screen1").value.length;
    let y= document.getElementById("screen1").value;
    y = y.substring(0,x-1);
    document.getElementById("screen1").value=y;}

function showcos(){document.getElementById("screen1").value = Math.cos(document.getElementById("screen1").value* Math.PI / 180);}
function showsin(){document.getElementById("screen1").value = Math.sin(document.getElementById("screen1").value* Math.PI / 180);}
function showtan(){document.getElementById("screen1").value = Math.tan(document.getElementById("screen1").value* Math.PI / 180);}
function showlog10(){document.getElementById("screen1").value = Math.log10(document.getElementById("screen1").value);}
function showlog(){document.getElementById("screen1").value = Math.log(document.getElementById("screen1").value);}
function showsec(){document.getElementById("screen1").value = 1/ Math.cos(document.getElementById("screen1").value* Math.PI / 180);}
function showcosec(){document.getElementById("screen1").value =1/ Math.sin(document.getElementById("screen1").value* Math.PI / 180);}
function showcot(){document.getElementById("screen1").value = 1/Math.tan(document.getElementById("screen1").value* Math.PI / 180);}

function showpow(){document.getElementById("screen1").value += document.getElementById('pow').value;}  showpie()

function showpie(){let x;x=document.getElementById("pie").value;document.getElementById("screen1").value+=x;}

function showabs(){document.getElementById("screen1").value = Math.abs(document.getElementById("screen1").value );}showmod()

//function showmod(){document.getElementById("screen1").value = Math.sqrt(eval(document.getElementById("screen1").value*document.getElementById("screen1").value) );}

function showmod(){
    let x,y;
    x = document.getElementById('screen1').value;
    y = eval(x);
    document.getElementById('screen1').value = y;

}
function showfact(){
    let x = document.getElementById('screen1').value;
    let y = x-1;
    while(y!=1){
        x = x * y;
        y = y-1;
    }
    document.getElementById('screen1').value = x;

}
function showtenpower(){
    document.getElementById('screen1').value = eval(10**document.getElementById('screen1').value);
}
function showx3(){
    document.getElementById('screen1').value = (document.getElementById('screen1').value*document.getElementById('screen1').value*document.getElementById('screen1').value);
 }
 function show2x(){
     document.getElementById('screen1').value = eval(2**document.getElementById('screen1').value);
 }
 function showbinary(){
    let number = parseInt(document.getElementById('screen1').value);

    // convert to binary
    let result = number.toString(2);
    document.getElementById('screen2').value = result;
}
 
function showhex(){
    let number = parseInt(document.getElementById('screen1').value);

    // convert to binary
    let result = number.toString(16);
    document.getElementById('screen3').value = result;
}
function showoct(){
    let number = parseInt(document.getElementById('screen1').value);

    // convert to binary
    let result = number.toString(8);
    document.getElementById('screen4').value = result;
}
function showand(){
    let x;
    document.getElementById('screen1').value += "&";
}
function showor(){
    let x;
    document.getElementById('screen1').value += "|";
}
function shownot(){
    let x=document.getElementById('screen1').value;
    document.getElementById('screen1').value = "!"+x;
}
function shownand(){
    let x;
    document.getElementById('screen1').value += "&";
}
function shownor(){
    let x;
    document.getElementById('screen1').value += "&";
}
function showxor(){
    let x;
    document.getElementById('screen1').value += "&";
}