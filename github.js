class GitHub {
  constructor() {
    this.client_id = '7e9dae155401a0a37c04';
    this.client_secret = 'aee053d9142e54b11a00bc207f2375351da33567';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();
    return{
      profile,
      repos
    }
  }
}