let repositories = [];

addEventListener('load', () => {
    xmlHttpRequest('GET', 'https://api.github.com/users/schollsebastian/repos', handleResponse)
});

function showRepositories() {
    console.log(repositories);

    for (const repository of repositories) {
        let div = document.createElement('div');
        let htmlUrl = document.createElement('a');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let cloneUrl = document.createElement('input');
        let button = document.createElement('button');

        htmlUrl.href = repository.html_url;
        h2.textContent = repository.fork ? repository.full_name : repository.name;
        p.textContent = repository.description;
        cloneUrl.value = repository.clone_url;
        button.textContent = 'Copy';

        button.addEventListener('click', () => {
            cloneUrl.select();
            cloneUrl.setSelectionRange(0, 500);
            document.execCommand('copy');

            button.textContent = 'Copied!'
            setTimeout(() => {
                button.textContent = 'Copy'
            }, 2000);
        });

        htmlUrl.appendChild(h2);
        div.appendChild(htmlUrl);
        div.appendChild(p);
        div.appendChild(cloneUrl);
        div.appendChild(button);

        if (repository.has_pages) {
            let pagesUrl = document.createElement('a');

            pagesUrl.textContent = 'GitHub Page';
            pagesUrl.href = `https://schollsebastian.github.io/${repository.name}`;
            pagesUrl.classList.add('pagesUrl');

            div.appendChild(pagesUrl);
        }

        document.getElementById('repositories').appendChild(div);
    }
}

function handleResponse(load) {
    let link = load.target.getResponseHeader('link');
    
    repositories.push(... JSON.parse(load.target.responseText));

    if (link.includes('next')) {
        let url = link.split('>')[0].substring(1);
        xmlHttpRequest('GET', url, handleResponse);
    } else {
        showRepositories();
    }
}

function xmlHttpRequest(method, url, callback, body = null) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', callback);
    request.open(method, url);
    request.send(JSON.stringify(body));
}