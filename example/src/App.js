import React, { Component } from 'react'

import WasmComponent from 'react_webassembly_component'

export default class App extends Component {
  render () {
    return (
      <div>
        <WasmComponent wasm='Modern React component module' />
      </div>
    )
  }
}
