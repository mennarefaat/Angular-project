import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpeakersService } from 'src/app/services/speakers.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-speakers-add',
  templateUrl: './speakers-add.component.html',
  styleUrls: ['./speakers-add.component.css']
})
export class SpeakersAddComponent implements OnInit {
  speaker:Speakers=new Speakers('','','','','','','')
  speakers:Speakers[]=[]
  file:any
  sub:Subscription|null=null;
  heroForm: FormGroup | undefined;
  hero: any;
  name=""


  onFileChange(s:any){
    this.file=s.target.files[0];
  }
  save(){
    this.speakerServe.addSpeakers(this.speaker,this.file).subscribe(a=>console.log(a));
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    console.log("destroued")
  }

  constructor(public speakerServe:SpeakersService) { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4)
    ]),
    

      })
    } 
}
