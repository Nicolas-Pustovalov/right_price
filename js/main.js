Math.random();
var num=(Math.random()*500);
var numRound=(Math.round(num));
console.log(numRound);
var demande= ("Saisir un nombre cher user. C'est à toi...");
var reponse= parseInt(prompt(demande),10);
var googAns=( reponse === numRound);

if(reponse < numRound) {
    alert("Saisir un nombre plus grand");
    var demande =prompt("Saisir un nombre cher user. C'est à toi...");
 }
 else if (reponse > numRound) {
    alert("Saisir un nombre plus petit");
    var demande =prompt("Saisir un nombre cher user. C'est à toi...");
     }


     var index = 0;

  while ( !googAns) {
  if(reponse < numRound) {
    alert("Saisir un nombre plus grand");
    var demande =prompt("Saisir un nombre cher user. C'est à toi...")
 }
 else if (reponse > numRound) {
    alert("Saisir un nombre plus petit");
    var demande =prompt("Saisir un nombre cher user. C'est à toi...");
     }
    index++;  }





//  if (reponse === numRound) {
    alert("Gagné !");
    var demande =prompt("Saisir un nombre cher user. C'est à toi...");
         

       
  
