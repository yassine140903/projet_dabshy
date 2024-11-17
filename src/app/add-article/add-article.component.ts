import { Component } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  title = '';
  price = '';
  category = '';
  gender = '';
  description = '';
  photos: File[] = [];

  categories = [
    { type: 'Upper Wear', items: ['T-shirt', 'Blouse', 'Sweater'] },
    { type: 'Bottom Wear', items: ['Jeans', 'Shorts', 'Skirt'] },
    { type: 'Outerwear', items: ['Jacket', 'Coat', 'Hoodie'] },
    { type: 'Footwear', items: ['Sneakers', 'Boots', 'Sandals'] }
  ];


  onFileSelect(event: any): void {
    const selectedFiles = Array.from(event.target.files) as File[];

    // Restrict to 5 files max
    if (selectedFiles.length + this.photos.length > 5) {
        alert("no more than 5pics");
        return;
    }

  const validFiles = selectedFiles.filter(file =>
      file.type.startsWith('image/')
    );

    if (validFiles.length < selectedFiles.length) {
      alert('Some files are not valid image files.');
    }

    // Add valid files to the photos array
    this.photos.push(...validFiles);
  }

  
}
