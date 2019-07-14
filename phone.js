$(document).ready(function(){
	$("#contactList").hide();
	$("#addContact").hide();
	
	$.getJSON('contactList.json'),function(data){
		var items = []
		$.each(data,function(key,val){
			$("#contactButton").append("<button class='pure-button dialButton'>"+ val.name + " </button>");
		});
	}	
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
	var contact = {};
	var contactList  = new Array();
	contact.name = "Arun Sanjel";
	contact.phone = 9063693028;
	contact.email = "arun_sanjel1@baylor.edu";
	contactList.push(contact)
	//console.log(contactList);
	contact = {};
	contact.name = "Sumit";
	contact.phone = 123123123;
	contact.email = "asb@gami.com";
	contactList.push(contact); 
	localStorage.setItem('contactList',JSON.stringify(contactList));
	console.log(JSON.parse(localStorage.getItem('contactList')));
	contactList = JSON.parse(localStorage.getItem('contactList'));
	console.log(contactList.pop());
	
}
