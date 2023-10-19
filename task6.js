//Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
//Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.


//Для сравнения строк можно использовать String.localeCompare() метод.

let users = [
    { name: "John", age: 20},
    { name: "Vlad", age: 35},
    { name: "Julia", age: 19},
    { name: "Anna", age: 20},
    { name: "Been", age: 20}
];

users.sort(function (x, y) {
    // если возраст совпадает, то сортируем по 'name'
    if (x.age === y.age) {
        return x.name.localeCompare(y.name);
    } 
    // сортируем по полю 'age'
    else {
        return x.age - y.age;
    }
});

//  console.log(users);


