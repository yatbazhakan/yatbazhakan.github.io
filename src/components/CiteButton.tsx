'use client';

import React, { useState } from 'react';

export default function CiteButton({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!bibtex) return;
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span 
      onClick={handleCopy}
      style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 500, cursor: 'pointer', userSelect: 'none' }}
      title="Copy BibTeX to clipboard"
    >
      {copied ? '[Copied!]' : '[Cite]'}
    </span>
  );
}
