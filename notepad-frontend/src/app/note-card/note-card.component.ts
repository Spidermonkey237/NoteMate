import { style } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})


export class NoteCardComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  @ViewChild('truncator', { static: true }) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true }) bodyText: ElementRef<HTMLElement>;
  @ViewChild('noteP', { static: true }) noteP: ElementRef<HTMLElement>;

  constructor(private renderer :Renderer2) {
  }

  ngOnInit(): void {
    let sytle = window.getComputedStyle(this.bodyText.nativeElement, null);
    //let viewableHeight = parseInt(style.getPropertyValue("height"), 10);
  }

  ngAfterViewInit() {

    if (this.noteP.nativeElement.scrollHeight > this.bodyText.nativeElement.clientHeight) {
        this.renderer.setStyle(this.truncator.nativeElement, 'display','block');
    }
    else{
      this.renderer.setStyle(this.truncator.nativeElement, 'display','none');
    }


  }

}
