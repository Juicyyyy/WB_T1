// Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
// 1024 сообщения
// 12 сообщений
// 1 сообщение
// 1024 пользователя
// 1026 пользователей
// 121 пользователь



export function num_word(value, words){  
    // получаю остаток от деления на 100
    let newValue = Math.abs(value) % 100; 
    // остаток от деления этого числа на 10
    let num = newValue % 10;
    // с помощью условий нахожу нужную падежную форму
    if(newValue > 10 && newValue < 20) return value + ' ' + words[2]; 
    if(num > 1 && num < 5) return  value + ' ' + words[1];
    if(num == 1) return value + ' ' + words[0]; 
    return value + ' ' + words[2];
}

// console.log(num_word(505, ['сообщение', 'сообщения', 'сообщений']));
// console.log(num_word(265, ['пользователь', 'пользователя', 'пользователей'])); 

