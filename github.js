class Github {
    constructor() {
  
    }

    async getuser(user) {
        const abc = `https://api.github.com/users/${user}`;
        const profileresponse = await fetch(abc);
        const profiledata = await profileresponse.json();
        return {

            profile: profiledata

        }

    }
}