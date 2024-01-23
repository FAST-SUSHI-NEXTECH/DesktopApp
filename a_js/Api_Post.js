import fetch from 'node-fetch';
import { url_login } from '../config.json' assert { type: 'json' };


async function loginUser(username, password) {
    const url = url_login;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(`An error occurred while trying to fetch data: ${error}`);
    }
}

export default { chargerDonneesDepuisAPI, loginUser };