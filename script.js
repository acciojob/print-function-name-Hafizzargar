//your JS code here. If required.
let x=prompt();

function functionName(){
	// alert(x);
	alert(arguments.callee.name);
}

functionName();

