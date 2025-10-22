import React from 'react'

const HabitBuddy = () => {
  const clothingItems = [
    { id: 1, name: 'Striped Shirt', emoji: '👕', color: '#3b82f6' },
    { id: 2, name: 'Red Shirt', emoji: '👕', color: '#ef4444' },
    { id: 3, name: 'Green Shirt', emoji: '👕', color: '#10b981' },
    { id: 4, name: 'Yellow Shirt', emoji: '👕', color: '#f59e0b' },
    { id: 5, name: 'Jeans', emoji: '👖', color: '#1e40af' },
    { id: 6, name: 'Shorts', emoji: '🩳', color: '#059669' },
    { id: 7, name: 'Cap', emoji: '🧢', color: '#6b7280' },
    { id: 8, name: 'Hat', emoji: '🎩', color: '#000' },
    { id: 9, name: 'Dress', emoji: '👗', color: '#ec4899' },
    { id: 10, name: 'Shoes', emoji: '👟', color: '#374151' },
    { id: 11, name: 'Sunglasses', emoji: '🕶️', color: '#000' },
    { id: 12, name: 'Bow Tie', emoji: '🎀', color: '#7c3aed' }
  ]

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
          <div style={{ marginTop: '16px', fontSize: '16px', color: '#000' }}>
            Points: 50
          </div>
        </div>
        
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '16px',
            gap: '8px'
          }}>
            <div style={{ 
              width: '20px', 
              height: '20px', 
              background: '#10b981', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}>
              🐝
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#000' }}>
              Avatar clothing
            </h3>
          </div>
          <div style={{ 
            fontSize: '12px', 
            color: '#6b7280', 
            marginBottom: '16px',
            fontWeight: '600'
          }}>
            HALL OR NOTHING
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '12px',
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            {clothingItems.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '12px',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '24px'
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>
                  {item.emoji}
                </div>
                <div style={{ 
                  fontSize: '10px', 
                  color: '#6b7280', 
                  textAlign: 'center',
                  lineHeight: '1.2'
                }}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="nav-bar">
        <div className="nav-item">Home</div>
        <div className="nav-item active">Buddy</div>
        <div className="nav-item">Community</div>
        <div className="nav-item">Habits</div>
      </div>
    </div>
  )
}

export default HabitBuddy
