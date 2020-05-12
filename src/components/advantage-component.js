

class advantageComponent extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' });

    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <article>
                <img src="../../images/icon-online.svg" />
                <h4>Online Banking</h4>
                <p>Our modenr web and mobile applications allow you to keep track of your finances wherener you are in the world.</p>
            </article>

            ${this.getStyles()}
        `; 
    }
    getStyles() {
        return `
            <style>
                article {
                    max-width: 320px;
                }
                article p {
                    width: 80%;
                    color: hsl(220, 1%, 73%);
                }
            </style>
        `;
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('advantage-component', advantageComponent);