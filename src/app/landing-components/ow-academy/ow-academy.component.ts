import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { InstructorService } from 'src/app/instructors/instructor-admin/instructor.service';

@Component({
  selector: 'app-ow-academy',
  templateUrl: './ow-academy.component.html',
  styleUrls: ['./ow-academy.component.scss']
})
export class OwAcademyComponent implements OnInit {
  toRender = 'signup';
  form:FormGroup;
  drawingForm:FormGroup;
  public submitted: Boolean = false;
  public drawingSubmitted: Boolean = false;
  constructor( public modal: ModalFunctions, public auth: InstructorService) { }

  ngOnInit() {
 
    this.drawingForm = new FormGroup({
      firstname: new FormControl(null, {validators:[Validators.required]}),
      lastname: new FormControl(null, {validators:[Validators.required]}),
      organization: new FormControl(null, {validators:[Validators.required]}),
      email: new FormControl(null, {validators:[Validators.required,Validators.email]})
    })
  }


  submitDrawingForm(){
    this.drawingSubmitted = true;
    //console.log(this.form.value);
    if(this.drawingForm.invalid){
      this.modal.hideBtnLoader();
      //console.log('invalid reset form');
      return;
    }

    //console.log(this.drawingForm.value,'after reset');
    this.auth.registerInstructorForDrawing(this.drawingForm.value)
    .subscribe(result=> {
      //console.log(result);
      this.modal.hideBtnLoader();
      this.modal.closeModal('#drawingModal');
      this.modal.openModal('#drawingSuccess');
      this.drawingForm.reset();
      this.drawingSubmitted = false;
    })

  }

}
