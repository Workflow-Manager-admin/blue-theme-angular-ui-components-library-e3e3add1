import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* build fix: temporarily remove MaterialBlueLibModule import
import { MaterialBlueLibModule } from '../../projects/material-blue-lib/src/public-api';
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule /*, MaterialBlueLibModule */],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';

  // Demo items for accordion usage demo
  accordionItems = [
    {
      title: "Overview",
      description: "Summary panel",
      content: "This is the overview panel of the material-blue-lib Accordion."
    },
    {
      title: "Features",
      description: "Key points",
      content: "Reusable Angular Material wrapper components styled in blue."
    },
    {
      title: "Instructions",
      description: "How to use",
      content: "Import MaterialBlueLibModule and use <material-blue-accordion> in your template."
    }
  ];
}
