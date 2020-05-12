import './register-button.js';

class headerComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <header>
                <section class="logo--container">
                    <img src="../../images/logo.svg" />
                </section>
                <section class="nav--container">
                    <ul>
                        <li>
                            <a href="#" >Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Carrers</a>
                        </li>
                    </ul>
                </section>
                <section class="button--container">
                    <register-button></register-button>
                </section>
            </header>

            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                :host {
                    --gradient-color: hsl(136, 65%, 51%);
                }
                header {
                    display: grid;
                    max-width: 1440px;
                    margin: 0 auto;
                    grid-template-columns: 20% 60% 20%;
                    height: 60px;
                    background-color: white;
                }
                .logo--container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .logo--container img {
                    width: 100px;
                    height: 15px;
                }
                .nav--container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .nav--container ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0;
                    width: 60%;
                    height: 100%;
                    list-style: none;
                }
                .nav--container ul li {
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .nav--container ul li:hover {
                    border-bottom: 5px solid var(--gradient-color);
                    box-sizing
                }
                .nav--container ul a {
                    color: hsl(220, 1%, 73%);
                    text-decoration: none;
                }
                .button--container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            </style>
        `; 
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('header-component', headerComponent);