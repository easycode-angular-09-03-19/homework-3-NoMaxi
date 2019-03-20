export interface ICar {
    name: string;
    mileage: number;
    fuelTankCapacity: number;
    fuel: number;
    characteristics: string[];

    drive(): void;

    refuel(): void;

    onClickHandler(e: Event): void;
}
