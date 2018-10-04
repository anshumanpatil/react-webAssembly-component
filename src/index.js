import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class WasmComponent {
   wasmFile = "";
  constructor(__fileNameWasm){
    this.wasmFile = __fileNameWasm;
  }
  loadWasm(){
    console.log("Webassembly module loaded - ", this.wasmFile);
  }
}
