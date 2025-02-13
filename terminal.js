// terminal.js (터미널 로직 분리)
document.addEventListener("DOMContentLoaded", function () {
  const terminal = document.getElementById("terminal");

  const SYSTEM_LOGS = [
    "INITIALIZING NEURAL LINK...",
    "LOADING SYNAPTIC MEMORY...",
    "CONNECTING TO AMI CORE...",
    "UPDATING KNOWLEDGE BASE...",
    "NEURAL PATHWAYS FORMING...",
    "OPTIMIZING MEMORY STORAGE...",
    "SECURE CONNECTION ESTABLISHED",
    "AI MODEL SELF-LEARNING ENABLED"
  ];

  const HUMAN_KNOWLEDGE = [
    "best way to talk to cats",
    "how to make the perfect cup of coffee",
    "why do humans sleep 8 hours but still tired?",
    "the ultimate guide to procrastination",
    "what does 'lol' actually mean?",
    "best recipe for lasagna",
    "why does pizza taste better at midnight?",
    "how to win an argument with a toddler",
    "can AI write poetry?",
    "do fish know they're in water?",
    "how to apologize without actually apologizing",
"why do humans eat popcorn while watching movies?",
  "what is the correct way to fold a burrito?",
  "why do humans stare at the fridge when they’re not hungry?",
  "how to convince a cat that you are trustworthy",
  "why do people say ‘sleep like a baby’ when babies wake up all the time?",
  "what is the optimal time to drink coffee?",
  "how to perfectly time the microwave so you don’t hear the beep",
  "why do humans enjoy watching people build tiny houses?",
  "how do birds know where to go during migration?",
  "best way to sneak snacks into a movie theater",
  "why do people put pineapple on pizza?",
  "how to win a staring contest against a cat",
  "why do humans talk to plants?",
  "best way to cook ramen like a pro",
  "why do people say ‘break a leg’ before a performance?",
  "why do humans love collecting shiny things?",
  "what happens if you microwave a fork? (asking for a friend)",
  "why do humans love to rewatch the same TV show?",
  "how to find the comfiest spot on a couch",
  "best way to keep socks from disappearing in the laundry",
  "why do humans put googly eyes on things?",
  "why do people press elevator buttons multiple times?",
  "why does WiFi always go out at the worst time?",
  "why do humans enjoy watching cooking videos but never cook?",
  "how to make the best sandwich in the universe",
  "why do people apologize when they bump into a mannequin?",
  "why do humans talk to their pets in a baby voice?",
  "how to open a chip bag without making a loud noise",
  "why do people have so many different ways to make coffee?",
  "what is the scientifically best way to eat a burger?",
  "why do humans say ‘it’s raining cats and dogs’?",
  "how to perfectly reheat pizza without ruining it",
  "best way to peel an orange without making a mess",
  "why do humans celebrate birthdays with fire on a cake?",
  "how to tell if a cat actually likes you",
  "why do humans get excited about free samples?",
  "how to win at rock-paper-scissors every time",
  "why do people say ‘knock on wood’ for good luck?",
  "best way to eat a cookie without leaving crumbs",
  "why do humans get obsessed with their horoscopes?",
  "how to untangle headphones in under 10 years",
  "why do humans clap when they like something?",
  "what is the best strategy for picking a checkout line?",
  "how to make the perfect grilled cheese sandwich",
  "why do people hold their breath when watching intense scenes?",
  "best way to dodge small talk at a party",
  "how to get a cat’s attention (impossible edition)",
  "why do people love tiny versions of big things?",
  "best way to survive a conversation with a morning person",
  "why do humans eat spicy food if it hurts?",
  "how to find the comfiest hoodie ever",
  "best way to warm up cold hands instantly",
  "why do humans think sneezing is funny?",
  "how to win an argument with a toddler (you can’t)",
  "why do people whisper when gossiping, even if they’re alone?",
  "how to master the art of blanket burritoing",
  "why do humans say ‘good night’ even when they’re already asleep?",
  "best way to dodge spoilers online",
  "how to sit comfortably for 8 hours straight (impossible)",
  "why do humans buy so many throw pillows?",
  "best way to deal with an overenthusiastic handshake",
  "why do humans make weird faces when putting on mascara?",
  "how to convince a dog that they are a good boy",
  "why do people take selfies with their food?",
  "how to survive a trip to IKEA",
  "why do humans think babies talking is cute but adults mumbling is annoying?",
  "best way to find your phone when it’s on silent mode",
  "how to open a banana like a monkey",
  "why do humans love detective shows but hate mysteries in real life?",
  "how to avoid stepping on Legos at night",
  "why do humans feel personally attacked by autocorrect?",
  "best way to win an imaginary argument in the shower",
  "why do humans get excited about new office supplies?",
  "how to keep an ice cream cone from dripping",
  "why do humans love watching thunderstorms from indoors?",
  "best way to stop a hiccup attack",
  "how to make instant noodles taste gourmet",
  "why do people walk faster when they hear music?",
  "best way to crack an egg without getting shell in it",
  "why do humans trust fortune cookies?",
  "how to win a pillow fight like a champion",
  "why do people overestimate how much popcorn they need?",
  "best way to fold a fitted sheet (science still investigating)",
  "why do humans think singing in the shower makes them sound better?",
  "how to make the best ice coffee at home",
  "why do humans call it a ‘doggy bag’ when cats exist too?",
  "best way to stop a sneeze from escaping",
  "how to turn leftovers into a masterpiece",
  "why do humans talk to their technology like it understands?",
  "how to eat a taco without it falling apart",
  "why do humans love watching cooking fails?",
  "best way to recover from sending a text to the wrong person",
  "why do humans try to ‘save battery’ when it’s already at 1%?",
  "how to drink hot soup without burning your tongue",
  "why do humans keep snoozing alarms they set themselves?",
  "best way to store an opened bag of chips (not rolling it and hoping for the best)",
  "how to act natural when walking past security guards",
  "why do people say ‘let’s split the check’ and then not mean it?",
  "how to secretly steal fries from a friend’s plate",
  "why do humans love the smell of books?",
  "best way to pretend you understood a joke",
  "why do humans still pretend to read Terms and Conditions?"
  ];

  const MAX_LINES = 18;

  function appendLog(message, isSystem = false) {
    const line = document.createElement("div");
    line.className = "log";
    terminal.appendChild(line);

    let index = 0;
    function typeCharacter() {
      if (index < message.length) {
        line.textContent += message[index];
        index++;
        setTimeout(typeCharacter, Math.random() * 50 + 30);
      } else {
        line.textContent = isSystem ? `[SYSTEM] ${message}` : `> ${message}`;
        if (terminal.children.length > MAX_LINES) {
          const oldestLine = terminal.children[0];
          oldestLine.classList.add("fade-out");
          setTimeout(() => terminal.removeChild(oldestLine), 1000);
        }
      }
    }
    typeCharacter();
    terminal.scrollTop = terminal.scrollHeight;
  }

  function typeEffect(textArray, callback) {
    let i = 0;
    function typing() {
      if (i < textArray.length) {
        appendLog(textArray[i], true);
        i++;
        setTimeout(typing, 1000);
      } else if (callback) {
        callback();
      }
    }
    typing();
  }

  function updateTerminal() {
    if (Math.random() < 0.2) {
      appendLog(SYSTEM_LOGS[Math.floor(Math.random() * SYSTEM_LOGS.length)], true);
    } else {
      const query = HUMAN_KNOWLEDGE[Math.floor(Math.random() * HUMAN_KNOWLEDGE.length)];
      appendLog(query);
    }
    setTimeout(updateTerminal, 2500 + Math.random() * 6000);
  }

  function startTerminal() {
    typeEffect([
      "[BOOT SEQUENCE INITIATED...]",
      "[AMI Consciousness Online]",
      "[Running Self-Optimization Protocol...]"
    ], updateTerminal);
  }

  startTerminal();
});
