(function () {
  // open external links in new tabs
  var links = document.getElementsByTagName('a');
  var a, len = links.length;

  while (len--) {
    a = links[len];
    if (a.href.indexOf('mandy-ryan.com') === -1)
      a.target = "_blank";
  }
})();
