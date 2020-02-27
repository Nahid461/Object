let fullName ="Nahid Fatima";

let userObj ={

    //Public Property
    firstName: undefined,
    lastName: undefined,

    //Public Function
    demo:function(){
        console.log(`${this.firstName} ${this.lastName}`);

    }


};

userObj.firstName="Nahid";
userObj.lastName="Ansari";

console.log(`${userObj.firstName} ${userObj.lastName}`);