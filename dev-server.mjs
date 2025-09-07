import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Dynamically import and wrap Vercel functions for Express
async function wrapVercelFunction(functionPath) {
    try {
        const func = await import(path.join(__dirname, functionPath));
        return (req, res) => {
            // Simulate Vercel's request/response format
            func.default(req, res);
        };
    } catch (error) {
        console.error(`Error loading function ${functionPath}:`, error);
        return (req, res) => {
            res.status(500).json({ error: 'Function not found' });
        };
    }
}

// Health check
app.get('/api/health', await wrapVercelFunction('./api/health.js'));

// Facts endpoints
app.get('/api/fact/:category', await wrapVercelFunction('./api/fact/[category].js'));
app.get('/api/facts/all', await wrapVercelFunction('./api/facts/all.js'));

// Language endpoints
app.get('/api/language', await wrapVercelFunction('./api/language.js'));
app.get('/api/language/:language', await wrapVercelFunction('./api/language/[language].js'));
app.get('/api/languages/all', await wrapVercelFunction('./api/languages/all.js'));

app.listen(PORT, () => {
    console.log(`🚀 Development API server running on http://localhost:${PORT}`);
    console.log('📚 Available endpoints:');
    console.log('  GET /api/health');
    console.log('  GET /api/fact/:category');
    console.log('  GET /api/facts/all');
    console.log('  GET /api/language');
    console.log('  GET /api/language/:language');
    console.log('  GET /api/languages/all');
});
