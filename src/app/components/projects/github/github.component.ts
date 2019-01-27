import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { GithubService } from 'src/app/services/github.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GithubComponent implements OnInit {
  dataSource: MatTableDataSource<GithubRepository>;
  columnsToDisplay = ['name', 'description', 'private', 'html_url'];
  expandedElement: GithubRepository | null;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getRepositories().subscribe(res => {
      if (res) {
        this.dataSource = new MatTableDataSource(res);
      }
    })
  }

}

export interface GithubRepository {
  name: string;
  description: string;
  private: boolean;
  html_url: string;
}
