const url = new URL(window.location.href);

if (url.hostname === 'localhost') {
  url.port = '7070';
}

if (url.hostname === 'ayostar.github.io') {
  url.hostname = 'https-github-com-ayostar-8-ra-homework.onrender.com';
  url.protocol = 'https';
}

const root = url;
root.pathname = '';

const links = root.origin;

export default links;
