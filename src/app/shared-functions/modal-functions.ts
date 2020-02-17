import { Injectable } from "@angular/core";
import * as $ from 'jquery';

@Injectable({
    providedIn:'root'
  })


export class ModalFunctions {

    openModal(thismodal){
        $(thismodal).css("display", "block");
        $(thismodal).addClass("show");
        $('.overlay').css("display", "block");
      }
    
      closeModal(thismodal) {
        console.log('close Modal')
        $(thismodal).css("display", "none");
        $(thismodal).removeClass("show");
        $('.overlay').css("display", "none");
      }
    
      showBtnLoader(){
        $('.btn-loading-content').css("display", "block");
        $('.btn-default-content').css("display", "none");
      }
    
      hideBtnLoader(){
        $('.btn-loading-content').css("display", "none");
        $('.btn-default-content').css("display", "block");
      }
    
}