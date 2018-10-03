import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class WasmComponent extends Component {
  static propTypes = {
    wasm: PropTypes.string
  }

  render() {
    const {
      wasm
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {wasm}
      </div>
    )
  }
}
