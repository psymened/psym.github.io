if (navigator.userAgent.indexOf('Android') > 0 || navigator.userAgent.indexOf('iPhone') > 0) {
  document.write('<link rel="stylesheet" href="m.styles.css" type="text/css">');
}
else {
  document.write('<link rel="stylesheet" href="styles.css" type="text/css">');
}
