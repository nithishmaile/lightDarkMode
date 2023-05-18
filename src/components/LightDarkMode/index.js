// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onclickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const classNames = isDarkMode ? 'lightMode-container' : 'card-container'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'
    const heading = isDarkMode ? 'lightMode-heading' : 'heading'
    const buttonClass = isDarkMode ? 'lightMode-button' : 'button'

    return (
      <div className="bg-container">
        <div className={classNames}>
          <h1 className={heading}>Click to change mode</h1>
          <button
            className={buttonClass}
            type="button"
            onClick={this.onclickButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
