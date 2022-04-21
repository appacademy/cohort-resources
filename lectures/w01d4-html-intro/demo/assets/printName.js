window.onload = function () {
  (function userFormListener() {
    form = document.getElementById("user-form");
    form.addEventListener("submit", placeuser);
  })();
};

var placeuser = function (event) {
  event.preventDefault();
  var userElement = createuser(event);
  var userSection = document.getElementById('users');
  userSection.insertBefore(userElement, userSection.childNodes[2]);
};

var createuser = function (event) {
  var username = document.createTextNode(getUsername(event));

  var usernameHeader = document.createElement('h4');

  usernameHeader.appendChild(username);

  var userElements = [usernameHeader];
  var userElement = document.createElement('div');
  userElements.forEach(function (el) {
    userElement.appendChild(el);
  });
  userElement.id = username.textContent + '_user';
  userElement.className = 'user_user';

  return userElement;
};

var getUsername = function (event) {
  return event.target.children.username.value;
};
