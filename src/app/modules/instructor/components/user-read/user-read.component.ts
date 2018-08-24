import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { StorageService } from '../../../../shared/services/storage.service';
import { UserService } from '../../../../shared/services/user.service';
import { InstructorService } from '../../../../shared/services/instructor.service';

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
    private userService: UserService,
    private instructorService: InstructorService
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

    this.instructorService.listingGroup(this.storageService.getAppUser().id)
      .subscribe(response => {
        const validGroups = [];

        for (let i = 0; i < response.length; i++) {
          validGroups.push(response[i]['id']);
        }

        this.userService.listingGroup(this.id)
          .subscribe(response2 => {
            this.groups = [];
            const indexGroups = [];

            for (let j = 0; j < response2.length; j++) {
              if (validGroups.indexOf(response2[j]['id']) !== -1) {
                response2[j]['questionarys'] = [];
                this.groups.push(response2[j]);
                indexGroups.push(response2[j]['id']);
              }
            }

            this.userService.questionnairesMade(this.id)
              .subscribe(response3 => {
                let indexGroup;

                for (let k = 0; k < response3.length; k++) {
                  indexGroup = indexGroups.indexOf(response3[k]['group']['id']);

                  if (indexGroup !== -1) {
                    this.groups[indexGroup]['questionarys'].push(response3[k]);
                  }
                }

                this.loadGroups = true;
              });
          });
      });
  }
}
