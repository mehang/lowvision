var mode=0;
$(document).ready(function(){
	$("#contactList").hide();
	$("#addContact").hide();
	$("#magnifer").hide();	
});

$("#btnAdd").click(function(){
	$("#dialerTab").hide();
	$("#contactList").hide();
	$("#addContact").show();
	$("#magnifer").hide();
});

$("#btnDailer").click(function(){
	$("#dialerTab").show();
	$("#contactList").hide();
	$("#addContact").hide();
	$("#magnifer").hide();
});

$("#btnAbout").click(function(){
	$("#dialerTab").hide();
	$("#contactList").hide();
	$("#addContact").hide();
	$("#magnifer").show();
});
$("#btnContact").click(function(){
	$("#dialerTab").hide();
	$("#contactList").show();
	$("#addContact").hide();
	$("#magnifer").hide();
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
	$("#contactButton").append("<button class='pure-button pure-button-primary contactButton'> <i class='far fa-user-circle'></i>"+ name + " </button>");
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
	if (mode == 0){
		$("body").addClass('my-body');
		$("#mainTabs").addClass("tabButtons2 button");
		$("#vision-control").addClass("tabButtons2 button");
		$("img").addClass('invert-color');
		$("#numberPad").addClass("numberPad2 button");
		$("#addContact").addClass("contact-form-text input");
		$("#main").addClass("mainPanel-highBorders");
		mode = 1
	}
	else{
		$("body").removeClass('my-body');
		$("#mainTabs").removeClass("tabButtons2 button");
		$("img").removeClass('invert-color');
		$("#vision-control").removeClass("tabButtons2 button");
		$("#numberPad").removeClass("numberPad2 button");
		$("#name,#phone,#email").removeClass("contact-form-text");
		$("#main").removeClass("mainPanel-highBorders");
		mode = 0;
	}
});
