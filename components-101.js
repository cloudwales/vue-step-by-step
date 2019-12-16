Vue.component('task-list', {

    template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',

    data() {
        return {
            tasks: [
                { description: 'Goto store', completed: true },
                { description: 'Finish Screencast', completed: false },
                { description: 'Make Donation', completed: false },
                { description: 'Clear inbox', completed: false },
                { description: 'Make Dinner', completed: false },
                { description: 'Clean Room', completed: true },
            ]
        }
    }

});

// Single Task
Vue.component('task', {
    template: '<li><slot></slot></li>',
});

new Vue({
    el: '#root'
});