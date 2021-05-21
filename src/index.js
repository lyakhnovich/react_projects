import React from "react";
import ReactDOM from "react-dom";

import PropTypes from 'prop-types';

// import App from "./components/App.js";

let createReactClass = require('create-react-class');
//
// let CONTACTS = [
//   {
//     id: 1,
//     name: 'Darth Vader',
//     phoneNumber: '+250966666666',
//     image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
//   }, {
//     id: 2,
//     name: 'Princess Leia',
//     phoneNumber: '+250966344466',
//     image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
//   }, {
//     id: 3,
//     name: 'Luke Skywalker',
//     phoneNumber: '+25097665443333',
//     image: 'https://media2.giphy.com/media/ooFWU2tmYrrtC/200.gif?cid=95b279446582d0858a6ce1bbba9d77b0012e1fc57630cce4&rid=200.gif&ct=g'
//   }, {
//     id: 4,
//     name: 'Chewbacca',
//     phoneNumber: '+250456784935',
//     image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
//   }
// ];
//
// let Contact = createReactClass({
//   render: function() {
//     return (
//       <li className="contact">
//         <img className="contact-image" src={this.props.image} width="60px" height="60px" />
//         <div className="contact-info">
//           <div className="contact-name"> {this.props.name} </div>
//           <div className="contact-number"> {this.props.phoneNumber} </div>
//         </div>
//       </li>
//     );
//   }
// });
//
// let ContactsList = createReactClass({
//   getInitialState: function() {
//     return {
//       displayedContacts: CONTACTS
//     };
//   },
//
//   handleSearch: function(event) {
//     let searchQuery = event.target.value.toLowerCase();
//     let displayedContacts = CONTACTS.filter(function(el) {
//       let searchValue = el.name.toLowerCase();
//       return searchValue.indexOf(searchQuery) !== -1;
//     });
//
//     this.setState({
//       displayedContacts: displayedContacts
//     });
//   },
//
//   render: function() {
//     return (
//       <div className="contacts">
//         <input type="text" className="search-field" onChange={this.handleSearch} />
//         <ul className="contacts-list">
//           {
//             this.state.displayedContacts.map(function(el) {
//               return <Contact
//                 key={el.id}
//                 name={el.name}
//                 phoneNumber={el.phoneNumber}
//                 image={el.image}
//               />;
//             })
//           }
//         </ul>
//       </div>
//
//     );
//   }
// });
//
// let Test = createReactClass({
//
//     render:function () {
//         return (
//           <div>lol</div>
//         );
//     }
//   }
// );
//
// ReactDOM.render(
//   <ContactsList />,
//   document.getElementById("content")
// );



// App
let App = createReactClass({
  /*setting state*/
  getInitialState: function() {
    return {
      bgColor: "orange"
    };
  },
  /*changes state*/
  handleColorChange: function (color) {
    // when we set state directly, react doesn't know
    // about it. that's why we use setState
    this.setState({ bgColor: color });
  },
  /*for the lifecycle methods*/
  updateBackgroundColor: function () {
    let body = document.querySelector('body');
    body.style.background = this.state.bgColor;
  },
  /*lifecycle methods*/
  componentDidMount: function () {
    this.updateBackgroundColor();
    console.log('mount ' + this.state.bgColor);
  },
  componentDidUpdate: function () {
    this.updateBackgroundColor();
    console.log('upd ' + this.state.bgColor);
  },
  render: function() {
    return (
      /* by calling the title here on the component, we can access this.props on header */
      <div className="foo">
        <h1>Hello, World!</h1>
        <label>What color?
          <ColorPicker value={this.state.bgColor} onColorChange={this.handleColorChange}/>
        </label>
      </div>
    )
  }
});

// ColorPicker component
let ColorPicker = createReactClass({
  propTypes: {
    value: PropTypes.string.isRequired,
    onColorChange: PropTypes.func
  },
  handleChange: function(e) {
    e.preventDefault();
    let color = e.target.value

    // If whoever rendered us (the ColorPicker) is interested
    // when the color changes, let them know
    if (this.props.onColorChange)
      this.props.onColorChange(color);
  },
  render: function() {
    return (
      <select value={this.props.value} onChange={this.handleChange}>
        <option value="orangered">orangered</option>
        <option value="teal">teal</option>
        <option value="orange">orange</option>
        <option value="indigo">indigo</option>
        <option value="red">red</option>
      </select>
    )
  }
});

ReactDOM.render(<App />, document.getElementById("content"));