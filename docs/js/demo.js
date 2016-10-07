﻿var g_api_url = "https://slack.com/api/";
var g_api_bot_token = "xoxb-88531198406-MvDzRsRO3KeID6gBLryXU4sY";
var g_default_channel_id = "C2LFCAD7W";

//$(document).ready(
//	function() 
//	{ 
		// bind 'myForm' and provide a simple callback function 
//); 

function post(path, params, method)
{	
	method = method || "post";
	
	var form = document.createElement("form");
	form.setAttribute("method", method);
	form.setAttribute("action", path);
	form.setAttribute("id", "Test");
	form.setAttribute("accept-charset", "UTF-8");
	
	for (var key in params)
	{
		if (params.hasOwnProperty(key))
		{
			var hidden_field = document.createElement("input");
			hidden_field.setAttribute("type", "hidden");
			hidden_field.setAttribute("name", key);
			hidden_field.setAttribute("value", params[key]);
			
			form.appendChild(hidden_field);
		}
	}
	
	document.body.appendChild(form);
	form.submit();
}

function go_slack(func, params)
{
	post(g_api_url + func, params);
}

function talk(message)
{
	var params = 
	{ 
		token:g_api_bot_token, 
		channel:g_default_channel_id, 
		text:message, 
		pretty:"1" 
	};

	go_slack("chat.postMessage", params);
}

function main()
{	
	//talk("測試測試測試講講話");	
}
        // wait for the DOM to be loaded 


//$('#myForm').ajaxForm
//(
//	{
//		//url: 'myscript.php', // or whatever
//		dataType : 'json',
//		success : function (response) 
//		{
//			alert("The server says: " + response);
//		}
//	}
//);
