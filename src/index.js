import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class WasmComponent {
   wasmFile = "";
  constructor(__fileNameWasm){
    this.wasmFile = __fileNameWasm;
  }
  loadWasm(){
    console.log("Webassembly module loaded - ", this.wasmFile, typeof WebAssembly);
    return new Promise((accept, reject)=>{
      if(typeof WebAssembly == 'object'){
        fetch(this.wasmFile).then(response =>
          {
            
            return response.arrayBuffer();
          }
        ).then(bytes =>
          {
            
            try {
              let __WebAssembly = WebAssembly.instantiate(bytes, {imports: {}});
              return __WebAssembly;
            } catch (error) {
              reject({
                "success" : false,
                "error" : error
              })
            }
            
            
          }
        ).then(results => {
          window.react_webassembly_component = results.instance.exports;
          accept({
            "success" : true,
            "WebAssembly" : results.instance.exports
          })
        });
      }else{
        reject({
          "success" : false,
          "error" : "WebAssembly not supported"
        })
      }
      
    })
    
  }
}
