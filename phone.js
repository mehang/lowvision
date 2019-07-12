$(document).ready(function(){
	$("#contactList").hide();
	$("#addContact").hide();
		
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
	$("#dialerTab").hide();
	$("#contactList").show();
	$("#addContact").hide()
	var nameDisplay = $("#name");
	name.val("");
});