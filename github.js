class Github {
    constructor() {

    }

    async getuser(user) {
        const profileresponse = await fetch(`https://api.github.com/users/${user}`);
        const profiledata = await profileresponse.json();
        return {

            profile: profiledata

        }

    }
}