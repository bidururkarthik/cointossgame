// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossResultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headtoss: 0,
    tailtoss: 0,
  }

  changecointoss = () => {
    const {headtoss, tailtoss} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headtoss
    let latestTailsCount = tailtoss

    if (tossResult === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      latestHeadsCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      latestTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headtoss: latestHeadsCount,
      tailtoss: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headtoss, tailtoss} = this.state
    const total = headtoss + tailtoss
    return (
      <div className="bgcontainer">
        <div className="cardcontainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="coinimage" />
          <br />
          <button
            className="tossbutton"
            type="button"
            onClick={this.changecointoss}
          >
            Toss Coin
          </button>
          <div className="countcontainer">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{headtoss}</p>
            <p className="count">Tails:{tailtoss}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
