import { Component, Input, OnInit } from '@angular/core';
import { TreedoMetaInfo } from '../TreedoMetaInfo';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
})
export class FileCardComponent implements OnInit {
  @Input('file') file: TreedoMetaInfo = null;

  thumbnailUrl: string = '';
  iconUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.file) {
      if (this.file.type === 'folder') {
        this.thumbnailUrl = '/assets/images/icons/folder-file-thumbnail.png';
        this.iconUrl = '/assets/images/icons/folder-file-icon.png';
      } else if (this.file.type === 'treedo') {
        this.thumbnailUrl = '/assets/images/icons/treedo-file-thumbnail.png';
        this.iconUrl = '/assets/images/icons/treedo-file-icon.png';
      }
    }
  }
}
