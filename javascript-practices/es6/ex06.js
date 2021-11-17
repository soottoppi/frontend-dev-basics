/**
 *
 * 6. 구조 분해
 */

// ex1 - basic
const user = {
    firstName: "둘",
    lastName: "리",
    email: "dooly@gmail.com",
};

// let firstName = user.firstName;
// let lastName = user.lastName;
({ firstName, lastName } = user);

console.log(user);
