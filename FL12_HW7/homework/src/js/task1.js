let checkLogin = prompt('Please, write your e-mail');
const MAXLENGTHLOGIN = 5;
const MAXLENGTHPASS = 6;

if (checkLogin === '' || checkLogin === null) {
  alert('Canceled');
} else if (checkLogin.length < MAXLENGTHLOGIN) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (
  checkLogin === 'user@gmail.com' ||
  checkLogin === 'admin@gmail.com'
) {
  let checkPassword = prompt('Please, write your password');
  if (checkPassword === '' || checkPassword === null) {
    alert('Canceled');
  } else if (
    (checkLogin === 'user@gmail.com' && checkPassword === 'UserPass') ||
    (checkLogin === 'admin@gmail.com' && checkPassword === 'AdminPass')
  ) {
    let checkConfirm = confirm('Do you want to change your password?');
    if (checkConfirm === false) {
      alert('You have failed the change.');
    } else {
      let checkOldPassword = prompt('Please, write the old password');
      if (checkOldPassword === '' || checkOldPassword === null) {
        alert('Canceled');
      } else if (
        (checkLogin === 'user@gmail.com' && checkOldPassword === 'UserPass') ||
        (checkLogin === 'admin@gmail.com' && checkOldPassword === 'AdminPass')
      ) {
        let newPassword = prompt('Please, write new password');
        if (newPassword === '' || newPassword === null) {
          alert('Canceled');
        } else if (newPassword.length < MAXLENGTHPASS) {
          alert('It’s too short password. Sorry.');
        } else {
          let newPasswordRepeat = prompt('Please, re-write new password');
          if (newPasswordRepeat !== newPassword) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}
