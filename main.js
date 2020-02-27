//userObj.firstName="Hello";
//userObj.lastName="Javascript";

console.log(`${userObj.firstName}${userObj.lastName}`);

console.log(fullName);

console.log(userObj.firstName);//Nahid

let tempUserObj = userObj;//Copy Reference

console.log(tempUserObj.firstName);//Nahid

tempUserObj.firstName = "Hello";
tempUserObj.lastName = "Javascript";

console.log(tempUserObj.firstName);//Hello

console.log(userObj.firstName);//Hello

userObj.demo();