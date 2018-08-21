import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private duration = 5000;
  messages: object = {
    'info': [],
    'success': [],
    'warning': [],
    'error': []
  };

  add(type: string, message: string) {
    if (this.messages.hasOwnProperty(type)) {
      this.messages[type].push(message);
      setTimeout(() => this.clear(type), this.duration);
    }
  }

  addApiError(error: object) {
    for (const field in error) {
      if (error.hasOwnProperty(field) && error[field] instanceof Array) {
        for (let i = 0; i < error[field].length; i++) {
          this.messages['error'].push(error[field][i]);
        }
      }
    }

    setTimeout(() => this.clear('error'), this.duration);
  }

  clear(type: string) {
    if (type === 'all') {
      this.messages['info'] = [];
      this.messages['success'] = [];
      this.messages['warning'] = [];
      this.messages['error'] = [];
    } else {
      if (this.messages.hasOwnProperty(type)) {
        this.messages[type] = [];
      }
    }
  }
}
