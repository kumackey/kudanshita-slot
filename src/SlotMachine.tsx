import React, { useState } from 'react';

const symbols = ['🍒', '🍋', '🍊'];

const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

const SlotMachine: React.FC = () => {
    const [reels, setReels] = useState([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
    const [spinning, setSpinning] = useState(false);
    const [celebration, setCelebration] = useState(false);

    const spin = () => {
        setSpinning(true);
        setCelebration(false);
        setTimeout(() => {
            const newReels = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
            setReels(newReels);
            setSpinning(false);
            if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
                setCelebration(true);
            }
        }, 1000);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '2rem' }}>
                {reels.map((symbol, index) => (
                    <div key={index} style={{ margin: '0 10px' }}>
                        {symbol}
                    </div>
                ))}
            </div>
            <button onClick={spin} disabled={spinning}>
                {spinning ? 'Spinning...' : 'Spin'}
            </button>
            {celebration && <div style={{ marginTop: '20px', fontSize: '1.5rem', color: 'green' }}>Congratulations! 🎉</div>}
        </div>
    );
};

export default SlotMachine;