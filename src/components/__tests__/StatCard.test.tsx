import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatCard from '../StatCard';
import { Users } from 'lucide-react';

describe('StatCard Component', () => {
  it('renders with correct value and title', () => {
    render(<StatCard value={10} title="STUDENTS" icon={<Users data-testid="icon" size={32} />} />);
    
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('STUDENTS')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('applies the correct styling to the outer container', () => {
    const { container } = render(
      <StatCard value={10} title="STUDENTS" icon={<Users size={32} />} />
    );

    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveClass('bg-white', 'rounded-lg', 'shadow', 'p-6', 'flex', 'items-start', 'justify-between');
  });
});
