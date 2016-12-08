$(document).ready(function(){

	$("#input1").click(function toggle_visibility(e){
		$("#scholarshipprogram").removeClass("black grey");
		$("#loanprogram").removeClass("black grey");
		$("#K-12").removeClass("black grey");
		$("#highschool").removeClass("black grey");
		var e = document.getElementById("form1");
			if(e.style.display == 'block')
				e.style.display = 'none';
			else
				e.style.display = 'block';
	});

	$("#input2").click(function toggle_visibility(e){
		$("#scholarshipprogram").removeClass("black grey");
		$("#loanprogram").removeClass("black grey");
		$("#K-12").removeClass("black grey");
		$("#highschool").removeClass("black grey");
		var e = document.getElementById("form2");
			if(e.style.display == 'block')
				e.style.display = 'none';
			else
				e.style.display = 'block';
	});

	//$("#scholarshipprogram").click(function(){
		//var classname = $("scholarshipprogram").classList();
		//console.log(classname);
	//});


	$(function(){
		var hits = 1; //->variable
	// Everything below this line is called "binding" a handler to an event (click event)
    	$("#scholarshipprogram").click(function(){ // --> This whole function is the handler or listener
			console.log("click");
			if  (hits % 2 !== 0) { // for hits 2,4,6,8
				$("#scholarshipprogram").addClass("black");
				$("#scholarshipprogram").removeClass("grey");
				$("#search1").append("scholarshipprogram");
			}
			else { // for hits 1,3,5,7
				$("#scholarshipprogram").addClass("grey");
				$("#scholarshipprogram").removeClass("black");
				$("#search1").empty();
			}
			hits++;
			return false;
		});
	});

	$(function(){
		var hits = 1; //->variable
	// Everything below this line is called "binding" a handler to an event (click event)
    	$("#loanprogram").click(function(){ // --> This whole function is the handler or listener
			console.log("click");
			if  (hits % 2 !== 0) { // for hits 2,4,6,8
				$("#loanprogram").addClass("black");
				$("#loanprogram").removeClass("grey");
				$("#search2").append("loanprogram");
			}
			else { // for hits 1,3,5,7
				$("#loanprogram").addClass("grey");
				$("#loanprogram").removeClass("black");
				$("#search2").empty();
			}
			hits++;
			return false;
		});
	});

	$(function(){
		var hits = 1; //->variable
	// Everything below this line is called "binding" a handler to an event (click event)
    	$("#K-12").click(function(){ // --> This whole function is the handler or listener
			console.log("click");
			if  (hits % 2 !== 0) { // for hits 2,4,6,8
				$("#K-12").addClass("black");
				$("#K-12").removeClass("grey");
				$("#search3").append("K-12");
			}
			else { // for hits 1,3,5,7
				$("#K-12").addClass("grey");
				$("#K-12").removeClass("black");
				$("#search3").empty();
			}
			hits++;
			return false;
		});
	});

	$(function(){
		var hits = 1; //->variable
	// Everything below this line is called "binding" a handler to an event (click event)
    	$("#highschool").click(function(){ // --> This whole function is the handler or listener
			console.log("click");
			if  (hits % 2 !== 0) { // for hits 2,4,6,8
				$("#highschool").addClass("black");
				$("#highschool").removeClass("grey");
				$("#search4").append("highschool");
			}
			else { // for hits 1,3,5,7
				$("#highschool").addClass("grey");
				$("#highschool").removeClass("black");
				$("#search4").empty();
			}
			hits++;
			return false;
		});
	});

	$(".search").click(function(){
		var search1 = $("#search1").text();
		var search2 = $("#search2").text();
		var search3 = $("#search3").text();
		var search4 = $("#search4").text();
		console.log(search1);
		console.log(search2);
		console.log(search3);
		console.log(search4);
		$("#form1").hide().removeClass("black grey");
		$("#form2").hide().removeClass("black grey");
		if(search1 == "scholarshipprogram"){
			console.log("yes");
			$(".media1").removeClass("aci-fade").addClass("aci-color");
		}
		else {
			console.log("no");
		}
		if(search2 == "loanprogram"){
			$(".media2").removeClass("afe-fade").addClass("afe-color");
			$(".media3").removeClass("acm-fade").addClass("acm-color");
		}
		else{

		}
		if(search3 == "K-12"){
			$(".media1").removeClass("aci-fade").addClass("aci-color");
		}
		else{

		}
	
		if(search4 == "highschool"){
			$(".media3").removeClass("acm-fade").addClass("acm-color");
			$(".media2").removeClass("afe-fade").addClass("afe-color");
		}
		else{

		}
	});





});