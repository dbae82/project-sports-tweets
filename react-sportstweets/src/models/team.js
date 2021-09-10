const url = 'http://localhost:4000/api/v1/teams';

class Team {
    static all() {
        return fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
            },
        }).then(response => response.json());
    }
};

export default Team;