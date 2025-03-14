import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent implements OnInit {
  reviews: any[] = [];
  newReview = { rating: 5, comment: '' };
  routeId!: string;
  isSubmitting = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.routeId = id;
    } else {
      // handle the case when id is null
      console.error('Route ID is null');
    }
    this.fetchReviews();
  }

  fetchReviews() {
    console.log('📡 Fetching reviews for routeId:', this.routeId);
  
    this.http.get(`/api/reviews/${this.routeId}`).subscribe({
      next: (reviews: any) => {
        this.reviews = reviews;
        console.log('✅ Reviews fetched successfully:', reviews);
      },
      error: (err) => {
        console.error('❌ Failed to fetch reviews:', err);
        alert('Error fetching reviews. Check console for details.');
      }
    });
  }

  submitReview() {
    if(!this.newReview.comment.trim()) {
      alert('Please enter a comment');
      return;
    }

    this.isSubmitting = true;
    
    const review = { ...this.newReview,
       routeId: this.routeId, 
       userId: '67cd82c2aeb0d89a5264eb77' }; // Replace with actual customer ID
    
       this.http.post('/api/reviews', review).subscribe({
      next: () => {
        this.fetchReviews();
        this.newReview = { rating: 5, comment: '' };
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Error submitting review:', err);
        alert('Failed to submit review. Please try again later.');
        this.isSubmitting = false;
      }
    }) 
}

}