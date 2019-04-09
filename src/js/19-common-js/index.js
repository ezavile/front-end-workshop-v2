var AvatarElement = require('./avatar-element');
var avatar = AvatarElement.render({pictureUrl: 'https://randomuser.me/api/portraits/men/2.jpg', userName: 'Edgar Zavala'});
document.querySelector('.hp_Avatar').replaceWith(avatar);
