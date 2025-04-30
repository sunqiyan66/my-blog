
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  themeToggle.checked = saved === 'dark';
  themeToggle.addEventListener('change', () => {
    const mode = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  });
}

const params = new URLSearchParams(window.location.search);
const postFile = params.get('post');
if (postFile) {
  fetch('posts/' + postFile)
    .then(r => r.text())
    .then(md => {
      document.getElementById('post-content').innerHTML = marked.parse(md);
    });
} else if (document.getElementById('post-list')) {
  const posts = [
    { file: 'java.md', title: 'Learning Java Basics', date: '2025-04-30', tags: ['Java', 'Programming'] },
    { file: 'frontend.md', title: 'Intro to Front-end Web Development', date: '2025-04-28', tags: ['Web', 'HTML', 'CSS', 'JS'] },
    { file: 'balance.md', title: 'Balancing Coding and Campus Life', date: '2025-04-26', tags: ['Life', 'Tips'] },
  ];
  const container = document.getElementById('post-list');
  posts.forEach(p => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <h2><a href="post.html?post=${p.file}">${p.title}</a></h2>
      <p>${p.date} - ${p.tags.join(', ')}</p>
    `;
    container.appendChild(card);
  });
}
