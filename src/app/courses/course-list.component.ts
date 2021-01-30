import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-123',
                duration: 120,
                rating: 5,
                releaseDate: 'Janeiro, 2, 2020'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 150.10,
                code: 'NET-01',
                duration: 180,
                rating: 4,
                releaseDate : 'Maio, 12, 2020'
            }
        ]
    }
}