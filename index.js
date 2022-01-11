// 1. Даны два массива - [1, 2, 3] и [4, 5, 6]. Объедините их вместе (concat)

const arrOne1 = [1, 2, 3];
const arrOne2 = [4, 5, 6];

const arrOne3 = arrOne1.concat(arrOne2);
console.log(arrOne3); 

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] (reverse).

const arrTwo = [1, 2, 3];
arrTwo.reverse();
console.log(arrTwo);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6

const arrThree = [1, 2, 3];
arrThree.push(4, 5, 6);
console.log(arrThree);

//4. Дан массив [1, 2, 3]. Добавьте ему в начало 7, 8, 9.

const arrFour = [1, 2, 3];
arrFour.unshift(7, 8, 9);
console.log(arrFour);

// 5. Дан массив ['aaa', 'bbb', 'ccc']. Выведите на экран первый элемент и удалите его.

const arrFive = ['aaa', 'bbb', 'ccc'];
const removed = arrFive.shift();
console.log(removed);

// 6. Дан массив ['ddd', 'fff', 'eee']. Выведите последний элемент на экран.

const arrSix = ['ddd', 'fff', 'eee'];
console.log(arrSix[arrSix.length - 1]);

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы с третьего по пятый.

const arrSeven = [1, 2, 3, 4, 5];
console.log(arrSeven.slice(2));

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы со второго по четвертый.

const arrEight = [1, 2, 3, 4, 5];
console.log(arrEight.slice(1, 4));

// 9. С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 4, 5]

const arrNine = [1, 2, 3, 4, 5];
const arrNineSpliced = arrNine.splice(1, 2);

console.log(arrNine);

// 10. С помощью метода splice из массива [1, 2, 3, 4, 5] запишите в новый массив элементы [2, 3, 4].

const arrTen = [1, 2, 3, 4, 5];
const arrTenSpliced = arrTen.splice(1, 3);

console.log(arrTenSpliced);

// 11. С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 'w', 'tr', 2, 3, 4, 'vv', 5, 'a']

const arrEleven = [1, 2, 3, 4, 5];
arrEleven.splice(1, 0, 'w', 'tr');
arrEleven.splice(6, 0, 'vv');
arrEleven.splice(8, 0, 'a');

console.log(arrEleven);

// 12. Дан массив [5, 8, 2, 4, 7, 1]. Отсортируйте его по возрастанию.

const arr12 =  [5, 8, 2, 4, 7, 1];
console.log(arr12.sort());
