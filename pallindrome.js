let str = "naman";
let bag = "";
for(i=str.length;i>=0;i--){
   bag+=str[i];
}if (str==bag){
	console.log("Palindrome");
else console.log("Not palindrome");