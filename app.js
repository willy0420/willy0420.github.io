$(document).ready(

	function(){

	$("#btnGreen").on("click", function(){
		$("body").addClass("green").removeClass("red");
		$("#color").text("綠色");
	});

	$("#btnRed").on("click", function(){
		$("body").addClass("red").removeClass("green");
		$("#color").text("紅色");
	});

	$("#btnC").on("click", function(){
		document.getElementById("box").value = 0;
	})

	$("#btn1").on("click", function(){
		console.log(1);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 1;
		tempNew = document.getElementById("box").value;
		}
	 );

	$("#btn2").on("click", function(){
		console.log(2);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 2;
		tempNew = document.getElementById("box").value;
		}
	 );
	
	$("#btn3").on("click", function(){
		console.log(3);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 3;
		tempNew = document.getElementById("box").value;
		}
	 );

	$("#btn4").on("click", function(){
		console.log(4);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 4;
		tempNew = document.getElementById("box").value;
		}
	 );

	$("#btn5").on("click", function(){
		console.log(5);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 5;
		tempNew = document.getElementById("box").value;
		}
	 );

	$("#btn6").on("click", function(){
		console.log(6);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 6;
		tempNew = document.getElementById("box").value;
		}
	 );

	$("#btn7").on("click", function(){
		console.log(7);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 7;
		tempNew = document.getElementById("box").value;
		}
	 );

	$("#btn8").on("click", function(){
		console.log(8);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 8;
		tempNew = document.getElementById("box").value;
		}
	 );

	$("#btn9").on("click", function(){
		console.log(9);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 9;
		tempNew = document.getElementById("box").value;
		}
	 );

	$("#btn0").on("click", function(){
		console.log(0);
		temp = document.getElementById("box").value;
		document.getElementById("box").value = parseFloat(temp) * 10 + 0;
		tempNew = document.getElementById("box").value;
		}
	 );
	
	$("#btnPlus").on("click", function(){
		Oper = "+";
		console.log("+");
		tempCurrent = document.getElementById("box").value;
		document.getElementById("box").value = 0;
		}
	 );

	$("#btnMinus").on("click", function(){
		Oper = "-";
		console.log("-");
		tempCurrent = document.getElementById("box").value;
		document.getElementById("box").value = 0;
		}
	 );

	$("#btnMultiply").on("click", function(){
		Oper = "*";
		console.log("*");
		tempCurrent = document.getElementById("box").value;
		document.getElementById("box").value = 0;
		}
	 );

	$("#btnDivide").on("click", function(){
		Oper = "/";
		console.log("/");
		tempCurrent = document.getElementById("box").value;
		document.getElementById("box").value = 0;
		}
	 );

	$("#btnEqual").on("click", function(){
		if(Oper == "+") {
			result = parseFloat(tempCurrent) + parseFloat(tempNew);
			document.getElementById("box").value = parseFloat(result);
		}
		else if(Oper == "-") {
			result = parseFloat(tempCurrent) - parseFloat(tempNew);
			document.getElementById("box").value = parseFloat(result);
		}
		else if (Oper == "*") {
			result = parseFloat(tempCurrent) * parseFloat(tempNew);
			document.getElementById("box").value = parseFloat(result);
		}
		else {
			result = parseFloat(tempCurrent)/parseFloat(tempNew);
			document.getElementById("box").value = parseFloat(result);
		}
		}
	 );
});