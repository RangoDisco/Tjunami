import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncator',
})
export class TruncatorPipe implements PipeTransform {
  transform(value: string, nbCut: number): string {
    return value.slice(0, nbCut) + '...';
  }
}
