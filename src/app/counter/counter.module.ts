import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter.component';
import { counterReducer } from './counter.reducer';

@NgModule({
    declarations: [
        CounterComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forFeature('count', counterReducer)
    ],
    exports: [CounterComponent]
})
export class CounterModule { }
