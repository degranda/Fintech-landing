
class articleCard extends HTMLElement {
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
                <img src="../../images/image-currency.jpg" />
                <div class="post--info-container">
                    <span>By Claire Robinson</span>
                    <h4>Receive money in anycurrency with no fees</h4>
                    <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                </div>
            </article>

            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                article {
                    max-width: 320px;
                    background-color: white;
                    cursor: pointer;
                }
                article:hover {
                    color: hsl(220, 1%, 73%);
                }
                article img {
                    width: 100%;
                }
                .post--info-container {
                    padding: 30px 25px;
                }
                .post--info-container span {
                    color: hsl(220, 1%, 73%);
                    font-size: 14px;
                }
                .post--info-container p {
                    color: hsl(220, 1%, 73%);
                }
            </style>
        `;
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('article-card', articleCard);