interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string): number
}

const emilia: User = {
    dbId: 32,
    email: 'emilia@wp.pl',
    userId: 1,
    startTrail: () => {
        return 'trail started';
    },
    getCoupon: (name: 'emilia22') => {
        return 10;
    }
}

emilia.email = 'emiliaKozuch@gmail.com';

export {};