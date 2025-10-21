import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './src/App'

describe('App Component', () => {
  it('renders the heading with correct text', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Vite + React + TypeScript + vitest')
  })
})