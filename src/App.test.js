import * as React from 'react'
import App from './App'
import {shallow} from 'enzyme'

const resizeWindow = (x,y)=> {
  window.innerWidth = x
  window.innerHeight = y
  window.dispatchEvent(new Event('resize'))
}

describe('App', () => {
  it('should display image above header in desktop mode', () => {
    const app = shallow(<App />)
    expect(app).toMatchSnapshot()
  })
})