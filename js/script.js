const {createApp} = Vue;

createApp({
    data() {
        return {
            // data
            toDoList: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: "Finire l'esercizio di oggi",
                    done: false,
                },
                {
                    text: "Pulire casa",
                    done: true,
                },
                {
                    text: "Comprare il pane",
                    done: false,
                },
                {
                    text: "Portare fuori il cane",
                    done: true,
                },
            ]
        }
    },
    methods: {
        // funzioni e metodi 
    },
}).mount('#app');