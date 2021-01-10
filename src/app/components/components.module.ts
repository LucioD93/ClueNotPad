import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotePadComponent } from './note-pad/note-pad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { PanelWrapperComponent } from './note-pad/panel-wraper.component';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';


const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    NotePadComponent,
    PanelWrapperComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatDividerModule,

    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      wrappers: [
        {name: 'panel', component: PanelWrapperComponent}
      ]
    }),
    FormlyMaterialModule,
  ],
  exports: [
    NotePadComponent
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ]
})
export class ComponentsModule { }
