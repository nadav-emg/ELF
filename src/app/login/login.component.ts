import { Component } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
@Component({ 
    //selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent {
  isLoggingIn = true;

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    if (this.isLoggingIn) {
        // Perform the login
    } else {
        // Perform the registration
    }
  }
  forgotPassword() {
    prompt({
      title: "Forgot Password",
      message: "Enter the email address you used to register for APP NAME to reset your password.",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    }).then((data) => {
      if (data.result) {
        // Call the backend to reset the password
        alert({
          title: "APP NAME",
          message: "Your password was successfully reset. Please check your email for instructions on choosing a new password.",
          okButtonText: "Ok"
        })
      }
    });
  }
}