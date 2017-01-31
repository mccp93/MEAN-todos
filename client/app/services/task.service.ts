import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map"; 
import { Task } from "../../Task";

@Injectable()
export class TaskService{

    constructor(private http: Http){
        console.log("Task service up and running.");
    }

    getTasks(){
        return this.http.get("/api/task")
            .map(res => res.json())
    }

    addTask(task: Task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }

    deleteTask(task_id: any){
        return this.http.delete('/api/task/' + task_id)
            .map(res => res.json());
    }

}