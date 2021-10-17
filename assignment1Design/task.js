const taskTemplate = document.createElement('template');
taskTemplate.innerHTML = `
<link href="index.css" rel="stylesheet" type="text/css" />

<div class="task">
    <label>
        <h2 class="task-heading">e-mail processing</h2>   
        <span>art&amp;&amp;code, personal</span>
        <div class="user">30</div>
        <span class="taskStatus">days ago</span>
    </label>
</div>
`

class Task extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(taskTemplate.content);
    }
}

customElements.define('task-component', Task);