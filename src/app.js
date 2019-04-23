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

var Card = function(props) {
  var name = React.createElement('h3', {}, props.name);
  var details = React.createElement('p', {}, props.details);

  return React.createElement('article', {}, [name, details]);
};

var CampaignAElement = React.createElement(Card, { name: 'Campaign A', details: 'details about campaign A...' });
var CampaignBElement = React.createElement(Card, { name: 'Campaign B', details: 'details about campaign B...' });

var AppElement = React.createElement('div', {}, [TitleElement, CampaignAElement, CampaignBElement]);
var container = document.getElementById('root');

ReactDOM.render(AppElement, container);
