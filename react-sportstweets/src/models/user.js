const url = 'http://localhost:4000/api/v1/user';

class User {
    static show() {
        return fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
            },
        }).then(response => response.json());
    }
}

export default User;