class Contact {
  constructor(args) {
    this.contactName = args.contactName;
    this.companyName = args.companyName || null;
    this.primaryEmail = args.primaryEmail || null;
    this.primaryPhone = args.primaryPhone || null;
    this.primarySocial = args.primarySocial || null;
  }
}

module.exports = Contact;
