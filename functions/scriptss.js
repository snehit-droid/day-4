function numerals(oper,arr){
	var par1=50; var par2=50;
	var ret = arr[oper](par1,par2)
	console.log(ret);
}

function add(a,b){
	return a+b;
}

function sub(a,b){
	return a-b;
}

function mul(a,b){
	return a*b;
}

function div(a,b){
	return a/b;
}

let aa = [add,sub,mul,div];
