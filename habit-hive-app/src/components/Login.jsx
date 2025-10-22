import React from 'react'

const Login = () => {

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
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="Value"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Value"
          />
        </div>
        
        <button className="btn">
          Sign In
        </button>
        
        <div style={{ marginTop: '16px' }}>
          <a href="#" style={{ color: '#000', textDecoration: 'underline', fontSize: '14px' }}>
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
