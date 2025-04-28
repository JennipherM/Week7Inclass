//gets elements by their ids; gets all the values from the input boxes
let userName = document.getElementById("name").value;
let age = document.getElementById("age").value;
let email = document.getElementById("email").value;

//gets elements by their ids
let addButton = document.getElementById("addQueue")
let displayButton = document.getElementById("displayQueue")
let message = document.getElementById("message")

let queue =  {};


//runs when addButton is clicked
addButton.onclick = function (e){

    //checks if the fields have values 
    if (userName == "" || age == null || email == "")
    {
        //changes the text to red
        message.style.color = "red";
        //inserts text into the div paragraph 
        message.innerText =  "All fields should be filled";        
    }
    //runs if all the fields are filled
    else{
        person.addPerson(userName, age, email);
    }

//creates a function constructor 
function person(name, age, email){
    this.name = name;
    this.age = age;
    this.email= email;
}
//adds a method to add someone to the queue
person.prototype.addPerson = function(){

    
    const person = new person(this.name,this.age, this.email);
    queue[i] = person;
}
}
//runs when displayButton is clicked
document.getElementById("displayQueue").onclick = function (e){

    for(let x in queue)
    {
        message.innerText = `${userName} -- ${age} -- ${email}`
    }
    
}