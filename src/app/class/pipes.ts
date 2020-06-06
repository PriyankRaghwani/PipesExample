import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'exponentialStrength'
})

export class Pipes implements PipeTransform{
    transform(value: number, exponential?: number): number {
        return Math.pow(value,isNaN(exponential)? 1 : exponential);
    }
}
