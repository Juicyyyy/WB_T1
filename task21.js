//Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

let callDepth = 0;

function recursiveFunction() {
  callDepth++;
  recursiveFunction();
}

try {
  recursiveFunction();
} catch (error) {
  //console.log(`Глубина стека вызовов: ${callDepth}`); //13930 в яндекс браузере, 13936 в Chrome
}