import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo Component', () => {
  it('renders VIT logo image', () => {
    render(<Logo />);
    
    const logoImage = screen.getByAltText('VIT Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/lovable-uploads/5cfc12be-7d72-4c7e-a83e-66aa41eaa381.png');
  });

  it('renders VIT text content', () => {
    render(<Logo />);
    
    expect(screen.getByText('VIT')).toBeInTheDocument();
    expect(screen.getByText('Vellore Institute of Technology')).toBeInTheDocument();
    expect(screen.getByText('(Deemed to be University under section 3 of UGC Act, 1956)')).toBeInTheDocument();
  });
});