// 6. Functions

// Функция - блок кода, который можно выполнять многократно

// let a = 5
// let b = 3
// let c

// c = a + b
// console.log(c) // 8

// a = 8
// b = 12

// c = a + b
// console.log(c) // 20

// Example: 

// let a = 5
// let b = 3

// function sum(a, b) {
// 	const c = a + b
// 	console.log(c)
// }

// sum(a, b) // 8

// a = 8
// b = 12

// sum(a, b) // 20

// Функция может быть - ... именованной, присвоена переменной, анонимной,
// аргументом при вызове другой функции, значением свойства (метода) объекта

// Функция - это объект

// function myFn(a, b) {
// 	let c
// 	a = a + 1
// 	c = a + b
// 	return c
// }

// Функция возвращает undefined если нет инструкции return
// Функция всегда возвращает значение

// Вызов Функции

// function myFn (a, b) - параметры функции {
// 	let c
// 	a = a + 1
// 	c = a + b
// 	return c
// }

// вызов функции - myFn(10, 3) - аргументы функции  // 14

// Передача значения по ссылке

// const personOne = {
// 	name: 'Bob', 
// 	age: 21
// }

// function increasePersonAge(person) {
// 	person.age += 1
// 	return person
// }

// increasePersonAge(personOne)
// console.log(personOne.age) // 22

// !!!Внутри функции не рекомендуется мутировать внешние объекты

// const personOne = {
// 	name: 'Bob', 
// 	age: 21
// }

// function increasePersonAge(person) {
// const updatedPerson = Object.assign({}, person)
// updatedPerson.age += 1
// return person
// }

// const updatedPersonOne = increasePersonAge(personOne)
// console.log(personOne.age) // 21
// console.log(updatedPersonOne.age) // 22

//  Callback function

// function printMyName () {
// 	console.log('vova')
// }

// setTimeout(printMyName, 2000)

// 7. Область видимости

// Глобальные переменные vs локальные переменные

// Example 1: 

// let a
// let b

// function myFn() {
// 	let b
// 	a = true
// 	b = 10
// 	console.log(b) 
// }

// myFn()

// console.log(a)
// console.log(b)

// Цепочка областей видимости:

// const a = 5

// function myFn() {
// 	function innerFn() {
// 		console.log(a)
// 	}
// 	innerFn()
// }

// myFn()

//  Жизненный цикл переменных:

// let a
// let b

// function myFn() {
// 	let b
// 	a = true 
// 	b = 10
// 	console.log(b)
// }

// myFn()

// console.log(a)
// console.log(b)

// Типы областей видимости:

// Глобальная, обл. вид. функции, обл. вид. блока

// Строгий режим: use strict

// 'use strict'

// function myFn() {
// 	a = true
// 	console.log(a)
// }

// myFn()
// console.log(a)

// 8. Операторы

// Оператор - это встроенная функция

// Арифметические - +, -, *, /

// Сравнения - ===, !==, <=, >=

// Логические - !, &&, ||

// Присваивания - "="

// Текстовые операторы:

// typeof, instanceof, new, delete

// let a, b

// a = 10
// b = a

// let c = a + b

// console.log(c) // 20

// Оператор присваивания:

// a = 10

// function = (переменная, выражение) {
// 	1. получение результата выражения
// 	2. поиск переменной по имени
// 	3. присваивание результата выражения переменной
// 	4. возврат результата выражения
// }

// Операнды находятся слева и справа (а = 10)

// Унарные операторы:

// а++, +а, delete obj.a, typeof a, new Object()

// Бинарные операторы(у них всегда два операнда(аргумента)):

// a = 5, a + b, a += 5, a === b, a && b

// Формат записи операторов:

// Инфиксная запись

// a = true, a + b, a += 5, a || b, a > b

// Префиксная запись

// ++a, delete obj.a, typeof a

// Постфиксная запись

// a++, myFunction()

// Приоритетность операторов

// a + b * c / d - e

// a + ((b * c) / (d - e))

// (((a + b) * c) / d) - e

// Логические операторы

// ! - не (всегда возвращает значение типа boolean)

// && - и (возвращает значение одного из операндов)

// || - или (возвращает значение одного из операндов)

// Ложные значения

// Boolean(value)

// false, 0, '', undefined, null

// Boolean

// Boolean('')

// Практика с typeof

typeof 10;

typeof undefined;

typeof 'Bogdan';

typeof false;

typeof 10 === 'number';

let isUndefined;

typeof isUndefined === 'undefined';