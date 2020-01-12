class Github {
    constructor() {
        this.repos_count = 5;
    }

    async getuser(user) {
        const profileresponse = await fetch(`https://api.github.com/users/${user}`);
        const profilerepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}`);
        const profile = await profileresponse.json();

        const repos = await profilerepos.json();
        return {

            profile,
            repos

        }
    }

}