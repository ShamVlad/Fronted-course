import { render, screen } from '@testing-library/react'
import { Button, ButtonThemes } from './Button'

test('clear button theme', () => {
    render(<Button theme={ButtonThemes.CLEAR} />)
    expect(screen.getByTestId('button-id')).toBeInTheDocument()
})
