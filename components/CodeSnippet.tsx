import { useState } from 'react';
import copy from 'copy-to-clipboard';

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div style={{ position: 'relative', marginBottom: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <pre style={{
        backgroundColor: '#2d2d2d',
        color: '#f8f8f2',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '0.875rem', 
        overflowX: 'auto',
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
      }}>
      <code>{code}</code> 
      </pre>


      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '15px',
          right: '10px',
          backgroundColor: copied ? '#28a745' : '#007bff',
          color: '#fff',
          border: 'none',
          padding: '0.25rem 0.75rem', 
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.75rem', 
          transition: 'background-color 0.3s ease',
          width: 'fit-content',
          maxWidth: '100%', 
          boxSizing: 'border-box',
        }}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      
    </div>
  );
};

export default CodeSnippet;






