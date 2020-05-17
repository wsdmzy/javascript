import React from 'react';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from './Search';

Enzyme.configure({
  adapter: new Adapter()
})
let wrap
describe('测试 Search', () => {
  // 每个用例都会调用
  beforeEach(() => {
    wrap = mount(<Search onSubmit={() => {}} />)
  })
  it('normal render', () => {
    
    expect(() => {
      wrap.setProps({})
      wrap.unmount()
    }).not.toThrow()
  })

  it('container input ele', () => {
    
    let len = wrap.find('input').length
    expect(len).toBe(1)
  })

  it('input change', () => {
    
    wrap.setState({content: ''})
    let input = wrap.find('input')
    input.simulate('change', {
      target: {
        value: 'hhh'
      }
    })
    expect(wrap.state().content).toBe('hhh')
  })

  it('test onSubmit', () => {
    let fn = jest.fn()  //模拟一个函数
    let wrapWithFn = mount(<Search onSubmit={fn} />)
    let input = wrapWithFn.find('input')
    wrapWithFn.setState({content: 'hhh'})
    input.simulate('keyup', {
      keyCode: 13
    })
    expect(fn).toHaveBeenCalled()
    expect(fn).toHaveBeenCalledWith('hhh')
  })

})