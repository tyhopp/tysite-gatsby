// App styles
import './src/styles/main.css';
import './src/styles/prism.css';

// Component styles
import './src/components/ty-header/ty-header.js';
import './src/components/ty-header/ty-header.css';

// App level DOM adjustment
import {
  enableGetTemplateMethod,
  enablePushStateNavigation
} from './src/utils/dom-util.js';

enableGetTemplateMethod();
enablePushStateNavigation();