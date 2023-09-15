import { Component } from '@angular/core';
import { SummaryService } from './service/summary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  summary: string = 'Escolha um short para resumir...'

  constructor(private _summaryService: SummaryService) {}

  convertShorts(videoURL: string) {

    if (!videoURL.includes("shorts")) {
      this.summary = 'Esta URL não parece ser de um short...'
    }

    const [_, params] = videoURL.split("/shorts/")
    const [videoID] = params.split("?si")

    this.summary = 'Obtendo o resumo do short...'

    this._summaryService.getText(videoID).subscribe(
      data => {
        this.audioSummary(data.result); // Passando a string diretamente para audioSummary
      }
    )
  }

  audioSummary(audioText: string) {
    this._summaryService.getsummary(audioText).subscribe(
      data => {
        this.summary = data.result
      }
    )
  }
}
