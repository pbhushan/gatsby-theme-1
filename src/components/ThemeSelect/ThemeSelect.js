import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import themeList from '../../themeSetting/ThemeList'

const Div = styled.div`
  width: 100%;
`

const Select = styled.select`
  position: absolute;
  height: 60px;
  margin: 2rem 0.5rem;
  padding: 0.5rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  right: 10px;
  border: 3px solid ${props => props.theme.bg.secondary};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.bg.variant};
  color: ${props => props.theme.text.variant};
  border-radius: 2px;
`

export const SelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`

class ThemeSelect extends React.Component {
  onChange = e => {
    _.filter(themeList, th => {
      if (th.name === e.target.value) {
        this.props.onThemeChange(th.value)
      }
    })
  }
  render() {
    return (
      <Div>
        <Select onChange={e => this.onChange(e)}>
          {themeList.map(theme => {
            return (
              <SelectOpt key={theme.name} value={theme.name}>
                {theme.name}
              </SelectOpt>
            )
          })}
        </Select>
      </Div>
    )
  }
}

export default ThemeSelect
