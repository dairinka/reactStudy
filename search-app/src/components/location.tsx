import * as React from 'react';

interface ILocationProp {
  currentPage: string;
}
export default class Location extends React.Component<ILocationProp> {
  public render() {
    return <div className="location">You are on {this.props.currentPage} page</div>;
  }
}
