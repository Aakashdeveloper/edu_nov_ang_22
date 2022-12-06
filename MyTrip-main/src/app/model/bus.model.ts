export interface Bus{
    busName: string;
    from: string;
    to: string;
    depTime: string;
    type: string;
    seatAvailable: boolean;
    fare: number;
    id: string,
}
export interface Seat {
    id:string,
    cost:string
}
export interface SeatSelection extends Seat{
    type: string
}