let numSubjects = 0;
const subjects = [];
const results = [];

function enterSubjects(){
    
    
    numSubjects = parseInt(prompt("Enter number of Subjects taken"));
                           
    if(numSubjects >10){
        alert("The maximum number of subjects that can be taken is 10. Please enter a number at or below 10 to be successful.")
    }else{
        document.getElementById("subjects").innerHTML += numSubjects;
        for(i=0; i < numSubjects; i++){
        subjects[i] = prompt("Please enter name of subject " + (i+1));
            hideButtonOne();
        }//for
    
    }//else
}//()
    
    
    function enterMarks(){
        
        for(i= 0; i< subjects.length; i++){
            results[i] = parseFloat(prompt("Please enter your marks for " + subjects[i]));
            
            
            if(results [i] > 100){
                alert("Invalid result. This subject will be marked down as 0, if you wish to change this you will have to start the process again by refreshing the page.");
                results[i] = 0;
            }else{
            
            if (results[i] >= 70.00) {
            document.getElementById("results").innerHTML += "<br/>" + subjects[i] + " = " + results[i] + "<br/>Congratulations! You got an A!!!";
            } else if (results[i] >= 65.00) {
            document.getElementById("results").innerHTML += "<br/>" + subjects[i] + " = " + results[i] + "<br/>Congratulations! You got an A-!!!";
            } else if (results[i] >= 60.00) {
            document.getElementById("results").innerHTML += "<br/>" + subjects[i] + " = " + results[i] + "<br/>Congratulations! You got an B+!!!";
            } else if (results[i] >= 50.00) {
            document.getElementById("results").innerHTML += "<br/>" + subjects[i] + " = " + results[i] + "<br/>Congratulations! You got an B!!!";
            } else if (results[i] >= 45.00) {
            document.getElementById("results").innerHTML += "<br/>" + subjects[i] + " = " + results[i] + "<br/>Congratulations! You got an B-!!!";
            } else if (results[i] >= 40.00) {
            document.getElementById("results").innerHTML += "<br/>" + subjects[i] + " = " + results[i] + "<br/>You passed and got a C!";
            } else {
            document.getElementById("results").innerHTML += "<br/>" + subjects[i] + " = " + results[i] + "<br/>Unfortunately you failed this time, better luck next time.";
                }
            }
        }
        hideButtonTwo();
    }
        
        function hideButtonOne(){
       document.getElementById("button1").style.display = "none";
}
        
        function hideButtonTwo(){
       document.getElementById("button2").style.display = "none";
}
    