import './register-button.js';

class footerComponent extends HTMLElement {
    constructor() {
        super();

        this. attachShadow({ mode: 'open' });
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <footer>
                <div></div>
                <div class="button--container">
                    <register-button></register-button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </footer>

            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                footer {
                    display: grid;
                    grid-template-columns: 60% 40%;
                    max-width: 1340px;
                    height: 250px;
                    margin: 0 auto;
                    background-color: hsl(233, 26%, 24%);
                }
                .button--container {
                    display: grid;
                    justify-items: flex-end;
                    align-self: center;
                }
                .button--container p {
                    color: hsl(220, 1%, 73%);
                }
            </style>
        `;
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('footer-component', footerComponent);