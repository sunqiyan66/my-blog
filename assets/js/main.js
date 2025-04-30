
const params = new URLSearchParams(window.location.search);
const postFile = params.get('post');
if (postFile && document.getElementById('post-content')) {
  fetch('posts/' + postFile)
    .then(res => res.text())
    .then(md => {
      document.getElementById('post-content').innerHTML = marked.parse(md);
    });
}
