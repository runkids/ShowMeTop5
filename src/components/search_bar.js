import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onInputChange = term => {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
    render() {
        return (
            <div className='search-bar'>
                <span className='searchBarText'>Show Me TOP5</span>
                <input onChange={e => this.onInputChange(e.target.value)} value={this.state.term} /><br />
            </div>
        )
    }
}

export default SearchBar;