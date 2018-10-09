import React, { Component } from 'react'

import WasmComponent from 'react_webassembly_component'

export default class App extends Component {
  constructor(){
    super()
    let __WasmComponent = new WasmComponent(__dirname + "/test.wasm");
    __WasmComponent.loadWasm()
    .then(webassembly=>{
      console.log(webassembly)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  render () {
    
    return (
      <div>
        <div>Anshu</div>
      </div>
    )
  }
}
