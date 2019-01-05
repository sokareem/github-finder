/**
 * @Sinmisola_Kareem
 * 
 *
 */

 //Initialize github
 const github = new GitHub;

 // Init UI
 const ui = new UI;

 // Search input
 const searchUser = document.getElementById('searchUser');

 // Search input event listener
 searchUser.addEventListener('keyup', (e) => {
  // get text that's being typed in
  const userText = e.target.value;

  if(userText !== ''){
    //Make http call
    github.getUser(userText).then(data => {
      if(data.profile.message === 'Not Found'){
        // Show alert
        ui.showAlert('User not Found','alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else{
    // Clear profile
    ui.clearProfile();

  }
 });