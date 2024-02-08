let young = prompt("Yoshingizni kiriting");
if (young <= 0 || young >= 150) {
  alert("Yosh bunchalik bulishi mumkin emas!");
  throw new Error('Hatolik yuz berdi')
} else {
    console.log('Yoshingizda hatolik bor');
} 

let tel = prompt("Telefon raqamingizni kiriting");
var regx = /^[7-9]\d{9}$/

if(tel.trim()=="") {
    alert('Iltimos Telefon raqamingizni kiriting')
}
else if((regx.test(tel))) {
    alert('Telefon raqamingiz to`g`ri kiritildi')
}
else {
    alert('Telefon raqam noto`g`ri kirittingiz')
    throw new Error('Hatolik yuz berdi')
} 

let poch = prompt("Elektron pochtangizni kiriting")
let regex = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/
if(poch.trim()=="") {
    alert('Email kiriting')
}
else if((regex.test(poch))) {
    alert('Email To`g`ri kiritildi')
}
else {
    alert('Email da hatolik')
    throw new Error('Hatolik yuz berdi')
}

