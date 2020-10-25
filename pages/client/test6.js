import React from 'react'

export default class Test6 extends React.Component {
  constructor() {
    super()
    this.state = {
      error: false
    }
  }
  componentDidMount() {
    window.setTimeout(() => this.setState({ error: true }))
  }
  render() {
    if (this.state.error) {
      throw new Error("Client Test 6")
    }
    return (
      <div>
        <h1>Client Test 6</h1>
      </div>
    );
  }
}
