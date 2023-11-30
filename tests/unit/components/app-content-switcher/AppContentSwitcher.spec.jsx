import React from 'react'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import AppContentSwitcher from '~/components/app-content-switcher/AppContentSwitcher'

describe('AppContentSwitcher Component', () => {
  const switchOptions = {
    left: {
      text: 'left text',
      tooltip: 'left tooltip'
    },
    right: {
      text: 'right text',
      tooltip: 'right tooltip'
    }
  }

  it('should render correctly with props', () => {
    const { getByText, getByTestId } = render(
      <AppContentSwitcher
        active
        onChange={() => {}}
        switchOptions={switchOptions}
        typographyVariant='h6'
      />
    )

    expect(getByText('left text')).toBeInTheDocument()
    expect(getByText('right text')).toBeInTheDocument()

    expect(getByTestId('switch')).toBeInTheDocument()
  })
  it('should call the onChange function when the switch is clicked', () => {
    const onChangeMock = vi.fn()
    const { getByRole } = render(
      <AppContentSwitcher
        isStudent
        onChange={onChangeMock}
        switchOptions={switchOptions}
        typographyVariant='h6'
      />
    )

    getByRole('checkbox').click()

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should render tooltips if the tooltips props are passed', () => {
    render(
      <AppContentSwitcher
        active
        onChange={() => {}}
        switchOptions={switchOptions}
        typographyVariant='h6'
      />
    )

    const leftTooltip = screen.getByText('left text')
    expect(leftTooltip).toBeInTheDocument()

    const rightTooltip = screen.getByText('right text')
    expect(rightTooltip).toBeInTheDocument()
  })
})
