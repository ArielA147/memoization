function addNumbers()
{
	var val1 = parseInt(document.getElementById("value1").value);
	var val2 = parseInt(document.getElementById("value2").value);
	var res = val1 + val2;
	document.getElementById("answer").innerHTML =val1+" + "+val2+" = "+res;                        
}