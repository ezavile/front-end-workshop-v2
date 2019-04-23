require('reset-css');
require('./css/globals.css');
require('./css/icon-fonts.css');
require('./css/utils.css');
require('./css/link.css');
require('./css/header.css');
require('./css/cover.css');
require('./css/title.css');
require('./css/button.css');
require('./css/avatar.css');
require('./css/list-campaigns.css');
require('./css/campaign-card.css');
require('./css/footer.css');

var TitleElement = React.createElement('h1', {}, 'Welcome to Hopets!');
var container = document.getElementById('root');

ReactDOM.render(TitleElement, container);
