import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 0) {
      return 'Pending'
    } else if(value === 1) {
      return 'Delivered'
    } else {
      return 'Cancelled'
    }
  }

}
