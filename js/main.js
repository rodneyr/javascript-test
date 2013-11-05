//alert("Hello");
//run code once the page has loaded
$( document ).ready(function() {
	//alert ("hi");
	//change the foots bg color
	$("#footer").css("background-color","#00ff00");
	//clink link to hide h1 tags
	$("#btremove").click(function(){
		$("#main h1").hide("slow");
	
	});
});