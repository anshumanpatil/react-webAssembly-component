import React, { Component } from 'react'

import WasmComponent from 'react_webassembly_component'

export default class App extends Component {
  constructor(){
    super()
    let __WasmComponent = new WasmComponent("File.wasm");
    __WasmComponent.loadWasm();
  }
  render () {
    
    return (
      <div>
        <div>Anshu</div>
      </div>
    )
  }
}
