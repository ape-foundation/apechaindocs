import { useState } from 'react'
import { Collapse } from 'nextra-theme-docs'

export default function ExpandableCard({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => setIsExpanded(!isExpanded)

  return (
    <div style={{
      maxWidth: '100%', 
      margin: '1rem auto', 
      border: '1px solid #3d3f42', 
      borderRadius: '8px', 
      padding: '1rem', 
      backgroundColor: '#1a1a1a',  
      color: '#ffffff'  
    }}>
      <div 
        onClick={handleToggle} 
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          color: '#e2f0ff', // Bright accent color for the title
          fontWeight: 'bold' 
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{title}</h3>
        <span 
          style={{ 
            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', 
            transition: 'transform 0.2s', 
            color: '#e2f0ff'  
          }}
        >
          ➔
        </span>
      </div>
      <Collapse isOpen={isExpanded}>
        <div style={{ 
          marginTop: '0.5rem', 
          padding: '1rem', 
          border: '1px solid #3d3f42',  // Inner border color
          borderRadius: '8px', 
          backgroundColor: '#262626', 
          color: '#d1d5db'  
        }}>
          {children}
        </div>
      </Collapse>
    </div>
  )
}
