import React, {useState} from 'react';

const numbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
const grades = ['段', '級'];
const positions = ['前', '中', '後', '左', '右', '上', '下'];

const getRandomNumber = () => numbers[Math.floor(Math.random() * numbers.length)];
const getRandomGrade = () => grades[Math.floor(Math.random() * grades.length)];
const getRandomPosition = () => positions[Math.floor(Math.random() * positions.length)];

const SlotMachine: React.FC = () => {
    const [reels, setReels] = useState(['一', '級', '上']);
    const [spinning, setSpinning] = useState(false);
    const [celebration, setCelebration] = useState(false);

    const spin = () => {
        setSpinning(true);
        setCelebration(false);
        setTimeout(() => {
            const newReels = [getRandomNumber(), getRandomGrade(), getRandomPosition()];
            setReels(newReels);
            setSpinning(false);
            if (isKudanshita(newReels)) {
                setCelebration(true);
            }
        }, 1000);
    };

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', fontSize: '2rem'}}>
                {reels.map((symbol, index) => (
                    <div key={index} style={{margin: '0 10px'}}>
                        {symbol}
                    </div>
                ))}
            </div>
            <button onClick={spin} disabled={spinning}>
                {spinning ? 'Spinning...' : 'Spin'}
            </button>
            {celebration &&
                <div style={{marginTop: '20px', fontSize: '1.5rem', color: 'green'}}>Congratulations! 九段下🎉</div>}
        </div>
    );
};

const isKudanshita = (reels: string[]) => {
    return reels[0] === '九' && reels[1] === '段' && reels[2] === '下';
};

export default SlotMachine;