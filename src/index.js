import createClass from 'create-react-class';

var contacts = [
  {
    id: 1,
    name: 'Darth Vader',
    phoneNumber: '+1666638478347834',
    image: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/28/1446048221859/1d906578-19f7-4854-a5a1-3e9e9048bf4a-1020x612.jpeg?width=445&quality=45&auto=format&fit=max&dpr=2&s=9cd1d0a9e76a121fda19d09baec10655'
  }, {
    id: 2,
    name: 'Lol Kekovich',
    phoneNumber: '+166677777',
    image: 'https://i.insider.com/5d9b86105d21aa3ac8312d2f?width=700'
  }, {
    id: 3,
    name: 'Kek Lolov',
    phoneNumber: '+144477777',
    image: 'https://i.ytimg.com/vi/F1GezA5KfzE/maxresdefault.jpg'
  }
];

var ContactList = React.createClass({
  render: function () {
    return (
      <div>
        <ul>
          {
            contacts.map(function (el) {
              return <li>{el.name}</li>
            })
          }
        </ul>
      </div>
    )
  }

});