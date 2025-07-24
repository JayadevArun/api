import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollComponent } from './poll/poll';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PollComponent,HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('poll-app');
}

