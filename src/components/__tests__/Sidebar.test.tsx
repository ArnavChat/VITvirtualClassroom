import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';

// Correct mocks
const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => ({ pathname: '/' }),
}));

describe('Sidebar Component', () => {
  beforeEach(() => {
    render(<Sidebar userName="Test User" userRole="Faculty" />);
  });

  it('renders user information', () => {
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('Faculty')).toBeInTheDocument();
  });

  it('renders all navigation menu items', () => {
    const menuItems = [
      'Dashboard',
      'Department',
      'Category',
      'Students',
      'Subjects',
      'Examination',
      'Help',
    ];

    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('navigates to the Department page on click', () => {
    const button = screen.getByText('Department').closest('button');
    fireEvent.click(button!);
    expect(mockNavigate).toHaveBeenCalledWith('/department');
  });

  it('active link has active class', () => {
    const activeButton = screen.getByText('Dashboard').closest('button');
    expect(activeButton).toHaveClass('bg-[#2e3e5e]');
  });
});
