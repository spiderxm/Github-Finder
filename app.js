//app.js
//search input
const github = new Github;
const searchuser = document.getElementById('search-user');

searchuser.addEventListener('keyup', (e) => {
    const usertext = e.target.value;
    if (usertext !== '') {
        console.log(usertext);
        github.getuser(usertext)
            .then(data => {
                console.log(data);
            })
    }
});
