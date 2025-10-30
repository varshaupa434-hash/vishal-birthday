const msgBtn = document.getElementById('msgBtn');
const birthdayMsg = document.getElementById('birthdayMsg');
const surpriseBtn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

msgBtn.addEventListener('click', () => {
  birthdayMsg.classList.toggle('hidden');
  msgBtn.textContent = birthdayMsg.classList.contains('hidden')
    ? "Show Birthday Message 💌"
    : "Hide Birthday Message 💖";
});

surpriseBtn.addEventListener('click', () => {
  surprise.classList.toggle('hidden');
  surpriseBtn.textContent = "💖 You’re Amazing!";
});
