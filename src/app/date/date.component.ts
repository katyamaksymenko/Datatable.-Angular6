import { Component } from '@angular/core'

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less']
})
export class DateComponent {
    mfData: object = [
        {
          "colorName":"red",
          "hexValue":"#f00"
        }, {
          "colorName":"green",
          "hexValue":"#0f0"
        }, {
          "colorName":"blue",
          "hexValue":"#00f"
        }, {
          "colorName":"cyan",
          "hexValue":"#0ff"
        }, {
          "colorName":"magenta",
          "hexValue":"#f0f"
        }, {
          "colorName":"yellow",
          "hexValue":"#ff0"
        }, {
          "colorName":"black",
          "hexValue":"#000"
        }
    ]
}