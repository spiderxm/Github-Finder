const github = new Github;
const ui = new UI;

const searchuser = document.getElementById('search-user');

searchuser.addEventListener('keyup', (e) => {
    const usertext = e.target.value;
    if (usertext !== '') {
        console.log(usertext);
        github.getuser(usertext)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //show alert 
                } else {
                    //show profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        //clear profile
    }
});