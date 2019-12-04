import React, { Component } from 'react'

class Search extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            query: '',
        }    
    }
    
    handleChange = (e) => {
        this.setState({
            query: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" placeholder="Search ..." onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}

export default Search;