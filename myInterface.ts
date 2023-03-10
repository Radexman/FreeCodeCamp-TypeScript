interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

const emilia: Admin = {
    dbId: 32,
    role: 'admin',
    email: 'emilia@wp.pl',
    userId: 1,
    githubToken: '1523',
    startTrail: () => {
        return 'trail started';
    },
    getCoupon: (name: 'emilia22') => {
        return 10;
    }
}

emilia.email = 'emiliaKozuch@gmail.com';

export {};