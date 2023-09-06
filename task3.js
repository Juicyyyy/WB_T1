//3 Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:

//вычисление N-го числа в ряду Фибоначчи 
//следующее число получается как сумма двух предыдущих, то есть 1, 1, 2, 3, 5, 8, 13, 21 ...
//Данный способо намного быстрее рекурсии и не требует повторных вычислений.
function fibonacci(n) {
    // запишу значения первых двух чисел в переменные 
    let a = 1;
    let b = 1;
    //с помощью цикла начну вычислять последующие значения, начиная с 3, так как первые два уже обозначили
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    console.log(n + '-е число в ряду Фибоначчи ' + b);
}

// fibonacci(3);
// fibonacci(7);

// второй способ через мемоизацию
// Теперь функция fib имеет через замыкание доступ к объекту cache. Если её вызывают с аргументом, который ранее не встречался, 
// вычисленное значение сохраняется в cache. При новых вызовах функции с тем же аргументом значение не придётся вычислять заново, 
// оно будет просто взято из кэша. 

const oldFib = n => {
    if(n <= 1) {
      return n;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
}
  
const memoize = f => {
    const cache = {};
    return arg => cache[arg] || (cache[arg] = f(arg));
}
  
const fib = memoize(oldFib);

//console.log(fib(3));
//console.log(fib(7));

//вычисление всех чисел в ряду Фибоначчи до числа N

const fibonacci_row = function (n) {
  if (n === 1) {
    return [0, 1];
  }  else  {
    let s = fibonacci_row(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

//console.log(fibonacci_row(7));


//вычисление N-го простого числа
//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//Последовательность простых чисел начинается так: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37...

function simple(n) {
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}

//console.log(simple(7));


//вычисление всех простых чисел до числа N

function simpleList(n) {
  let list = [];
   for (let i = 2; i <= n; i++)
     if (simple(i)) list.push(i);
  return list;
}

//console.log(simpleList(7));


