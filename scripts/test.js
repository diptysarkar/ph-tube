const isVerified = "false";

//if(isVerified == true){
//    console.log("user is verified");
//}
//else{
//    console.log("user is not verified")
//}

//console.log(
//   `${isVerified === true ? "user is verified" : 
//   "user is not verified" }`
//);

function getTimeStruing(time){
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const min = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
     return `${hour} hour ${min} min ${remainingSecond} second ago`;
}

console.log(getTimeStruing(67859))

