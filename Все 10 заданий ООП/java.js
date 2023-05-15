//I
// class Employee { 
//     name; 
//     age; 
//     salary; 
//     power(){ 
//         return `boom`
//     } 

// }

//II
// let monstr = new Employee 
// monstr.name = `monstr `
// monstr.age = `3000`
// monstr.salary = `0 ` 
 
// let oblom = new Employee 
// oblom.name = `oblom`
// oblom.age = `100 `
// oblom.salary = `228666` 
 
// let chel = new Employee 
// chel.name = `chel` 
// chel.age = `1734815 `
// chel.salary = `1336 `

// document.write( monstr.name, " ", monstr.age, " ", monstr.salary) 
// let sum =  +chel.salary +  +oblom.salary +  +monstr.salary + `Psi blades `
// console.log(sum) 
// console.log(monstr.power())

//III
// class Employee{
//     show(name, salary){
//         return name + ` ` + salary
//     }
// }
// let user = new Employee;
// console.log(user.show(`monstr`, `236 `))

//IV
// class Employee{
//     show(){
//         console.log(this.name)
//         console.log(this.salari)
//     }
// }
// let user = new Employee;
// user.name = `monstr`;
// user.salari = `236 `;
// user.show()

//V
// class User {
// 	show() {
// 		return this.cape(this.name);
// 	}	
// 	cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let user = new User
// user.name = `monstr`
// console.log(user.show())

//VI
// class Student{
//     names(){
//         return this.cape(this.name);
//     }
//     surns(){
//         return this.cape(this.surn);
//     }
//     cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
//     ins()
// }

//VII
// let user = new Student;
// user.name = `monstr`;
// user.surn = `VanGok1`;
// console.log(user.names())
// console.log(user.surns())

//VIII
// class Student{
//     names(){
//         return this.cape(this.name);
//     }
//     surns(){
//         return this.cape(this.surn);
//     }
//     cape(str) {
// 		return str[0].toUpperCase();
// 	}
// }
// let user = new Student;
// user.name = `monstr`;
// user.surn = `VanGok1`;
// console.log(user.names() + user.surns())

//IX
// class Student{
//     name = 'monstr';
//     surn = `lol`;
//     names(){
//         return this.cape(this.name);
//     }
//     surns(){
//         return this.cape(this.surn);
//     }
//     cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let user = new Student;
// console.log(user.names())
// console.log(user.surns())

//X
// class Employee{
//     constructor(){
//         console.log(`Пётр Перлов`)
//     }
// }
// new Employee;