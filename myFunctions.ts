function addTwo (num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {

}
let myValue = addTwo(5);
getUpper('radek');
signUpUser('emilia', "emi@wp.pl", true);
loginUser('h', 'h@h.com');

// function getValue(myVal: number): string | boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return '200';
// }

const getHello = (s: string): string => {
    return '';
}

// const heroes = ['thor', 'batman', 'spiderman', 'ironman'];
const heroes = [1, 2, 3, 4];

heroes.map(hero => `hero is ${hero}`);

function consoleError(errmsg: string): void {
    console.log(errmsg);
}
function handleError(errmsg: string): void {
    console.log(errmsg);
}