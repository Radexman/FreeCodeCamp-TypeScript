// const User = {
//     name: 'radek',
//     email: 'radeg69@wp.pl',
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {

// }

// createUser({name: 'radek', isPaid: false});

// function createCourse():{name: string, price: number}{
//     return {name: 'reactjs', price: 399};
// }

type User = {
    name: string,
    email: string,
    isActive: boolean,
}

function createUser(user: User): User {
    return {
        name: '', email: '', isActive: true
    }
}

createUser({name: '', email: '', isActive: true});

export {};