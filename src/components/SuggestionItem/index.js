import './index.css'

const SuggestionItem = props => {
  const {itemDetails} = props
  const {suggestion} = itemDetails

  return (
    <li className="item">
      <p className="suggestion">{suggestion}</p>
      <button className="button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
