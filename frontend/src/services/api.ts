const API_URL = 'http://localhost:3001/api';

export async function getFact(category: string) {
    const response = await fetch(`${API_URL}/fact/${category}`);
    const data = await response.json();
    return data;
}

export async function getLanguagePhrase() {
    const response = await fetch(`${API_URL}/language`);
    const data = await response.json();
    return data;
}
