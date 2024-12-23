import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Root from "@/app/page";

describe('Page', () => {
  it('renders a heading', () => {
    render(<Root />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })

  it('renders homepage unchanged', () => {
    const { container } = render(<Root />)
    expect(container).toMatchSnapshot()
  })
})
