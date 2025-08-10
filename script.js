// logic of tic_tac_toe game

const gameboxes = document.querySelectorAll(".gamebox");
const resetBtn = document.getElementById("reset");
const msg = document.getElementById("msg");
const msgContainer = document.querySelector(".msg-container");
const newGameBtn = document.getElementById("new_game");

let turno = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function disableBoxes() {
  gameboxes.forEach(box => box.disabled = true);
}

function enableBoxes() {
  gameboxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
  });
}

function showWinner(winner) {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    const valA = gameboxes[a].innerText;
    const valB = gameboxes[b].innerText;
    const valC = gameboxes[c].innerText;

    if (valA !== "" && valA === valB && valB === valC) {
      showWinner(valA);
      return true;
    }
  }
  return false;
}

function handleClick(e) {
  if (e.target.innerText !== "") return;

  e.target.innerText = turno ? "O" : "X";
  e.target.disabled = true;

  if (!checkWinner()) {
    turno = !turno;
  }
}

function resetGame() {
  turno = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

gameboxes.forEach(box => box.addEventListener("click", handleClick));
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

// logic of a chatbot 
function sendMessage() {
  var chatContainer = document.querySelector(".chat-container");
  var input = document.getElementById("message-input");
  var userText = input.value.trim();

  if (userText === "") return;

  chatContainer.classList.add("active");


  showMessage("You", userText, "user");

  setTimeout(function () {
    var reply = getBotReply(userText);
    showMessage("CodeMate", reply, "bot");
  }, 2000);


  input.value = "";
}

function getBotReply(message) {
  message = message.toLowerCase();

  if (message === "hi" || message === "hello") return "Hi! How can I help you?";

  if (message.includes("name") || message.includes("what is your name") || message.includes("whats your name"))
    return "I’m CodeMate, your virtual buddy!";

  if (message.includes("how are you"))
    return "I’m doing great, thanks for asking! How about you?";

  if (message.includes("bye"))
    return "Goodbye! Take care!";

  if (message.includes("thanks") || message.includes("thank you"))
    return "You're welcome!";

  if (message.includes("what can you do") || message.includes("help"))
    return "I can answer your questions, tell jokes, share facts, and help you with this website.";

  if (message.includes("joke"))
    return "Why don’t skeletons fight each other? Because they don’t have the guts!";

  if (message.includes("who created you") || message.includes("your creator") || message.include("what is your creator name?"))
    return "I was created by a Muskan Bashir to make your experience better!";

  if (message.includes("time") || message.includes("tell me the current time"))
    return `The current time is ${new Date().toLocaleTimeString()}.`;
  if (message.includes("tic tac toe rules")) return "Tic-Tac-Toe is played on a 3x3 grid. Players take turns placing X or O. The first to get 3 in a row wins!";
  if (message.includes("how to play tic tac toe")) return "Click on an empty square to make your move. Try to block your opponent and create a line of three!";
  if (message.includes("tic tac toe tips")) return "Start from the center for the best chance to win. Always watch your opponent’s moves!";
  
  return "Sorry, I don’t understand that yet.";
}

function showMessage(sender, message, type) {
  var chatBox = document.getElementById("chat-box");
  var newMessage = document.createElement("div");
  newMessage.className = "message " + type;

  if (type === "user") {
    newMessage.innerHTML = "<i class='fas fa-user'></i><strong> " + sender + ":</strong> " + message;
  } else {
    newMessage.innerHTML = "<strong>" + sender + ":</strong> " + message;
  }

  chatBox.appendChild(newMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}



