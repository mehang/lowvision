$(document).ready(function(){
	$("#contactList").hide();
	$("#addContact").hide();
	;	
});

$("#btnAdd").click(function(){
	$("#dialerTab").hide();
	$("#contactList").hide();
	$("#addContact").show();
	
});

$("#btnDailer").click(function(){
	$("#dialerTab").show();
	$("#contactList").hide();
	$("#addContact").hide();
	
});
$("#btnContact").click(function(){
	$("#dialerTab").hide();
	$("#contactList").show();
	$("#addContact").hide();
	$("#contactAdd").text("");
	//contactListGenerated();
	
});

$(".dialButton").click(function(){
	var dialDisplay = $("#display");
	var number = $(this).text();
	dialDisplay.val(dialDisplay.val() + number);
});

$("#Clear").click(function(){
	$("#display").val("");
});

$("#Clear2").click(function(){
	$(".my-input").val("");
	//$("#email").val("");
	//$("#phone").val("");
	
});
$("#Dial1").click(function(){
	var name  = $("#name").val();
	$("#contactButton").append("<button class='pure-button pure-button-primary contactButton'>"+ name + " </button>");
	$("#dialerTab").hide();
	$("#contactList").show();
	$("#addContact").hide();
	$(".my-input").val("");
	$("#contactAdd").text("Contact Added!");
});
function generateContactButton(){
	
	//$("#contactButton").append("<button class='pure-button contactButton'>"+ value.name + " </button>")
}
function contactListGenerated (){
	
}


$("#btnIncFont").click(function(){
	var fontSize = parseInt($("#main").css("font-size"));
	var fontSize2 = parseInt($(".tabButtons").css("font-size"))
	fontSize = fontSize + 1 + "px";
	fontSize2 = fontSize2 + 1 + "px";
	$("#main").css({'font-size':fontSize});
	$(".tabButtons").css({'font-size':fontSize2});
});

$("#btnDecFont").click(function(){
	var fontSize = parseInt($("#main").css("font-size"));
	var fontSize2 = parseInt($(".tabButtons").css("font-size"))
	console.log(fontSize);
	fontSize = fontSize - 1 + "px";
	fontSize2 = fontSize2 - 1 + "px";
	$("#main").css({'font-size':fontSize});
	$(".tabButtons").css({'font-size':fontSize2});
});

$("#btnContrast").click(function(){
	$("body").addClass('my-body');
	$(".pure-button").css('background-color:#FFFFFF');
	
	
});
