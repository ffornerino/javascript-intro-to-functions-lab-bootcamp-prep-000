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
  var uppercase = string.toUpperCase()
  var lowercase = string.toLowerCase()
  var iLoveYou  = "I love you, Grandma."
  
  if (string === lowercase){
    console.log("I can't hear you!")

  } else if( string === uppercase ){
    console.log("YES INDEED!")
  } else if (string === iLoveYou) {
    console.log()
  } else
}