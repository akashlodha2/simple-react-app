import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevProps", prevState);
    if (prevProps.counter.value != this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  formatCountColor() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "warning";
    return classes;
  }

  formatCountForZero() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span
          className={this.formatCountColor()}
          style={{ fontSize: 20, width: 60 }}
        >
          {" "}
          {this.formatCountForZero()}{" "}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
