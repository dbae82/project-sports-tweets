import { selector } from 'recoil';
import { userState } from './userAtoms';

export const loggedInState = selector({
    key: 'loggedInState',
    get: ({ get }) => {
        const user = get(userState);
        return user ? true : false;
    }
});