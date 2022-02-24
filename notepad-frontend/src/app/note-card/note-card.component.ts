import { style } from '@angular/animations';
import { outputAst } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})


export class NoteCardComponent implements OnInit {

  @Input() title: string ="";
  @Input() body: string ="";
  @Input() link: string ="";


  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator', { static: true }) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true }) bodyText: ElementRef<HTMLElement>;
  @ViewChild('noteP', { static: true }) noteP: ElementRef<HTMLElement>;

  constructor(private renderer :Renderer2) {
  }

  ngOnInit(): void {
    let sytle = window.getComputedStyle(this.bodyText.nativeElement, null);
    
  }

  ngAfterViewInit() {

    if (this.noteP.nativeElement.scrollHeight > this.bodyText.nativeElement.clientHeight) {
        this.renderer.setStyle(this.truncator.nativeElement, 'display','block');
    }
    else{
      this.renderer.setStyle(this.truncator.nativeElement, 'display','none');
    }
  }

  deleteButton(){
    this.deleteEvent.emit();
  }
}
