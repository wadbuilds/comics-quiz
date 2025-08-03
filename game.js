const characters = [

  { name: "Iron Man", fact: "Genius inventor who built his first suit in a cave.", allyOrOpponent: "Opposed Thanos" },
  { name: "Captain America", fact: "Wielded Thor’s hammer and led the final stand against Thanos.", allyOrOpponent: "Ally of Bucky Barnes" },
  { name: "Thor", fact: "Wielded both Stormbreaker and Mjolnir in Endgame.", allyOrOpponent: "Opponent of Hela" },
  { name: "Hulk", fact: "In 'Infinity War', he refused to come out after losing to Thanos in their first fight.", allyOrOpponent: "Ally of Bruce Banner… literally" },
  { name: "Black Widow", fact: "Sacrificed herself for the Soul Stone.", allyOrOpponent: "Ally of Hawkeye" },
  { name: "Hawkeye", fact: "Adopted the Ronin persona during the Blip.", allyOrOpponent: "Ally of Black Widow" },
  { name: "Spider-Man", fact: "This hero balances high school, superhero work, and photography for a news outlet.", allyOrOpponent: "Ally of Iron Man" },
  { name: "Doctor Strange", fact: "Saw over 14 million futures before making his choice.", allyOrOpponent: "Opponent of Dormammu" },
  { name: "Black Panther", fact: "His suit absorbs kinetic energy and can release it as a shockwave during combat.", allyOrOpponent: "Ally of Shuri and Okoye" },
  { name: "Scarlet Witch", fact: "Destroyed the Mind Stone and nearly crushed Thanos.", allyOrOpponent: "Opponent of Agatha Harkness" },
  { name: "Vision", fact: "An android with the Mind Stone in his forehead.", allyOrOpponent: "Ally of Scarlet Witch" },
  { name: "Falcon", fact: "Takes over the Captain America mantle post-Endgame.", allyOrOpponent: "Ally of Captain America" },
  { name: "Winter Soldier", fact: "Former HYDRA assassin turned Avenger.", allyOrOpponent: "Ally of Sam Wilson" },
  { name: "Ant-Man", fact: "Key to the time heist thanks to the quantum realm.", allyOrOpponent: "Ally of the Wasp" },
  { name: "Wasp", fact: "She is the daughter of a brilliant scientist who was lost in the Quantum Realm.", allyOrOpponent: "Ally of Ant-Man" },
  { name: "Captain Marvel", fact: "A former Air Force pilot who gained cosmic powers from an experimental engine explosion.", allyOrOpponent: "Ally of Nick Fury" },
  { name: "Star-Lord", fact: "Helped form the Guardians but almost ruined the Infinity Gauntlet plan.", allyOrOpponent: "Ally of Gamora" },
  { name: "Gamora", fact: "Thanos’s daughter who turned against him.", allyOrOpponent: "Ally of Nebula" },
  { name: "Drax", fact: "Often shirtless, tattooed, and emotionally intense, but secretly sensitive.", allyOrOpponent: "Ally of Rocket" },
  { name: "Groot", fact: "Teenage tree who sacrificed his arm for Stormbreaker.", allyOrOpponent: "Ally of Rocket" },
  { name: "Rocket Raccoon", fact: "The only Guardian to survive the snap.", allyOrOpponent: "Ally of Thor" },
  { name: "Mantis", fact: "Empath who helped sedate Thanos on Titan.", allyOrOpponent: "Ally of Drax" },
  { name: "Nebula", fact: "Reformed villain who killed her past self.", allyOrOpponent: "Ally of Tony Stark" },
  { name: "Pepper Potts", fact: "Had a long-running romantic connection with a genius, billionaire, playboy, philanthropist.", allyOrOpponent: "Ally of Iron Man" },
  { name: "Thanos", fact: "Snapped away half the universe with the Infinity Gauntlet.", allyOrOpponent: "Opponent of literally everyone" },
  { name: "Ebony Maw", fact: "This eerie, soft-spoken follower of a galactic warlord uses telekinesis to deadly effect.", allyOrOpponent: "Ally of Thanos" },
  { name: "Proxima Midnight", fact: "This fierce warrior served a galactic tyrant and wielded a spear charged with cosmic energy.", allyOrOpponent: "Ally of Thanos" },
  { name: "Corvus Glaive", fact: "During the battle in Wakanda, he was ultimately killed when his own weapon was turned against him.", allyOrOpponent: "Ally of Thanos" },
  { name: "Cull Obsidian", fact: "Brute strength member of the Black Order.", allyOrOpponent: "Ally of Thanos" },
  { name: "Red Skull", fact: "Guardian of the Soul Stone on Vormir.", allyOrOpponent: "Former opponent of Captain America" },
  { name: "Korg", fact: "Rock warrior with a chill attitude and love for video games.", allyOrOpponent: "Ally of Thor" },
  { name: "Miek", fact: "Insectoid friend of Korg, quiet but deadly.", allyOrOpponent: "Ally of Thor" },
  { name: "Valkyrie", fact: "Led New Asgard and rode a pegasus into battle.", allyOrOpponent: "Ally of Thor" },
  { name: "Wong", fact: "Became Sorcerer Supreme by default due to his colleague being snapped out of existence.", allyOrOpponent: "Ally of Doctor Strange" },
  { name: "Nick Fury", fact: "Formed the Avengers Initiative.", allyOrOpponent: "Ally of Captain Marvel" },
  { name: "Maria Hill", fact: "Fury’s right-hand agent and S.H.I.E.L.D. operative.", allyOrOpponent: "Ally of Nick Fury" },
  { name: "Shuri", fact: "Wakandan genius who almost removed Vision’s stone.", allyOrOpponent: "Ally of Black Panther" },
  { name: "Okoye", fact: "Fearless Dora Milaje warrior of Wakanda.", allyOrOpponent: "Ally of Black Panther" },
  { name: "M’Baku", fact: "Mountain tribe leader who fought alongside Avengers.", allyOrOpponent: "Ally of T’Challa" },
  { name: "The Ancient One", fact: "Former Sorcerer Supreme who gave up the Time Stone.", allyOrOpponent: "Mentor to Doctor Strange" },
  { name: "Frigga", fact: "Thor’s mother who gave him wisdom in the past.", allyOrOpponent: "Mother of Thor" },
  { name: "Loki (2012)", fact: "Escaped with the Tesseract during the time heist.", allyOrOpponent: "Former opponent of Avengers" },
  { name: "Nebula", fact: "Served Thanos before being stopped by future self.", allyOrOpponent: "Opponent of Avengers" },
  { name: "2014 Thanos", fact: "Alternate timeline version who led final battle.", allyOrOpponent: "Main Endgame villain" },
  { name: "Jarvis", fact: "Tony Stark’s original AI assistant.", allyOrOpponent: "Ally of Iron Man" },
  { name: "War Machine", fact: "Used powerful armor and time traveled with the team.", allyOrOpponent: "Ally of Iron Man" },
  { name: "Superman", fact: "He is an alien from Krypton with heat vision and super strength.", allyOrOpponent: "Ally" },
  { name: "Batman", fact: "This hero has no superpowers but relies on detective skills and technology.", allyOrOpponent: "Ally" },
  { name: "Wonder Woman", fact: "An Amazonian warrior princess with a lasso of truth.", allyOrOpponent: "Ally" },
  { name: "Aquaman", fact: "Rules the underwater kingdom of Atlantis and talks to sea creatures.", allyOrOpponent: "Ally" },
  { name: "Flash", fact: "Known for his incredible speed and ability to time travel.", allyOrOpponent: "Ally" },
  { name: "Green Lantern", fact: "Wields a power ring that can create anything from willpower.", allyOrOpponent: "Ally" },
  { name: "Shazam", fact: "Transforms from a boy into a superhero by saying a magic word.", allyOrOpponent: "Ally" },
  { name: "Hawkman", fact: "Reincarnated warrior who flies with artificial wings and wields a mace.", allyOrOpponent: "Ally" },
  { name: "Hawkgirl", fact: "She is the reincarnation of an ancient Egyptian princess cursed to live multiple lives.", allyOrOpponent: "Ally" },
  { name: "Green Arrow", fact: "A vigilante archer who protects Star City with trick arrows.", allyOrOpponent: "Ally" },
  { name: "Martian Manhunter", fact: "A shape-shifting telepath from Mars and founding Justice League member.", allyOrOpponent: "Ally" },
  { name: "Supergirl", fact: "Lived undercover as Kara Danvers before revealing her powers to the world.", allyOrOpponent: "Ally" },
  { name: "Nightwing", fact: "The original Robin who now fights crime solo in Blüdhaven.", allyOrOpponent: "Ally" },
  { name: "Robin", fact: "The Boy Wonder, Batman’s loyal sidekick and skilled acrobat.", allyOrOpponent: "Ally" },
  { name: "Batgirl", fact: "Daughter of Commissioner Gordon and skilled in martial arts and hacking.", allyOrOpponent: "Ally" },
  { name: "Cyborg", fact: "Half-man, half-machine with advanced tech and a built-in cannon.", allyOrOpponent: "Ally" },
  { name: "Beast Boy", fact: "Can transform into any animal he’s seen before.", allyOrOpponent: "Ally" },
  { name: "Raven", fact: "Daughter of a demon, uses dark magic and empathy powers.", allyOrOpponent: "Ally" },
  { name: "Starfire", fact: "Alien princess who flies and shoots starbolts from her hands.", allyOrOpponent: "Ally" }
];

