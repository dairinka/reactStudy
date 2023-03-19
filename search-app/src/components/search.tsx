import React, { Component } from 'react';

export interface ISearchProps {
  changeList: (str: string) => void;
}

type searchState = { value: string };
export default class Search extends Component<ISearchProps, searchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      value: '',
    };
  }
  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };
  clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.changeList(this.state.value);
  };
  public render() {
    return (
      <form className="search-bar">
        <input
          className="search-input"
          value={this.state.value}
          onChange={this.changeHandler}
          type="text"
          placeholder="search apartment"
        />
        <button className="search-btn" onClick={this.clickHandler} type="submit">
          Search
        </button>
      </form>
    );
  }
}
