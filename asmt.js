
function check(){
    var num = document.getElementById("pri").value;
    var numb = num[0];
    var count = 0;
    for(i=0;i<=numb;i++){
        var a =numb%i;
        if(a==0){
            count+=1;
        }
    }
    if(count==2){
        document.getElementById("number").innerHTML = "Prime Number";
        document.getElementById("number").style.color = "blue";
    }
    else{
        document.getElementById("number").innerHTML = "Not Prime number";
        document.getElementById("number").style.color = "blue";
    }
}


function myStar(){
    var num = document.getElementById("star").value;
    var i, j;
    
    for(i=1;i<=num;i++){
        
        for(j=1;j<=i;j++){
          document.write('*');  
        } 
        document.write('<br/>');
    }
}


function forOf(){
        var str =[];
        var string = document.getElementById("for").value;

        for(var i=0;i<string.length;i++){
            str+=string[i];
            document.write(str);
            document.write("<br>");
        } 
}


function find(){
    var str = document.getElementById("most").value;
    var str1 = str.split(" ");
    var maxCount = 0,i,j,mf=str1[0];
    for(i=0;i<str1.length;i++){
        var count = 1;
        for(j=i+1;j<str1.length;j++){
            if(str1[i] == str1[j]){
            count++;
            }
        }
    
        if(maxCount<count){
            maxCount = count;
            mf = str1[i];
        }
    }
    document.getElementById("p2").innerHTML = mf+" "+"("+maxCount+" "+"times)";
    document.getElementById("p2").style.color = "blue";
}


function convert(){
    var se = document.getElementById("t2").value;
    var sen = se.toUpperCase().split(" ");
    var sentence;
    for(var i=0;i<sen.length;i++){
        sen[i] = sen[i][0].toLowerCase() + sen[i].substring(1);
    }

    sentence = sen.join(" ");
    document.getElementById("p3").innerHTML = sentence;
    document.getElementById("p3").style.color = "blue";
}



function odd(){
    var num1 = document.getElementById("t3").value;
    var num2 = document.getElementById("t4").value;
    if(num1>num2){
        document.getElementById("p7").innerHTML = num1 +" " + "is larger";
        document.getElementById("p7").style.color = "blue";
    }
    else{
        document.getElementById("p7").innerHTML = num2 +" " + "is larger";
        document.getElementById("p7").style.color = "blue";
    }
}




function trun(){
    var str = document.getElementById("t5").value;
    var num = document.getElementById("t6").value;
    str1 = str.substring(0, num);
    document.getElementById("p6").innerHTML = str1;
    document.getElementById("p6").style.color = "blue";
}





function findSum(){
    var number =[];
    number = document.getElementById("t7").value;
    var sum = 0,i=number.length;
    while(i--)
    sum+=Math.pow(number[i],2);
    document.getElementById("p12").innerHTML = "Sum"+" = "+sum;
    document.getElementById("p12").style.color = "blue";
}



function odd(){
    var num = [];
    num = document.getElementById("t8").value;
    var number = num.split(" ");
    for(var i=0;i<=15;i++){
        if(i ===0){
            document.write( i+" "+"is even  number");
        }
        else if(i%2==0){
            document.write(i+" "+"is even  number");
        }
        else{
            document.write( i+" "+"is odd  number");
        }
        document.write("</br>");
    }
}



function alpha(){
    var tx = document.getElementById("t10").value;
    var text = tx.split(" ");
    for(var i = 0;i<text.length;i++){
        for(var j = i+1;j<text.length;j++){
            if(text[i]>text[j]){
                var temp = text[i];
                text[i] = text[j];
                text[j] = temp;
            }
        }
    }
    var text1 = text.join(" ");
    document.getElementById("p10").innerHTML = text1;
    document.getElementById("p10").style.color = "blue";
}