import React from 'react'

const Calendar = () => {

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
          Calendar
        </h2>
        
        <div className="card" style={{ marginBottom: '20px' }}>
          <label className="form-label">Date</label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              className="form-input"
              value="08/17/2025"
              readOnly
              style={{ paddingRight: '40px' }}
            />
            <span style={{ 
              position: 'absolute', 
              right: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#6b7280'
            }}>
              📅
            </span>
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
            MM/DD/YYYY
          </div>
        </div>
        
        <div className="card">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <div style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '18px', 
              color: '#6b7280'
            }}>
              &lt;
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#000' }}>
              Aug 2025
            </div>
            <div style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '18px', 
              color: '#6b7280'
            }}>
              &gt;
            </div>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(7, 1fr)', 
            gap: '4px',
            marginBottom: '16px'
          }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
              <div key={day} style={{ 
                textAlign: 'center', 
                padding: '8px', 
                fontSize: '12px', 
                fontWeight: '600',
                color: '#6b7280'
              }}>
                {day}
              </div>
            ))}
            {[null, null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, null, null, null, null, null].map((day, index) => (
              <div
                key={index}
                style={{
                  background: day === 17 ? '#6b46c1' : 'transparent',
                  color: day === 17 ? 'white' : day ? '#000' : '#d1d5db',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}
              >
                {day}
              </div>
            ))}
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '12px',
            justifyContent: 'flex-end'
          }}>
            <button 
              className="btn-secondary"
              style={{ 
                background: '#f3f4f6', 
                color: '#374151', 
                border: '1px solid #d1d5db',
                padding: '8px 16px',
                fontSize: '14px',
                width: 'auto'
              }}
            >
              Cancel
            </button>
            <button 
              className="btn"
              style={{ 
                background: '#6b46c1', 
                color: 'white',
                padding: '8px 16px',
                fontSize: '14px',
                width: 'auto'
              }}
            >
              OK
            </button>
          </div>
        </div>
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

export default Calendar
