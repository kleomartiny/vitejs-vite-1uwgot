import './style.css';
document.getElementById('b1').addEventListener('click', () => {
const inputText = document.getElementById('text').value.trim().toUpperCase();
  if (!/^[A-Z]+$/.test(inputText)) {
      alert("Пожалуйста, введите строку, состоящую только из латинских букв в верхнем регистре.");
      return;
  }
let encodedText = ''; 
let count = 1; 
  for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === inputText[i + 1]) {
          count++;
      } else {
          encodedText += (count > 1 ? count : '') + inputText[i];
          count = 1; 
      }
  }
  document.getElementById('result').textContent = "Результат: " + encodedText;
});
document.getElementById('b2').addEventListener('click', () => {
  const resultText = document.getElementById('result').textContent.replace("Результат: ", ""); 
  navigator.clipboard.writeText(resultText).then(() => {
      alert('Результат скопирован в буфер обмена');
  }).catch(err => {
      alert('Не удалось скопировать текст: ' + err);
  });
});
