import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/messageService/message.service';

@Component({
  selector: 'dadb-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
