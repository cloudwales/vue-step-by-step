Vue.component('message', {
    props: [
        'title',
        'body'
    ],

    data() {
        return {
            isVisable: true
        }
    },

    template: `
        <article class="message" v-show="isVisable">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" v-on:click="isVisable = false" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `

});

new Vue({
    el: '#root'
});



