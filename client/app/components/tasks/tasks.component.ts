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

    constructor(private _taskService: TaskService) {
        this._taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            })
    }


}