import { Component } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Task } from "../../../Task";
import { TaskService } from "../../services/task.service";

@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'tasks.component.html'
})

export class TaskComponent {
    tasks: Task[];
    title: string;
    description: string;

    constructor(private _taskService: TaskService) {
        this._taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            })
    }

    onSubmit(event: any){
        event.preventDefault();
        var newTask = {
            title: this.title,
            description: this.description,
            completed: false
        }
        
        this._taskService.addTask(newTask)
            .subscribe(task => {
                this.tasks.push(task);
            });
    }

    deleteTask(id: any){
        var tasks = this.tasks;

        this._taskService.deleteTask(id).subscribe(data =>{
            console.log(data.n);
            if(data.n == 1){
                for(var i = 0; i < tasks.length; i++){
                    if(tasks[i]._id == id){
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    }

    updateStatus(task: Task){
        console.log("Update status");
    }
}