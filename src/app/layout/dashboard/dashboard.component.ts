import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Juegos',
                text: 'Los mejores juegos de Resident Evil Aqui'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Peliculas',
                text: 'Ve Reseñas de las peliculas de Resident Evil'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Capturas',
                text: 'Las capturas de Pantalla mas Impresionantes'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Objetos Curativos`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lanzables`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
