import React from 'react';
import { Options } from './Options';
import { AddOption } from './AddOption';

class Body extends React.Component {
    state = {
        option: null,
        options: []
    }

    handleDeleteOptions = (options) => {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    render() {
        return (
        <div>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
            {/* <AddOption /> */}
        </div>   
        )
    }
}
// named component - component name, function name, multiple stuffs going on
export { Body }