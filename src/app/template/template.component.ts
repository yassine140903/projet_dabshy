import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/articledatapass.service';
import { Article } from '../article.interface';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  article: Article | null = null;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    // Subscribe to the article data from the service
    this.articleService.currentArticle.subscribe((data) => {
      this.article = data;
    });

    // Optionally, if you need to handle dynamic article ID routing:
    /*this.route.paramMap.subscribe((params) => {
      const articleId = params.get('id');
      if (articleId) {
        // You can add logic here to fetch the article by its ID if you need to, 
        // but using the service data directly is simpler for this case
      }
    });*/
  }
}
