const {createApp} = Vue;

createApp({
    data() {
        return {
            // data
            newTask: [],

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

        // per eliminere i task dalla lista 
        deleteTask(taskIndex){
            this.toDoList.splice(taskIndex, 1)
        },

        addTask(){
            this.toDoList.push({text: this.newTask, done: false});

            // cancello il contenuto del campo di input
            this.newTask = "";
        },
    },
}).mount('#app');