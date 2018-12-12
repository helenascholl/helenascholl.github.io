function addElements() {
    let githubPages = links['githubPages'];
    let repositories = links['repositories'];

    githubPages.sort();
    repositories.sort();

    for (let i in githubPages) {
        let anchor = document.createElement('a');
        let div = document.createElement('div');

        div.textContent = githubPages[i];

        anchor.href = 'https://schollsebastian.github.io/' + githubPages[i] + '/';
        anchor.target = '_blank';
        anchor.appendChild(div);

        document.getElementById('github-pages').appendChild(anchor);
    }

    for (let i in repositories) {
        let anchor = document.createElement('a');
        let div = document.createElement('div');

        div.textContent = repositories[i];

        anchor.href = 'https://github.com/schollsebastian/' + repositories[i];
        anchor.target = '_blank';
        anchor.appendChild(div);

        document.getElementById('repositories').appendChild(anchor);
    }
}