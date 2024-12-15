import React from 'react';
import SlotMachine from './SlotMachine';

const App: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Slot Machine</h1>
            <SlotMachine />
        </div>
    );
};

export default App;
