import { Component } from '@angular/core';
import { Store } from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-pro-state-management';
    todos$ = this.store.select<any[]>('todos');

    constructor(private store: Store) {
        this.store.set('todos', [{ id: 1, name: 'Eat dinner' }, { id: 2, name: 'Do washing' }]);
    }
}
