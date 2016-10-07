$(document).ready(function() { 
	// bind 'myForm' and provide a simple callback function 
	$('#myForm').ajaxForm(function() { 
		alert("Thank you for your comment!"); 
	}); 
});

//$('#myForm').ajaxForm({
//url : "https://slack.com/api/chat.postMessage", // or whatever
//        dataType : "json",
//        success : function (response) {
//            alert("The server says: " + response);
//        }
//    })
//;