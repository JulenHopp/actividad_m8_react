// src/components/navbar/Navbar.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from './Navbar';
import { AuthProvider } from '../../context/AuthContext';

describe('Navbar', () => {
  test('muestra los enlaces y el botón de cerrar sesión', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
      </MemoryRouter>
    );

    // Verifica que los textos aparezcan
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
    expect(screen.getByText(/Cerrar Sesión/i)).toBeInTheDocument();
  });

  test('ejecuta logout al hacer clic en "Cerrar Sesión"', () => {
    localStorage.setItem('token', 'test'); // Simula token

    render(
      <MemoryRouter>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByText(/Cerrar Sesión/i);
    fireEvent.click(logoutBtn);

    expect(localStorage.getItem('token')).toBe(null); // Debe haberlo eliminado
  });
});