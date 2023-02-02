import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'static-web-app';
  footerCodes: string[] = [
    "model.FindAnnotation(SqlServerAnnotationNames.HiLoSequenceName)?.GetConfigurationSource();",
    "Assert.notNull(this.method, () -> \"Could not obtain target method from JoinPoint: '\" + jp + \"'\");",
    "<p>Your competent partner</p>",
    "\"launchUrl\": \"{Scheme}://{ServiceHost}:{ServicePort}\",",
    "powershell.exe -ExecutionPolicy ByPass ./msi/BuildInstaller.ps1"
  ]

  public openContactForm() {
    console.log("asd");
  }
}
