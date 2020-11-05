addEventListener("load",app);
function app() {
	class Fortune {
		constructor(fortuneList) {
			this.text = !fortuneList ? "No fortune" : fortuneList[~~(Math.random() * fortuneList.length)];
			this.luckyNumbers = [];
			this.drawLuckyNumbers();
		}
		drawLuckyNumbers() {
			let maxDraws = 6,
				draws = maxDraws,
				maxNumber = 99,
				numberPool = [];

			// create number pool
			while (maxNumber--) {
				numberPool.unshift(maxNumber + 1);
			}
			// draw from pool, populate the lucky numbers
			while (draws--) {
				let drawn = ~~(Math.random() * numberPool.length);
				this.luckyNumbers.push(numberPool[drawn]);
				numberPool.splice(drawn,1);
			}
		}
	}

	var fcBtn = document.querySelector("button")
	
		fortuneText = document.querySelector(".fc-fortune-text"),
		fortuneLuckyNumbers = document.querySelector(".fc-lucky-numbers span"),
		fortuneList = [
			"A fresh start will put you on your way.", "A golden egg of opportunity falls into your lap this month.", "It's a good time to finish up old tasks.", "A lifetime of happiness lies ahead of you.", "Accept something that you cannot change, and you will feel better.", "All the effort you are making will ultimately pay off.", "Allow compassion to guide your decisions.", "Any decision you have to make tomorrow is a good decision.", "Believe in yourself and others will too.", "Believe it can be done.", "Change is happening in your life, so go with the flow!", "Congratulations! You are on your way.", "Dedicate yourself with a calm mind to the task at hand.", "Determination is what you need now.", "Disbelief destroys the magic.", "Do not make extra work for yourself.", "Do not underestimate yourself. Human beings have unlimited potentials.", "Don’t just spend time. Invest it.", "Don’t worry; prosperity will knock on your door soon.", "Education is the ability to meet life’s situations.", "Failure is the chance to do better next time.", "First think of what you want to do; then do what you have to do.", "Follow the middle path. Neither extreme will make you happy.", "Go take a rest; you deserve it.", "Have a beautiful day.", "He who knows he has enough is rich.", "Help! I’m being held prisoner in a chinese bakery!", "Imagination rules the world.", "It is honorable to stand up for what is right, however unpopular it seems.", "It is worth reviewing some old lessons.", "Listen to everyone. Ideas come from everywhere.", "Long life is in store for you.", "Miles are covered one step at a time.", "Never fear! The end of something marks the start of something new.", "Now is a good time to buy stock.", "Now is the time to try something new.", "Physical activity will dramatically improve your outlook today.", "Practice makes perfect.", "Resting well is as important as working hard.", "The harder you work, the luckier you get.", "The sure way to predict the future is to invent it.", "Time and patience are called for many surprises await you!", "Welcome change.", "Well done is better than well said.", "You are almost there.", "You are the master of every situation.", "You have the power to write your own fortune.", "You love chinese food.", "You will be successful in your work.", "Your goal will be reached very soon.", "Your talents will be recognized and suitably rewarded."
		],
		fortune = new Fortune(),

		getFortune = function(){
			fortune = new Fortune(fortuneList);
			fortuneText.innerHTML = fortune.text;
			fortuneLuckyNumbers.innerHTML = fortune.luckyNumbers.join(", ");
		},
		nextState = function(){
			let elClass = this.classList,
				spawned = "spawned",
				opened = "opened";

			// open cookie
			if (elClass.contains(spawned)) {
				elClass.remove(spawned);
				elClass.add(opened);

			// new cookie
			} else {
				elClass.remove(opened);
				elClass.add(spawned);
				getFortune();
			}
		};
	
	getFortune();
	fcBtn.addEventListener("click",nextState);
}
