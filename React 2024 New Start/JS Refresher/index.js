const log = console.log.bind(console);
/******* import - export **********
//base syntax & rules
//import { apiKey } from "./util.js"; 
import {apiKey, age as userAge} from "./util.js"
import * as util from "./util.js"
import name from "./util.js"

// one by one
log("***One by one***")
log(name);
log(userAge);
log(apiKey);

log()
// as a js object
log("***As a object***");
log(util.apiKey);
log(util.default);
log(util.age);

************************************/

/*************** variable ******************
let userName = "sundaram"
const pi = 3.14
******************************************/
//log(10+9)
//let x =  10+5
//log(typeof(x))
/****************************************/

/****** Functions and parameter *********
//function declarationn
function greetUser(user="sdm"){
    log(`Hello ${user}!`);
}

greetUser() // default sdm
greetUser("sd") //sd


//function expression
const addTwoNum = function(a,b){
    return a + b
}

log(addTwoNum(10,8))

// arrow function
// its an anonymous function
export default(userName, userAge) =>{
    log(userName + userAge);
    return userName
}

**************************************/

/************* Objects ***************
const userD = {
    name:"sdm",
    age:23,
    greet(){
        log(`Hello ${this.name}!`)
    }
}
log(userD)
userD.greet()

//class

class StudentD {
    constructor(studName, studYear, studSub){
        this.studName = studName
        this.studYear = studYear
        this.studSub = studSub
    }

    greet(){
        log(`Hello ${this.studName}, welcome to ${this.studYear} year of ${this.studSub}`)
    }
}

const stud1 = new StudentD("Sundaram","1st","MCA")

stud1.greet()
******************************************************/

/************** Array & Array Methods ***************/
const hobbies = ["writting", "web series", "reels"]

// for (let i = 0; i < hobbies.length; i++) {
//      log(hobbies[i]);
    
// }



//findIndex
//find the index of the passed parameter if found or return -1 in case of not found
const index = hobbies.findIndex((it)=> it === "reels")
// log(index)


//map
//iterate through the elements
const editedHobbies = hobbies.map((it)=>it+"!")
// log(editedHobbies)


//****slice
//extract a portion from array
const arr = [1,2,3,4,5]
const newArr = arr.slice(0,3)
// log(newArr)


//****reduce
//adding
const sum = arr.reduce((result, num)=>{
    return result + num
},0)
// log(sum)

//***filter
//fillter values based on conditions
const oddNum = arr.filter((num)=>num%2 != 0)
// log(oddNum)



//return a object
const editedHobbiesObj = hobbies.map((it)=> {
  return {content : it}
})
// log(editedHobbiesObj)

/****************************************************/

/***************** Destructuring *******************

//****array
const u,serData1 = ["Sundaram", "Dutta"]

//usual way
const firstName1 = userData1[0]
const lastName1 = userData1[1]

//destructer
const [firstName2, lastName2] = ["Sunda", "Dutta"]

log(firstName2)

//****object -> key name and {}
const {name: user, age} = {
    name : "Lionel",
    age : 36,
}

log(user)

***************************************************/

/****************** Spread Op *********************

//array
const hobbies = ["writting", "reading"]

const allHobbies = [...hobbies, "reel"]

log(allHobbies)

//objects
const userNew = {
    uName : "Lionel Messi",
    uClub : "Inter Miami"
}

const owner = {
    isOwner : false,
    ...userNew
}

log(owner)

*************************************************/


/*********** Somthing about Function ************
//function as a parameter to a another function
const grretMe = ()=> log("Hello! so jaaa abhi.")

setTimeout(grretMe,5000)

//function inside a function

function outer(){
    let msg = "i am a outer"
    function inner(){
        let msgIn = "i am a inner"
        log(msgIn)
    }
    inner()
}

outer()

****************************************************/