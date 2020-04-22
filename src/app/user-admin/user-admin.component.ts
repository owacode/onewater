import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { IPayPalConfig, ICreateOrderRequest } from "ngx-paypal";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-user-admin",
  templateUrl: "./user-admin.component.html",
  styleUrls: ["./user-admin.component.scss"]
})
export class UserAdminComponent implements OnInit {

  toggleDropdown(element){
    var panel = document.getElementById(element);
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
}

  constructor(public auth: AuthService, public router: Router) {}

  name;
  ngOnInit() {
    this.name = this.auth.name.split("%20").join(" ");
    this.initConfig();
    let toggleButton = document.querySelector('.sidebar-toggle');
    let optionBox = document.querySelector('.dashboard-sidebar');
    let options = document.querySelectorAll('.dashboard-sidebar .dashboard-menu ul li a');
    $(toggleButton).on("click",function(){
      if($(optionBox).hasClass("slide-in"))
      {
        $(optionBox).removeClass("slide-in");
        toggleButton.innerHTML = ` <i class="fa fa-bars" aria-hidden="true" style="font-size:1.5rem"></i>`;
      }
      else{
        $(optionBox).addClass("slide-in");
        toggleButton.innerHTML = ` <i class="fa fa-times" aria-hidden="true" style="font-size:1.5rem"></i>`;
      }

    });
    $(options).on("click",function(){
         $(optionBox).toggleClass("slide-in");
         toggleButton.innerHTML = ` <i class="fa fa-bars" aria-hidden="true" style="font-size:1.5rem"></i>`;
    });
  }

  public payPalConfig?: IPayPalConfig;
  showSuccess;
  private initConfig(): void {
    this.payPalConfig = {
      currency: "EUR",
      clientId: "sb",
      createOrderOnClient: data =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: "1.00",
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: "1.00"
                  }
                }
              },
              items: [
                {
                  name: "Enterprise Subscription",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "EUR",
                    value: "1.00"
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data, actions) => {
        // //console.log(
        //   "onApprove - transaction was approved, but not authorized",
        //   data,
        //   actions
        // );
        actions.order.get().then(details => {
          //console.log(
          //   "onApprove - you can get full order details inside onApprove: ",
          //   details
          // );
        });
      },
      onClientAuthorization: data => {
        //console.log(
        //   "onClientAuthorization - you should probably inform your server about completed transaction at this point",
        //   data
        // );
        let payment_info = {
          name: `${data.payer.name.given_name} ${data.payer.name.surname}`,
          email: data.payer.email_address,
          date: data.create_time
        };

        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        //console.log("OnCancel", data, actions);
      },
      onError: err => {
        //console.log("OnError", err);
      },
      onClick: (data, actions) => {
        //console.log("onClick", data, actions);
      }
    };
  }

  logout() {
    this.auth.logout();
  }

  deleteCookie(name) {
    this.createCookie(name, null);
  }

  createCookie(key, value) {
    let cookie = escape(key) + "=" + escape(value) + ";";
    document.cookie = cookie;
    //console.log(cookie);
    //console.log("Creating new cookie with key: " + key + " value: " + value);
  }
}
