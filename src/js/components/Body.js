import React from 'react';
import { Options } from './Options';

class Body extends React.Component {
    state = {
        option: null,
        options: []
    }

    // whenever the body component gets mounted/inserted onto the page
    // to get some data from the local storage
    componentDidMount() {
        this.handleLoad()
    }

    // whenever the props/state of the component changes 
    componentDidUpdate() {
        this.handleSave()
    }

    // when we refresh the page, previous entries would still remain.
    handleSave() {
        const result = JSON.stringify(this.state.options) 
        localStorage.setItem('options', result);
    }

    // load data first and convert it from JSON data to JS object.
    // showing what's stored in the localstorage 
    handleLoad() {
        const result = localStorage.getItem('options') || ["hello"]

        this.setState(() => {
            return {
                options: JSON.parse(result)
            }
        })
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

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add your dream'
        } else if (this.state.options.indexOf(option) > -1) {
            alert('This option already exists')
        }

        // this.setState((prevState) => ({
        //     options: prevState.options.concat(option)
        // })

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        return (
            <div>
                <Options options={this.state.options} handleAddOption={this.handleAddOption} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
            </div>
        )
    }
}
// named component - component name, function name, multiple stuffs going on
export { Body }