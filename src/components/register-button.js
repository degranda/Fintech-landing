
class registerButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `

            <button>Register Invite</button>

            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                button {
                    width: 150px;
                    height: 45px;
                    border-radius: 40px;
                    color: white;
                    font-weight: 800;
                    border: none;
                    background: linear-gradient(.25turn,hsl(136, 65%, 51%), hsl(192, 70%, 51%));
                    cursor: pointer;
                }
            </style>
        `;
    }

    connectedCallback() {
        this.render();
    }

}

customElements.define('register-button', registerButton);