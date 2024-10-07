//3 
let url = prompt("please insert your url")
let mainUrl = url.startsWith("http://") || url.startsWith("http://")
if (mainUrl) {
    console.log("you are here")
}else{
    console.log("Invalid url")
}
//5
let username = prompt("please input your username")
if (5 <= username.length) {
    console.log("input your password")
}else{
    console.log("kindly re_enter the password")
}
//6
let firstName = prompt("input your firstname").trim().toUpperCase()
let ActualName = firstName.charAt(0).toLowerCase().concat(firstName.slice(1))
console.log(ActualName)
//7
let fileType = prompt("kindly input your file").trim()
if(fileType.endsWith("jpg")){
console.log("JPG file")
}else if(fileType.endsWith("jpeg")) {
console.log("JPEG file")
}else if(fileType..endsWith("mp3")) {
console.log(fileType..endsWith("MP3 file"))
}else if(fileType..endsWith("MP4")) {
console.log("MP4 file")
}else if(fileType..endsWith("svg")) {
console.log("SVG file")
} else if(fileType.endsWith("png")) {
console.log("Unsupported file type")
}
//8
let phoneNo = prompt("input your phoneNo").trim()
let phoneNum = phoneNum.length === 11 && phoneNo.chartAt(0) === 0
if(phoneNum) {
console.log("proceed")
}else {
console.log("invaild phone Number")
} 
console.log(phoneNum)
//9
let word = prompt("insert your word")
let replaceword = word.replaceAll("bad","nul").replaceAll("spam","wrong")
console.log(replaceword)
//10
let score = prompt("input your score")
if (75 <= score && <= 100) {
console.log("A")
}else if(60 <= score && score <= 75) {
console.log("B")
}else if(50 <= score && score < 60) {
console.log("c")
}else if (score < 50) {
console.log("retake exam")
} else {
    console.log("invaild score")
}
