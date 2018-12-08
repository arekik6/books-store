import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  private _ch = '404 not found';
  public get ch() {
    return this._ch;
  }
  public set ch(value) {
    this._ch = value;
  }

    transform(items: any[], term: string): any {
        if ( term === undefined) {return items; }
        if  (items.length === 0) { return this.ch; }
        return items.filter(item => item.name.indexOf(term) !== -1);
    }
}
