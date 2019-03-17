var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".write-to-us");
var close = document.querySelector(".write-to-us-close");
var fullname = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var storage = localStorage.getItem("email");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("write-to-us-show");
  fullname.focus();
  if (storage) {
    email.value = storage;
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("write-to-us-show");
  popup.classList.remove("write-to-us-show-error");
});

form.addEventListener("submit", function(evt) {
  if (!email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("write-to-us-show-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("write-to-us-show-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("write-to-us-show")) {
      evt.preventDefault();
      popup.classList.remove("write-to-us-show");
    }
  }
});
