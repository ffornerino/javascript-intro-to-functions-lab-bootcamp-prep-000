function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
   var uppercase = string.toUpperCase()
   console.log(uppercase)
}
 

function logWhisper(string){
  var lowercase = string.toLowerCase()
  return console.log(lowercase)
}

function sayHiToGrandma(string){
 /* var uppercase = string.toUpperCase()
  var lowercase = string.toLowerCase()
  var iLoveYou  = "I love you, Grandma."*/
  
  if (string === string.toLowerCase){
    return console.log("I can't hear you!")
  } else if(string === string.toUpperCase){
    return console.log("YES INDEED!")
  } else if (string === "") {
    return console.log("I love you, too.")
  } 
}