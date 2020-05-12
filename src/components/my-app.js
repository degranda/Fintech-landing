import './header-component.js';
import './footer-component.js';
import './register-button.js';
import './advantage-component.js';
import './article-card.js';

class myApp extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' });
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            
            <main>
                <section class="header--section">
                    <header-component></header-component>
                </section>
                <section class="hero--section">
                    <div class="title--section">
                        <div>
                            <h1>Next generation <br> digital banking</h1>
                            <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
                            for spending, saving, budgeting, investing, and much more.</p>
                            <register-button></register-button>
                        </div>
                    </div>
                    <div class="hero--img">
                        <img src="../../images/image-mockups.png" />
                    </div>
                </section>
                <section class="advantage--section">
                    <div class="advantage--section-container">
                        <div class="advantage--title">
                            <h2>Why choose Easybank</h2>
                            <p>We leverahe Open Banking to turn your bank acount into your financial hub. <br> Control your financial like never beofre.</p>
                        </div>
                        <div class="advantage--articles-container">
                            <advantage-component></advantage-component>
                            <advantage-component></advantage-component>
                            <advantage-component></advantage-component>
                            <advantage-component></advantage-component>
                        </div>
                    </div>
                </section>
                <section class="articles--section">
                    <div class="articles--section-container">
                        <div>
                            <h2>Latest Articles</h2>
                        </div>
                        <div class="articles--container">
                            <article-card></article-card>
                            <article-card></article-card>
                            <article-card></article-card>
                            <article-card></article-card>
                        </div>
                    </div>
                </section>
                <section class="footer--section">
                    <footer-component></footer-component>
                </section>
            </main>

            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                main {
                    margin: 0 auto;
                    font-size: 18px;
                    overflow: hidden;
                }
                .header--section {
                    position: relative;
                    overflow: hidden;
                }
                .hero--section {
                    display: flex;
                    width: 100%;
                    height: 650px;
                    background-color: hsl(0, 0%, 98%);
                }
                .title--section {
                    display: flex;
                    align-items: center;
                    width: 50%;
                }
                .title--section div {
                    width: 430px;
                    margin: 0 auto;
                    padding-bottom: 100px;
                }
                .title--section div h1 {
                    font-size: 50px;
                    font-weight: 400;
                }
                .title--section div p {
                    font-weight: lighter;
                    color: hsl(220, 1%, 73%);
                }
                .hero--section .hero--img {
                    float: right;
                    width: 50%;
                    height: 100%;
                    background-image: url(../../images/bg-intro-desktop.svg);
                    /* background-size: cover; */
                    background-position: center;
                    background-repeat: no-repeat;
                    background-position-x: -50px;
                    background-position-y: -250px;
                }
                .hero--section .hero--img img  {
                    margin-top: -130px;
                    margin-left: 170px;
                }
                .advantage--section {
                    width: 100%;
                    height: 500px;
                    padding: 60px 0 20px 0;
                    background-color: hsl(220, 16%, 96%);
                }
                .advantage--section-container, .articles--section-container {
                    display: block;
                    max-width: 1340px;
                    margin: 0 auto;
                }
                .advantage--title p {
                    color: hsl(220, 1%, 73%);
                }
                .advantage--articles-container, .articles--container {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 60px;
                }
                .articles--section {
                    width: 100%;
                    height: auto;
                    padding: 60px 0;
                    background-color: hsl(0, 0%, 98%);
                }
                .footer--section {
                    background-color: hsl(233, 26%, 24%);
                }
            </style>
        `;
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('my-app', myApp);