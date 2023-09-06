//Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного пользователем пароля. 
//Необходимо анализировать длину пароля, использование различных символов, наличие чисел и букв в разных регистрах. 
//Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.


function assessPasswordStrength(password) {
    // Проверяем длину пароля
    const lengthScore = password.length >= 8 ? 2 : 1;
  
    // Проверяем наличие заглавных букв
    const uppercaseRegex = /[A-Z]/;
    const hasUppercase = uppercaseRegex.test(password) ? 2 : 0;
  
    // Проверяем наличие строчных букв
    const lowercaseRegex = /[a-z]/;
    const hasLowercase = lowercaseRegex.test(password) ? 2 : 0;
  
    // Проверяем наличие цифр
    const digitRegex = /\d/;
    const hasDigit = digitRegex.test(password) ? 2 : 0;
  
    // Проверяем наличие специальных символов
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const hasSpecialChar = specialCharRegex.test(password) ? 2 : 0;
  
    // Вычисляем общий балл сложности
    const totalScore = lengthScore + hasUppercase + hasLowercase + hasDigit + hasSpecialChar;
  
    // Оценка сложности
    let strength = 'Слабый';
    if (totalScore >= 8) {
      strength = 'Средний';
    }
    if (totalScore >= 10) {
      strength = 'Сильный';
    }
  
    return { strength, totalScore };
  }
  
  // Пример использования функции
  const userPassword = "PasSSSS1";
  const assessment = assessPasswordStrength(userPassword);
  //console.log(`Оценка сложности пароля: ${assessment.strength}`);