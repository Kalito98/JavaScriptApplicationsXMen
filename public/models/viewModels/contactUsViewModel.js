class Contact {
    constructor(name) {
        this.name = name;
        this.githubProfil = githubProfil;
       // return this;
    }

    get getName() {
        return this.name;
    }

    get getGithubProfil() {
        return this.githubProfil;
    }

    set setGithubProfil(value) {
        this.githubProfil = value;
        return this;
    }
}

export default Contact;
