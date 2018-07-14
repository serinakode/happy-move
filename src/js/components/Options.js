import React from 'react'
import { Option } from './Option'

class Options extends React.Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });

    }

    handleSubmit = (event) => {
        this.props.handleAddOption(this.state.value)
        event.preventDefault()
        // when we work on form, use preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <input type="submit" value="Add" />
                </form>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.length === 0 && <p>Add your dreams</p>}
                {this.props.options.map((option) => {
                   
                   return <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={this.props.handleDeleteOption}
                    />
                })
                }
            </div>
        );
    }
}

export { Options }
