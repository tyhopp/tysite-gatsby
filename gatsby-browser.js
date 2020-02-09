// App styles
import './src/styles/main.css';
import './src/styles/prism.css';

// Components
import './src/components/ty-header/ty-header.js';

// App level DOM adjustment
import {
  enableGetTemplateMethod,
  enablePushStateNavigation
} from './src/utils/dom-util.js';

enableGetTemplateMethod();
enablePushStateNavigation();