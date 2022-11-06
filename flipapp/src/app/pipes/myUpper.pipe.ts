import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'MyUpper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value:string,kindOf:string){
        if(kindOf == 'Upper'){
            value = value.toUpperCase();
        }else if(kindOf == "titleCase"){
            value = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        }
        else{
            value = value.toLowerCase();
        }
        return value
    }
}