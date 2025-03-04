// script.js

let score = 0;

// Fungsi untuk menghasilkan soal penjumlahan acak
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  const questionText = `Berapakah ${num1} + ${num2}?`;
  document.getElementById("question").textContent = questionText;
  return num1 + num2;
}

// Mulai dengan soal pertama
let correctAnswer = generateQuestion();

// Fungsi untuk memeriksa jawaban
function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const feedback = document.getElementById("feedback");

  // Jika input tidak valid
  if (isNaN(userAnswer)) {
    feedback.textContent = "Masukkan angka yang valid.";
    feedback.style.color = "red";
    return;
  }

  // Periksa jawaban
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Benar! 👍";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = `Salah! Jawaban yang benar adalah ${correctAnswer}.`;
    feedback.style.color = "red";
  }

  // Update skor dan reset untuk soal berikutnya
  document.getElementById("score").textContent = score;
  correctAnswer = generateQuestion();
  document.getElementById("answer").value = ""; // Reset input
}

// Event listener untuk tombol kirim
document.getElementById("submit").addEventListener("click", checkAnswer);

// Event listener untuk tombol Enter
document.getElementById("answer").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});
