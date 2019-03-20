import {Component} from '@angular/core';
import {ICar} from '../../interfaces/ICar';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements ICar {
    public name = 'Toyota Camry';
    public mileage = 1000;
    public fuelTankCapacity = 70;
    public fuel: number = this.fuelTankCapacity;
    public characteristics: string[] = [
        'Max speed - 250 km/h',
        'Engine power - 200 hp',
        'Engine capacity - 2.5 L',
        'Fuel tank capacity - 70 L',
        'Fuel type - regular unleaded',
        'Transmission - 8-speed shiftable automatic',
        'Drive train - front wheel drive',
        'Cylinders - inline 6',
        'Valves number - 4'
    ];

    private _singleDriveDistance = 100;
    private _fuelConsumptionPer100Km = 9;
    private _singleDriveFuelConsumption: number = this._singleDriveDistance * (this._fuelConsumptionPer100Km / 100);

    constructor() {}

    /** Represents the car driving process */
    public drive(): void {
        this.mileage += this._singleDriveDistance;
        this.fuel -= this._singleDriveFuelConsumption;
    }

    /** Represents the car full refueling process */
    public refuel(): void {
        this.fuel = this.fuelTankCapacity;
    }

    /** Get the boolean value representing the car fuel tank state - nearly empty (filled for 30%) */
    private get _fuelTankIsNearlyEmpty() {
        return this.fuel <= this.fuelTankCapacity * 30 / 100;
    }

    /** Get the boolean value representing the car fuel tank state - empty */
    private get _fuelTankIsEmpty() {
        // it is conditionally accepted that the fuel tank is empty when it is not enough fuel to make a single drive
        return this.fuel < this._singleDriveFuelConsumption;
    }

    /** Handles the buttons click events */
    public onClickHandler(e: Event): void {
        const btnDrive = document.querySelector('.btn-drive');
        const btnRefuel = document.querySelector('.btn-refuel');
        if (e.target === btnDrive) {
            this.drive();
        }

        if (e.target === btnRefuel) {
            this.refuel();
        }
    }
}
