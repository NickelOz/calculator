import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class Button extends React.Component {
    render() {
        return (
            <div className="button" onClick={() => this.props.onClick()}>
                {this.props.value}
            </div>
        )
    }
}

class Screen extends React.Component {
    render() {
        const value = this.props.value
        return (
            <div id="screen">
                <div>{value}</div>
            </div>
        )
    }
}

class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            currentTerm: 0,
            currentOperator: null,
            previousTerm: null
        }
        this.handleNumberChange = this.handleNumberChange.bind(this)
    }

    handleNumberChange(newNumber) {
        this.setState({currentTerm: newNumber})
    }

    renderNumberButton(i) {
        return <Button value={i} onClick={() => this.handleNumberChange(i)}/>
    }

    renderScreen(value) {
        return <Screen value={value}/>
    }

    render() {
        const currentTerm = this.state.currentTerm
        return (
            <div id="calculator">
                <div className="row">
                    {this.renderScreen(currentTerm)}
                </div>
                <div className="row">
                    {this.renderNumberButton(7)}
                    {this.renderNumberButton(8)}
                    {this.renderNumberButton(9)}
                </div>
                <div className="row">
                    {this.renderNumberButton(4)}
                    {this.renderNumberButton(5)}
                    {this.renderNumberButton(6)}
                </div>
                <div className="row">
                    {this.renderNumberButton(1)}
                    {this.renderNumberButton(2)}
                    {this.renderNumberButton(3)}
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)

