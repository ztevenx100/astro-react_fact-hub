// Configure API base URL depending on environment
const API_BASE_URL = import.meta.env.PROD 
    ? 'https://your-vercel-domain.vercel.app/api'  // Will be updated with actual Vercel domain
    : '/api';

export async function getFact(category: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/fact/${category}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching fact:', error);
        throw error;
    }
}

export async function getAllCategoriesFacts() {
    try {
        const response = await fetch(`${API_BASE_URL}/facts/all`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all facts:', error);
        throw error;
    }
}

export async function getLanguagePhrase(language?: string) {
    try {
        const url = language 
            ? `${API_BASE_URL}/language/${language}`
            : `${API_BASE_URL}/language`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching language phrase:', error);
        throw error;
    }
}

export async function getAllLanguagesPhrases() {
    try {
        const response = await fetch(`${API_BASE_URL}/languages/all`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all languages:', error);
        throw error;
    }
}

export async function getHealthCheck() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching health status:', error);
        throw error;
    }
}
