import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar({ tree, onSelect, setSidebarOpen, selectedPath }) {
  return (
    <div className="sidebar-wrapper">
      <button 
        className="sidebar-close-button" 
        onClick={() => setSidebarOpen(false)}
      >
        ✕
      </button>
      <div className="sidebar">
        {renderTree(tree, onSelect, selectedPath)}
      </div>
      {/* <button
        className="sidebar-toggle-inline"
        onClick={() => setSidebarOpen(prev => !prev)}
      >
        {sidebarOpen ? '⟨' : '⟩'}
      </button> */}
    </div>
  );
}

const FolderGroup = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="sidebar-group">
      <button
        className="sidebar-group-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '▾' : '▸'} {label}
      </button>
      {isOpen && <div className="sidebar-subgroup">{children}</div>}
    </div>
  );
};

function renderTree(node, onSelect, selectedPath) {
  return Object.entries(node).map(([key, value]) => {
    if (key === 'files') {
      return value.map((file, index) => (
        <button
          key={`${file.name}-${index}`}
          className={`sidebar-item${file.path === selectedPath ? ' selected' : ''}`}
          onClick={() => onSelect(file.path)}
        >
          {file.displayName || file.name}
        </button>
      ));
    }

    return (
      
      <FolderGroup key={key} label={key}>
        {renderTree(value, onSelect, selectedPath)}
      </FolderGroup>
    );
  });
}
