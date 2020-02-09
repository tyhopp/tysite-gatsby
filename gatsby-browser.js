// App styles
import './src/styles/main.css';
import './src/styles/prism.css';

// Components
import './src/components/ty-header/ty-header.js';
import './src/components/ty-card/ty-card.js';

// App level DOM adjustment
import {
  enableGetTemplateMethod,
  enableDarkModeFlag,
  enablePushStateNavigation
} from './src/utils/dom-util.js';

enableGetTemplateMethod();
enableDarkModeFlag();
enablePushStateNavigation();