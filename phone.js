
$(document).ready(function(){
	$("#contactList").hide();
	$("#addContact").hide();
	
	$.getJSON('https://github.com/sanjelarun/assignment1/blob/master/contactList.json',function(data){
		$.each(data,function(key,val){
			$("#contactButton").append("<button class='pure-button contactButton'>"+ val.name + " </button>");
		});
	});	
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
	contactListGenerated();
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
function generateContactButton(){

}
function contactListGenerated (){
	//console.log(JSON.parse(localStorage.getItem('contactList')));
	contactList = JSON.parse(localStorage.getItem('contactList'));
	//console.log(contactList.pop());
	$.each(contactList,function(key,value){
		console.log(value.name);
		$("#contactButton").append("<button class='pure-button contactButton'>"+ value.name + " </button>");
	});
	
}
