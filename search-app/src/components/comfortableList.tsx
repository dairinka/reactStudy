import React, { Component } from 'react';
interface IComfortable {
  comfortableList: string[];
}

export default class ComfortableList extends Component<IComfortable> {
  public render() {
    return (
      <div className="comfort-list">
        {this.props.comfortableList.join(', ').slice(0, 120) + '...'}
      </div>
    );
  }
}
