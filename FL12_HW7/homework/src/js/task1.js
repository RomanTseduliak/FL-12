let emailAdd = prompt('Please, write your e-mail');
const emailU = 'user@gmail.com';
const passU = 'UserPass';
const emailA = 'admin@gmail.com';
const passA = 'AdminPass';
const emailLength = 5;
const passLength = 6;
if (emailAdd === '' || null) {
  alert('Canceled');
} else if (emailAdd.length < emailLength) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (emailAdd === emailU || emailA) {
  let curentPass = prompt('Please, write your password');
  if (curentPass === '' || null) {
    alert('Canceled');
  } else if (emailAdd === emailU && curentPass === passU || emailAdd === emailA && curentPass === passA ) {
    let changePass = confirm('Do you want to change your password?');
    if (changePass === false) {
      alert('You have failed the change.');
    } else {
      let checkPass = prompt('Please, write the old password');
      if (checkPass === '' || null) {
        alert('Canceled');
      } else if (emailAdd === emailU && checkPass === passU || emailAdd === emailA && checkPass === passA) {
        let newPass = prompt('Please, write new password');
        if (newPass === '' || null) {
          alert('Canceled');
        } else if (newPass.length < passLength) {
          alert('It’s too short password. Sorry.');
        } else {
          let newPassConfirm = prompt('Please, re-write new password');
          if (newPassConfirm !== newPass) {
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
