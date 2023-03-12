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

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean,
// }

// function createUser(user: User): User {
//     return {
//         name: '', email: '', isActive: true
//     }
// }

// createUser({name: '', email: '', isActive: true});

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credcardDetails?: number;
}

const myUser: User = {
    _id: '1234',
    name: 'Emilia',
    email: 'emilia@gmail.com',
    isActive: false,
}

type cardNumber = {
    cardnumber: string,
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number,
}

myUser.email = 'radeg69@wp.pl';
// myUser._id = '111';

export {};