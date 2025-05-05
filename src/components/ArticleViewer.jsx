import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import path from 'path-browserify';
import { useNavigate } from 'react-router-dom';
import matter from 'gray-matter';

export default function ArticleViewer({ filePath, onNavigate }) {
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    function Tag({ label, color }) {
      return (
        <span style={{
          backgroundColor: color,
          color: 'white',
          fontSize: '0.75rem',
          padding: '4px 8px',
          margin: '4px',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }}>
          {label}
        </span>
      );
    }
    
    function parseFrontmatter(text) {
      const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?/;
      const match = text.match(frontmatterRegex);
      if (!match) return { tags: [], content: text };
    
      const tagLines = match[1]
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
    
      const content = text.slice(match[0].length);
    
      return {
        tags: tagLines,
        content,
      };
    }

    useEffect(() => {
      if (!filePath) return;

      const files = import.meta.glob('../articles/**/*.md', { as: 'raw' });
      const fullPath = `../articles/${filePath}`;

      if (files[fullPath]) {
        files[fullPath]().then((text) => {
          const parsed = parseFrontmatter(text);
          setTags(parsed.tags || []);

          const lines = parsed.content.trim().split('\n');
          const titleLine = lines.find(line => line.startsWith('# '));
          const contentWithoutTitle = lines.filter(line => !line.startsWith('# ')).join('\n');

          setTitle(titleLine?.replace(/^# /, '') || '');
          setContent(contentWithoutTitle);
        }).catch(error => {
          console.error('Error loading file:', error);
          setContent('Error loading content');
        });
      }
    }, [filePath]);

    const containerRef = useRef();

    useEffect(() => {
      if (content && containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'instant' });
      }
    }, [content]);

    const components = {
      a({ href, children }) {
        if (href.endsWith('.md')) {
          const baseDir = filePath.substring(0, filePath.lastIndexOf('/') + 1);
          const resolvedPath = path.posix.normalize(`${baseDir}${href}`);
          const relativePath = resolvedPath.replace(/^(\.\/)?/, '');
  
          return (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${encodeURIComponent(relativePath)}`);
              }}
            >
              {children}
            </a>
          );
        }
  
        return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
      }
    };
  

  return (
    <div ref={containerRef} className="article-container">
        {title && <h1>{title}</h1>}
        {tags.length > 0 && (
  <div style={{ marginBottom: '10px' }}>
    {tags.map((tag, i) => (
      <Tag key={i} label={tag} color={i % 2 === 0 ? '#777A89' : '#479C9C'}/>
    ))}
  </div>
)}
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}