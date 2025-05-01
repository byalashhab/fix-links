const origin = window.location.origin;
const links = document.querySelectorAll("a");

links.forEach((a) => {
  if (a.href.startsWith(origin)) {
    a.target = "_self";
  } else {
    a.target = "_blank";
  }
});
