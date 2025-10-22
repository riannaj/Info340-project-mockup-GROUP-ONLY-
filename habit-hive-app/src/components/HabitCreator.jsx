import React from 'react'

const HabitCreator = () => {

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
          habit creator
        </h2>
        
        <div className="card card-purple" style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#000' }}>
            Habit Name
          </h3>
          <input
            type="text"
            className="form-input"
            placeholder="TAKE OUT THE TRAI"
            style={{ background: 'white' }}
          />
        </div>
        
        <div className="card card-purple" style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#000' }}>
            Frequency
          </h3>
          <div style={{ marginBottom: '12px' }}>
            <input
              type="date"
              className="form-input"
              value="2005-08-25"
              style={{ background: 'white' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <input
              type="time"
              className="form-input"
              value="11:00"
              style={{ background: 'white', flex: 1 }}
            />
            <span style={{ color: '#6b7280' }}>to</span>
            <input
              type="time"
              className="form-input"
              value="11:30"
              style={{ background: 'white', flex: 1 }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              style={{ width: '16px', height: '16px' }}
            />
            <span style={{ color: '#000', fontSize: '14px' }}>Make recurring</span>
          </div>
        </div>
        
        <div className="card card-purple" style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#000' }}>
            Tags
          </h3>
          <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5' }}>
            nutrition, exercise, productivity, etc
          </div>
        </div>
        
        <button className="btn">
          Create Habit
        </button>
      </div>
      
      <div className="nav-bar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Buddy</div>
        <div className="nav-item">Community</div>
        <div className="nav-item">Habits</div>
      </div>
    </div>
  )
}

export default HabitCreator
