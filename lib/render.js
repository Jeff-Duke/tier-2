const {$, $contactList} = require('./_elements.js');

const renderContact = (contact) => {
  console.log(contact);
  // return $contactList.append($(`
  //   <p class="contact-name">${contact.firstName} + ' ' + ${contact.lastName}</p>
  //   `));
};


module.exports = renderContact;
