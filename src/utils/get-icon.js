// @flow
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'twitch':
      icon = ICONS.TWITCH;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
