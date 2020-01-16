var currentTicket = 0;

function takeANumber(person){
  line.push(person)
  currentTicket++;
  return "Welcome, " + person + ". You ticket number is " + currentTicket
}

//ticket # instead of line size

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  var ans = line[0]
  line.splice(0,1) //line.shift removes first
  return "Currently serving " + ans + "."
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
    //could add "check empty" func here (and above)
  
  
  var ans = "The line is currently: "
  for (var i=1; i<=line.length;i++){
    ans+= i + ". " + line[i-1]
    if(i != line.length){
      ans+= ", "
    }
  }
  return ans
}

function lineEmpty(){
  if(line.length === 0){
  }
}