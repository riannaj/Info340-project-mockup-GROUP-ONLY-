import React from 'react'

const HabitPage = () => {
  const habits = [
    { id: 1, name: 'habit 1', completed: true },
    { id: 2, name: 'habit 2', completed: true },
    { id: 3, name: 'habit 3', completed: true }
  ]

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
          Habit Page
        </h2>
        
        <div style={{ marginBottom: '20px' }}>
          {habits.map(habit => (
            <div key={habit.id} className="card card-purple" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <span style={{ 
                fontSize: '16px', 
                color: '#000',
                fontWeight: '500'
              }}>
                {habit.name}
              </span>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={habit.completed}
                  readOnly
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          ))}
        </div>
        
        <button 
          className="btn"
          style={{ marginTop: '20px' }}
        >
          Add New Habit
        </button>
      </div>
      
      <div className="nav-bar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Buddy</div>
        <div className="nav-item">Community</div>
        <div className="nav-item active">Habits</div>
      </div>
    </div>
  )
}

export default HabitPage
