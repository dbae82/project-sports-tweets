import { selector } from 'recoil';
import { teamState } from './teamAtoms';

export const favTeamState = selector({
    key: 'favTeamState',
    get: ({ get }) => {
        const team = get(teamState);
        return team ? true : false;
    }
});