var str="";
for(var i=1;i<10;i++){
	str= " ";
	for(var j=1;j<=i;j++){
		str = str +i+"*"+j+"="+j*i+"  ";
	}
	console.log(str);
}