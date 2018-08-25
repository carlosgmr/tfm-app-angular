import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { StorageService } from '../../../../shared/services/storage.service';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styles: []
})
export class UserReadComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  groups: Array<object>;
  load: boolean;
  loadGroups: boolean;

  constructor(
    private layoutService: LayoutService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.title = 'Detalle de usuario';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('');

    this.load = false;
    this.loadGroups = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.read(this.id)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });

    this.userService.listingGroup(this.storageService.getAppUser().id)
      .subscribe(response => {
        const validGroups = [];

        for (let i = 0; i < response.length; i++) {
          validGroups.push(response[i]['id']);
        }

        this.userService.listingGroup(this.id)
          .subscribe(response2 => {
            this.groups = [];

            for (let j = 0; j < response2.length; j++) {
              if (validGroups.indexOf(response2[j]['id']) !== -1) {
                this.groups.push(response2[j]);
              }
            }

            this.loadGroups = true;
          });
      });
  }
}
