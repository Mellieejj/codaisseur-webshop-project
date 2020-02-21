import React, { Component } from "react";

export default class CheckoutForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input name="name" type="text" />
          </label>
          <br />
          <label>
            Street:
            <input name="street" type="text" />
          </label>
          <br />
          <label>
            House number:
            <input name="number" type="text" />
          </label>
          <br />
          <label>
            Postcode:
            <input name="postcode" type="text" />
          </label>
          <br />
        </form>
      </div>
    );
  }
}
