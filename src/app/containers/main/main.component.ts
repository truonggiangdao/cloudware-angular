import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ContentService } from '@app/services/api/content/content.service';
import { ArticlesResponse } from '@app/common/classes/api/content/ArticlesResponse';
import { ContentStore } from '@app/store/content.store';
import { PostsResponse } from '@app/common/classes/api/content/PostsResponse';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewChecked, OnDestroy {

  dataLoaded = false;

  constructor(
    // private changeDetectorRef: ChangeDetectorRef,
    private contentService: ContentService,
    private contentStore: ContentStore,
  ) {}

  ngOnInit() {
    this.getAPIData();
  }

  ngAfterViewChecked() {
    // this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
  }

  getAPIData = () => {
    const getArticlesRequest = this.contentService.getArticles();
    const getPostsRequest = this.contentService.getPosts();
    forkJoin([getArticlesRequest, getPostsRequest]).subscribe((responses) => {
      // responses[0] is from getArticlesRequest
      this.contentStore.setArticles(responses[0].data);
      // responses[1] is from getPostsRequest
      this.contentStore.setPosts(responses[1].data);
      this.dataLoaded = true;
    });
  }
}
