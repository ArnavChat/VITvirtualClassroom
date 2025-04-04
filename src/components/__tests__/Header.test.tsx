import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

// Correctly mock react-router-dom's useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Header Component', () => {
  const mockLogout = vi.fn();

  beforeEach(() => {
    render(<Header userName="Test User" onLogout={mockLogout} />);
  });

  it('renders the logo image', () => {
    const logo = screen.getByAltText('VIT Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the search input', () => {
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });

  it('displays the correct username', () => {
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('calls onLogout when logout button is clicked', () => {
    const logoutButton = screen.getByText('Log out');
    fireEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  it('renders the profile image', () => {
    const profileImg = screen.getByAltText('Profile');
    expect(profileImg).toBeInTheDocument();
    expect(profileImg).toHaveAttribute('src', expect.stringContaining('lovable-uploads'));
  });
});
