'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Publications', path: '/publications' },
    { name: 'Teaching', path: '/teaching' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5vw',
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'var(--bg-primary)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent'
    }}>
      <div style={{ fontWeight: 600, fontSize: '1.2rem', fontFamily: 'var(--font-inter)' }}>
        <Link href="/" style={{ color: 'var(--text-primary)' }}>HYY.</Link>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link 
              key={link.path} 
              href={link.path}
              style={{
                color: isActive ? 'var(--accent-color)' : 'var(--text-primary)',
                fontWeight: isActive ? 600 : 400,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
            >
              {link.name}
              {isActive && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--accent-color)',
                  borderRadius: '2px'
                }} />
              )}
            </Link>
          );
        })}
        <div style={{ marginLeft: '1rem' }}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
