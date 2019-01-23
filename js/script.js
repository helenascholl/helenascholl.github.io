function addElements() {
    let githubPages = links['githubPages'];
    let repositories = links['repositories'];

    githubPages.sort();
    repositories.sort();

    for (let githubPage of githubPages) {
        let a = document.createElement('a');
        let div = document.createElement('div');

        div.textContent = githubPage;

        a.href = 'https://schollsebastian.github.io/' + githubPage + '/';
        a.target = '_blank';
        a.appendChild(div);

        document.getElementById('github-pages').appendChild(a);
    }

    for (let repository of repositories) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let div = document.createElement('div');
        let a = document.createElement('a');
        let form = document.createElement('form');
        let input = document.createElement('input');

        div.textContent = repository;

        a.href = 'https://github.com/schollsebastian/' + repository;
        a.target = '_blank';
        a.appendChild(div);

        input.type = 'text';
        input.value = 'https://github.com/schollsebastian/' + repository + '.git';

        form.appendChild(input);

        td1.appendChild(a);
        td2.appendChild(form);

        tr.appendChild(td1);
        tr.appendChild(td2);

        document.getElementById('table').appendChild(tr);
    }
}