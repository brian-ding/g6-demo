'use client';

export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: 'grey',
    }}>
        <div style={{
            flexGrow: 0,
            background: '#BB6611',
        }}>top menu</div>
        <div style={{
            display: 'flex',
            flexGrow: 1,
        }}>
            <div style={{
                flexGrow: 1,
                background: '#567843',
            }}>main view</div>
            <div style={{
                flexGrow: 0,
                background: '#123456',
                color: '#FFFFFF',
            }}>side bar</div>
        </div>
    </div >;
};