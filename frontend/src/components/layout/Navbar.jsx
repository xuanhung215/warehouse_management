import React from 'react';

const Navbar = () => {
  return (
    <header style={{ 
      background: '#0b0f19', 
      padding: '20px 24px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid #1f2937'
    }}>
      <h1 style={{ margin: 0, fontSize: '24px', color: '#f8fafc' }}></h1>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative' }}>
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            style={{ 
              background: '#111827', border: '1px solid #334155', color: 'white', 
              padding: '10px 16px', borderRadius: '8px', width: '250px', outline: 'none' 
            }} 
          />
        </div>
        
        {/* Notification Bell */}
        <button style={{ 
          background: '#111827', border: '1px solid #334155', color: '#94a3b8', 
          width: '40px', height: '40px', borderRadius: '8px', cursor: 'pointer',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          🔔
        </button>
      </div>
    </header>
  );
};

export default Navbar;