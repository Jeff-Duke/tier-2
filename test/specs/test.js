const assert = require('assert');

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
  	browser.url('/');
  	var title = browser.getTitle();
  	assert.equal(title, 'Kyle, Jeff & Kirsten - Tier 2 Turing');
  });
});

describe('login screen', function(){
  it('should have an input field for username', function() {
    browser.url('/login-screen.html');
    assert.equal(browser.isExisting('#username'), true);
  });

  it('should have an input field for a password', function() {
    browser.url('/login-screen.html');
    assert.equal(browser.isExisting('#password'), true);
  });

  it('should have a sign-in button', function() {
    browser.url('/login-screen.html');
    assert.equal(browser.isExisting('#sign-in'), true);
  });

  it('should have a google login button', function() {
    browser.url('/login-screen.html');
    assert.equal(browser.isExisting('#google-login'), true);
  });
});

describe('home screen', function(){
  it('should have a button to link to the user\'s profile', function() {
    browser.url('/');
    assert.equal(browser.isExisting('#user-profile-link'), true);
    browser.click('#user-profile-link');
    assert.equal(browser.getUrl(), 'http://localhost:8080/user-profile.html');
  });

  it('should have a button to link to adding a new contact', function() {
    browser.url('/');
    assert.equal(browser.isExisting('#add-new-contact-link'), true);
    browser.click('#add-new-contact-link');
    assert.equal(browser.getUrl(), 'http://localhost:8080/add-new-contact.html');
  });

  it('should have a button to link to the contact list', function() {
    browser.url('/');
    assert.equal(browser.isExisting('#contact-list-link'), true);
    browser.click('#contact-list-link');
    assert.equal(browser.getUrl(), 'http://localhost:8080/contact-list.html');
  });
});