let currentQuestion = {};
let score = 0;
let totalQuestions = 0;

function getRandomCharacters(correctChar) {
  let options = [correctChar];
  while (options.length < 3) {
    const random = characters[Math.floor(Math.random() * characters.length)];
    if (!options.find(opt => opt.name === random.name)) {
      options.push(random);
    }
  }
  return options.sort(() => Math.random() - 0.5);
}

function newQuestion() {
  document.getElementById("feedback").textContent = "";
  currentQuestion = characters[Math.floor(Math.random() * characters.length)];
  const options = getRandomCharacters(currentQuestion);

  document.getElementById("question").textContent = currentQuestion.fact;

  const buttons = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    buttons[index].textContent = option.name;
    buttons[index].onclick = () => {
      if (option.name === currentQuestion.name) {
        score++;
        document.getElementById("feedback").textContent = "✅ Correct!";
      } else {
        document.getElementById("feedback").textContent = `❌ Wrong! It was ${currentQuestion.name}`;
      }
      totalQuestions++;
      document.getElementById("score").textContent = `Score: ${score}/${totalQuestions}`;
      setTimeout(newQuestion, 2000);
    };
  });
}

window.onload = newQuestion;

const finishBtn = document.getElementById("finishBtn");
const finalScoreContainer = document.getElementById("finalScoreContainer");
const finalScoreText = document.getElementById("finalScoreText");
const finalMessage = document.getElementById("finalMessage");
const gameContainer = document.getElementById("gameContainer");

  function finishGame() {

  let message = "";
  const percentage = totalQuestions === 0 ? 0 : (score / totalQuestions) * 100;

  if (percentage === 100) {
    message = "Perfect! You're the comics encyclopedia!";
  } else if (percentage >= 75) {
    message = "Great job! You really know your heroes and villains.";
  } else if (percentage >= 50) {
    message = "Not bad! But there's room to level up your comic knowledge.";
  } else {
    message = "Keep training, hero — the multiverse is full of surprises!";
  }

  finalScoreText.textContent = `Your Final Score : ${Math.floor(percentage)} %`;

  finalMessage.textContent = message;
  finalScoreContainer.style.display = "block"
  document.getElementById("score").textContent = "Refresh page to restart game!";
  document.getElementById("question").style.display = "none";
  document.getElementById("options-list").style.display = "none";
  document.getElementById("finishBtn").style.display = "none";


};




