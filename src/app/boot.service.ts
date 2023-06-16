import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';




@Injectable({
    providedIn: 'root'
})

export class BootService{



    constructor(private location: Location, private http: HttpClient) { }
    goBack(): void {
        this.location.back();
    };
    

    private getListURL = 'http://localhost:3000/get-listpost';  // URL to web api
    private getList1URL = 'http://localhost:3000/get-post';  // URL to web api
    private post1URL = 'http://localhost:3000/post-createpost';  // URL to web api
    private putList1URL = 'http://localhost:3000/put-updatepost';  // URL to web api
    private deleteURL = 'http://localhost:3000/delete-deletepost';  // URL to web api




    getListPost(): Observable <Post[]>{
        return this.http.get<Post[]>(this.getListURL)
    }

    getPost(id: number){
        const url = `${this.getList1URL}/${id}`;
        return this.http.get<Post>(url)
    }
    
    postPost(post: Post){
        return this.http.post<any>(this.post1URL, post)
    }

    putPost(post: Post){
        return this.http.put<any>(this.putList1URL, post)
    }
    
    deletePost(id?: number){
        const url = `${this.deleteURL}/${id}`;
        return this.http.delete<Post>(url)
    }
}