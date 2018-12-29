import { Component } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs/dialogs";
import { UserService } from "~/app/services/user.service";
import { User } from "~/modules/user.module";
import { Router } from "@angular/router";

@Component({ 
    //selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent {
  
  user: User;
  isLoggingIn = true;
/**
 *
 */
constructor(private userService: UserService, private router: Router) {}
  

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    if (this.isLoggingIn) {
        const authenticate=this.userService.login(this.user);
        if (authenticate)
        {
          
        }
    } else {
        // Perform the registration
    }
    this.router.navigate(["/events"]);
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