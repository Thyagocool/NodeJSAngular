import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent {
  @Input() post:Post[] = []
  @Output() showFormNew = new EventEmitter;
  @Output() showFormEdit = new EventEmitter;
  @Output() removePost = new EventEmitter;

  openModalNew(){
    this.showFormNew.emit();

  }

  openModalEdit(post:Post){
    this.showFormEdit.emit(post);
  }

  deletePost(post:Post) {
    if(confirm("Are you sure to delete " + post.id)) {
      this.removePost.emit(post)
    }
  }
}
