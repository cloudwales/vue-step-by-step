// All Tabs
Vue.component('tabs', {

    template: `
    <div>

        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" v-bind:class="{ 'is-active' : tab.isActive }">
                    <a :href="tab.href" v-on:click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>

    </div>
    `,

    data() {
        return {
            tabs: []
        };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
            });
        }
    }

});


// Single Tab
Vue.component('tab', {

    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        }
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected
    }

});


new Vue({

    el: '#root',

    data: {
        showModal: false
    }

});

