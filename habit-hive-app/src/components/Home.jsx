import React from 'react'

const Home = () => {
  const BeeAvatar = () => (
    <div className="bee-avatar">
      <div className="bee">
        <div className="bee-head">
          <div className="bee-eyes"></div>
          <div className="bee-nose"></div>
          <div className="bee-mouth"></div>
          <div className="bee-antennae"></div>
        </div>
        <div className="bee-body">
          <div className="bee-thorax"></div>
          <div className="bee-abdomen">
            <div className="bee-stripe"></div>
            <div className="bee-stripe"></div>
            <div className="bee-stripe"></div>
          </div>
          <div className="bee-wings"></div>
          <div className="bee-legs"></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="mobile-container">
      <div className="status-bar">
        <div className="status-left">10:30</div>
        <div className="status-right">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>
      
      <div className="header">
        <h1>Habit Hive</h1>
      </div>
      
      <div className="content">
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#000' }}>
            Habit Buddy
          </h2>
          <BeeAvatar />
          <div style={{ marginTop: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#000' }}>
              Stats
            </h3>
            <div style={{ fontSize: '14px', color: '#000', lineHeight: '1.5' }}>
              <div>Current Streak: 15 days</div>
              <div>Longest Streak: 15 days</div>
              <div>Points: 50</div>
            </div>
          </div>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#000' }}>
            Habits
          </h2>
          <div style={{ 
            background: 'white', 
            border: '1px solid #d1d5db', 
            borderRadius: '8px', 
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280'
          }}>
            No habits yet
          </div>
        </div>
        
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#000' }}>
            Community
          </h2>
          <div style={{ 
            background: 'white', 
            border: '1px solid #d1d5db', 
            borderRadius: '8px', 
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280'
          }}>
            No community posts yet
          </div>
        </div>
      </div>
      
      <div className="nav-bar">
        <div className="nav-item active">Home</div>
        <div className="nav-item">Buddy</div>
        <div className="nav-item">Community</div>
        <div className="nav-item">Habits</div>
      </div>
    </div>
  )
}

export default Home
