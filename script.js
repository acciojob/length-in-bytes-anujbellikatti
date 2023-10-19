const byteSize = (str) => {
  // write your code here
	let x = str.split("");
	if(x[0]>="a" && x[0]<="z"){
		return x.length
	}else{
		return x.length*5;
	}
};

// Do not change the code below
// const str = prompt("Enter some string.");
// alert(byteSize(str));
