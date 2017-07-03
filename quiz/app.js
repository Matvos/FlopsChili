//Create Questions
var questions = [
    new Question("Peppers are believed to be one of the first plants to have been domesticated, how old are the chili pepper seeds that have been found in Peru and Mexico?", ["Over 6000 years","800 years"], "Over 6000 years"),
    new Question("Witch part of the pepper usually has the highest concentration of capsaicin.", ["Closest to the tip","Closest to the stem"], "Closest to the stem"),
    new Question("Birds are completely immune to its effects?", ["True","False"], "True"),
	new Question("African farmers attach chillies to fences to keep elephants away from their crops. Elephants hate the smell of chillies.", ["False","True"], "True"),
    new Question("Chili peppers have more vitamin C than lemons.", ["True","False"], "True"),
    new Question("how many varieties of chillies exist?", ["Nearly 100","Nearly 400"], "Nearly 400"),
    new Question("Which country is the largest producer of chillies?", ["Mexico","India"], "India"),
    new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["chillies","42"], "42")


];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();