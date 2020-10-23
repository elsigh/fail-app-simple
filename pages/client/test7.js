import React from 'react'

export default class Test6 extends React.Component {
  componentDidMount() {
    throw new Error("Client Test 7")
  }
  render() {
    return (
      <div>
        <h1>Client Test 7</h1>
      </div>
    );
  }
}
