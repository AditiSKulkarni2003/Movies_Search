import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-blog-post-component',
  templateUrl: './blog-post-component.component.html',
  styleUrl: './blog-post-component.component.css'
})
export class BlogPostComponentComponent {
  @Input() title: string | undefined;
  @Input() content: string |undefined;

}
