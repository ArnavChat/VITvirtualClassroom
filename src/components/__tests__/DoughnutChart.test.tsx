import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import DoughnutChart from '../DoughnutChart';

// Mock ResponsiveContainer and other recharts components
vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div data-testid="responsive-container">{children}</div>,
  PieChart: ({ children }: { children: React.ReactNode }) => <div data-testid="pie-chart">{children}</div>,
  Pie: ({ children }: { children: React.ReactNode }) => <div data-testid="pie">{children}</div>,
  Cell: () => <div data-testid="cell" />,
  Legend: () => <div data-testid="legend" />
}));

describe('DoughnutChart Component', () => {
  const mockData = [
    { name: 'Pass', value: 85, color: '#7CFC00' },
    { name: 'Fail', value: 15, color: '#FF4545' },
  ];

  it('renders with the correct title', () => {
    render(<DoughnutChart title="Test Chart" data={mockData} />);
    
    expect(screen.getByText('Test Chart')).toBeInTheDocument();
  });

  it('renders chart components', () => {
    render(<DoughnutChart title="Test Chart" data={mockData} />);
    
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
    expect(screen.getByTestId('pie-chart')).toBeInTheDocument();
    expect(screen.getByTestId('pie')).toBeInTheDocument();
    expect(screen.getByTestId('legend')).toBeInTheDocument();
    
    // Should have two cells (one for each data point)
    const cells = screen.getAllByTestId('cell');
    expect(cells).toHaveLength(2);
  });
});