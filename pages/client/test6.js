import React from 'react'

export default class Test6 extends React.Component {
  render() {
    // breaks the build
    // throw new Error("Client Test 6")
    return (
      <div>
        <h1>Client Test 6</h1>
      </div>
    );
  }
}
