import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpeakersService } from 'src/app/speakers.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent implements OnInit {

  constructor(public speakerServe:SpeakersService) { }
  speakerDetailsId=0
  speakerEditId=0
  speakerDeleteId=0
  speakers:Speakers[]=[]
  sub:Subscription|null=null;

  ngOnInit(): void {
    this.speakerServe.getAllSpeakers().subscribe(speaker => {this.speakers=speaker})
  }

}
