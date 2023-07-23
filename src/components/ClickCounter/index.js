// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevsState => {
      console.log(`privious state ${prevsState.count}`)
      return {count: prevsState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            The Button has been clicked{' '}
            <span className="zero_heading">{count}</span>
            times
          </h1>
          <p className="paragraph">Click the button to increase the count</p>
          <button onClick={this.onIncrement} className="clickbtn" type="button">
            click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
