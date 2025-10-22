import React from 'react'

const Community = () => {

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
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#000' }}>
          Community
        </h2>
        
        <div style={{ marginBottom: '20px' }}>
          <div style={{ 
            background: '#f3f4f6', 
            border: '1px solid #d1d5db', 
            borderRadius: '12px', 
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            marginBottom: '12px'
          }}>
            Image/post placeholder
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center',
            marginTop: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7280' }}>
              <span>👍</span>
              <span style={{ fontSize: '12px' }}>Like</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7280' }}>
              <span>💬</span>
              <span style={{ fontSize: '12px' }}>Comment</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7280' }}>
              <span>↗️</span>
              <span style={{ fontSize: '12px' }}>Share</span>
            </div>
          </div>
        </div>
        
        <div>
          <div style={{ 
            background: '#f3f4f6', 
            border: '1px solid #d1d5db', 
            borderRadius: '12px', 
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            marginBottom: '12px'
          }}>
            Image/post placeholder
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center',
            marginTop: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7280' }}>
              <span>👍</span>
              <span style={{ fontSize: '12px' }}>Like</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7280' }}>
              <span>💬</span>
              <span style={{ fontSize: '12px' }}>Comment</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7280' }}>
              <span>↗️</span>
              <span style={{ fontSize: '12px' }}>Share</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="nav-bar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Buddy</div>
        <div className="nav-item active">Community</div>
        <div className="nav-item">Habits</div>
      </div>
    </div>
  )
}

export default Community
