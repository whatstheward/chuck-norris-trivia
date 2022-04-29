import * as React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

const resizeWindow = (x,y)=> {
  window.innerWidth = x
  window.innerHeight = y
  window.dispatchEvent(new Event('resize'))
}

describe('App', () => {
  it('renders without crashing', () => {
    const comp = renderer
      .create(<App />)
      .toJSON()
    expect(comp).toMatchSnapshot()
  })
  it('renders image above header in desktop mode', () => {
    const comp = renderer
    .create(<App />)
    .toJSON()
    const node = comp.children[0]
    expect(node.type).toMatch(/header/)
    expect(node.children[0].props.id).toBe('header-img')
  })
  it('does not render image above header in mobile mode', () => {
    resizeWindow(700, 900)
    const comp = renderer
    .create(<App />)
    .toJSON()
    const node = comp.children[0]
    expect(node.children[0].type).toBe('img')
    expect(node.children[0].children).toBe(null)
  })
})