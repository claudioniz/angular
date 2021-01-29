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
                name: 'Angular Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-123',
                duration: 120,
                rating: 5.4,
                releaseDate: 'Janeiro, 2, 2020'
            },
            {
                id: 2,
                name: 'ASP.NET',
                imageUrl: '',
                price: 150.10,
                code: 'NET-01',
                duration: 180,
                rating: 7.8,
                releaseDate : 'Maio, 12, 2020'
            }
        ]
    }
}