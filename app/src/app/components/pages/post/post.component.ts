import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(private service: PostService) {
    this.getPosts(null);
  }

  operatorType: string = '';
  display: boolean = false;
  posts: Post[] = [];
  post: Post = {};
  titlePage: string = 'Cadastro de Usuários';

  ngOnInit() {}

  getPosts(event: any) {
    this.service
      .selectPosts()
      .pipe(
        tap({
          next: data => this.posts = data,
          error: err => console.error(err),
        })
      )
      .subscribe();
  }

  openDialogEdit(post: any) {
    this.post = post;
    this.display = !this.display;
    this.operatorType = 'edit';
    this.getPosts(null);
  }

  openDialogNew() {
    this.display = !this.display;
    this.operatorType = 'new';
    this.getPosts(null);
  }

  deletePost(post: Post){
    const id: any = post.id;
    this.service.deletePost(id).pipe(
      tap({
        next: res => {
          this.getPosts(null);
        },
        error: erro => console.log(erro)
      })
    ).subscribe()
  }
}
