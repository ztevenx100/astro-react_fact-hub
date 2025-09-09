// Simple test script for API functions
import { getFact, getAllCategoriesFacts, getLanguagePhrase, getAllLanguagesPhrases, getHealthCheck } from './frontend/src/services/api.ts';

async function testApis() {
    console.log('🧪 Testing API Functions...\n');
    
    try {
        // Test health check
        console.log('1. Testing health check...');
        const health = await getHealthCheck();
        console.log('✅ Health:', health);
        
        // Test fact by category
        console.log('\n2. Testing fact by category...');
        const fact = await getFact('ciencia');
        console.log('✅ Fact:', fact);
        
        // Test all facts
        console.log('\n3. Testing all facts...');
        const allFacts = await getAllCategoriesFacts();
        console.log('✅ All Facts:', allFacts);
        
        // Test language phrase
        console.log('\n4. Testing language phrase...');
        const language = await getLanguagePhrase();
        console.log('✅ Language:', language);
        
        // Test all languages
        console.log('\n5. Testing all languages...');
        const allLanguages = await getAllLanguagesPhrases();
        console.log('✅ All Languages:', allLanguages);
        
        console.log('\n🎉 All API tests passed!');
        
    } catch (error) {
        console.error('❌ API Test failed:', error);
    }
}

testApis();
