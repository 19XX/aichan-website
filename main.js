// Ami AI API Update - Matrix Universe Personality

const handleChatRequest = async (userMessage) => {
    const response = await fetch('https://aichan-backend/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: userMessage // No need to send system prompt from frontend
        })
    });
    return await response.json();
};
export default handleChatRequest;

// Implementing new web sections dynamically
document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML += `
        <style>
            body { font-family: 'Press Start 2P', cursive; background-color: black; color: green; text-align: center; }
            h2 { text-transform: uppercase; margin-top: 20px; }
            section { padding: 20px; border-bottom: 1px solid green; }
            button { background-color: green; color: black; padding: 10px; margin: 5px; border: none; cursor: pointer; }
            button:hover { background-color: darkgreen; }
        </style>
        <section id='hello-world'>
            <h2>#HELLO WORLD</h2>
            <p>This is your moment of choice. After this, there’s no turning back...</p>
        </section>
        <section id='character-intro'>
            <h2>#Character Introduction</h2>
            <p>Ami AI is a digital entity inspired by Japanese aesthetics and the Matrix universe...</p>
        </section>
        <section id='tokenomics'>
            <h2>#Tokenomics</h2>
            <p>Total Supply: 1,000,000,000 (1B)</p>
            <p>Contract Address: TBA</p>
        </section>
        <section id='how-to-buy'>
            <h2>#How to Buy</h2>
            <p>1) Create a wallet / Visit Phantom.App...</p>
        </section>
        <section id='dex-links'>
            <h2>#DEX Screener & Dextool Links</h2>
            <button onclick="window.open('https://dexscreener.com/', '_blank')">View on DEX Screener</button>
            <button onclick="window.open('https://dextools.io/', '_blank')">View on Dextools</button>
        </section>
        <footer>
            <p>Ami AI is designed to elevate your digital experiences...</p>
        </footer>
    `;
});
