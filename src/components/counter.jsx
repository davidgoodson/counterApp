import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 4,
    tags: ["Phones", "Shoes", "T-Shirts", "Belts"]
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  render() {
    return (
      <div>
        <span className={this.getBadeClasses()} style={{ fontSize: 15 }}>
          {this.formatCount()}
        </span>
        <button className="btn btn-seconday btn-sm m-2">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    if (count === 0) return "No Item";
    else if (count === 1) return count + " Item";
    else return count + " Items";
  }

  getBadeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
