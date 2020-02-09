import template from './ty-header.html';

class TyHeader extends HTMLElement {

  connectedCallback() {
    if (!this._initialized) {
      this.appendChild(document.getTemplate(template));
      this._initialized = true;
    }
  }
}

customElements.define('ty-header', TyHeader);