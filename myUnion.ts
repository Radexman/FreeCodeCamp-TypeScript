let score: number | string = '33';
score = 44;
score = '55';

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let radek: User | Admin = {
    name: 'Radek',
    id: 3,
}

radek = {username: 'rs', id: 3333};

// function getDbId(id: number | string) {
//     console.log(`Db id is: ${id}`);
// }

function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}

const data: number[] = [1, 2, 3, 4];
const dataTwo: string[] = ['1', '2', '3', '4'];