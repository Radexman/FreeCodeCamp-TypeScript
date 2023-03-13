"use strict";
exports.__esModule = true;
var score = '33';
score = 44;
score = '55';
var radek = {
    name: 'Radek',
    id: 3
};
radek = { username: 'rs', id: 3333 };
// function getDbId(id: number | string) {
//     console.log(`Db id is: ${id}`);
// }
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
var data = [1, 2, 3, 4];
var dataTwo = ['1', '2', '3', '4'];
