function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function student(marks){
  var marks=100
  if(marks<=90){
    console.log("A")
  }
  else if(marks<=80){
     console.log("B")
  }
  else if(marks<=60){
      console.log("c")
  }
  else if(marks<=45){
      console.log("D")
  }
  else if(marks<=30){
      console.log("E")
  }
  else{
          console.log("the student missing marks")
  }
}
student()