import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Editor, NgxEditorComponent, NgxEditorMenuComponent, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NgxEditorComponent, NgxEditorMenuComponent, FormsModule, ReactiveFormsModule],
})
export class App implements OnInit, OnDestroy {
  html = '';
  editor: any;
  blogForm: any;

  constructor(private fb: FormBuilder) { }



  customToolbar: Toolbar = [
    ['bold', 'italic', 'underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    ['link', 'image'],
    ['horizontal_rule'],
  ];
  submittedHtml: any;

  onSubmit(): void {
    this.submittedHtml = this.blogForm.value.blogText;
    console.log('Form submitted:', this.blogForm.value);
  }



  ngOnInit(): void {
    this.editor = new Editor();
    this.blogForm = this.fb.group({
      blogText: [''],
    });

  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}