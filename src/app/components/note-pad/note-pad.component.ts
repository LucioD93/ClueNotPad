import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'clue-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.scss']
})
export class NotePadComponent {

  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any;
  fields: FormlyFieldConfig[] = [
    {
      key: 'suspects',
      fieldGroupClassName: 'display-flex',
      wrappers: ['panel'],
      templateOptions: {
        label: 'Sospechosos'
      },
      fieldGroup: [
        {
          key: 'green',
          className: 'flex-1',
          type: 'checkbox',
          templateOptions: {
            label: 'Verdi'
          }
        },
        {
          key: 'yellow',
          className: 'flex-1',
          type: 'checkbox',
          templateOptions: {
            label: 'Mostaza'
          }
        },
        {
          key: 'blue',
          className: 'flex-1',
          type: 'checkbox',
          templateOptions: {
            label: 'Azulino'
          }
        },
        {
          key: 'purple',
          className: 'flex-1',
          type: 'checkbox',
          templateOptions: {
            label: 'Moradillo'
          }
        },
        {
          key: 'red',
          className: 'flex-1',
          type: 'checkbox',
          templateOptions: {
            label: 'Escarlata'
          }
        },
        {
          key: 'white',
          className: 'flex-1',
          type: 'checkbox',
          templateOptions: {
            label: 'Blanco'
          }
        },
      ]
    },
    {
      key: 'weapons',
      wrappers: ['panel'],
      templateOptions: {
        label: 'Armas'
      },
      fieldGroup: [
        {
          key: 'wrench',
          type: 'checkbox',
          templateOptions: {
            label: 'Llave Inglesa'
          }
        },
        {
          key: 'candlestick',
          type: 'checkbox',
          templateOptions: {
            label: 'Candelabro'
          }
        },
        {
          key: 'knife',
          type: 'checkbox',
          templateOptions: {
            label: 'Daga'
          }
        },
        {
          key: 'revolver',
          type: 'checkbox',
          templateOptions: {
            label: 'Pistola'
          }
        },
        {
          key: 'pipe',
          type: 'checkbox',
          templateOptions: {
            label: 'Tuberia'
          }
        },
        {
          key: 'rope',
          type: 'checkbox',
          templateOptions: {
            label: 'Soga'
          }
        },
      ]
    },
    {
      key: 'rooms',
      wrappers: ['panel'],
      templateOptions: {
        label: 'Habitaciones'
      },
      fieldGroup: [
        {
          key: 'bathroom',
          type: 'checkbox',
          templateOptions: {
            label: 'Baño'
          }
        },
        {
          key: 'study',
          type: 'checkbox',
          templateOptions: {
            label: 'Estudio'
          }
        },
        {
          key: 'dinner',
          type: 'checkbox',
          templateOptions: {
            label: 'Comedor'
          }
        },
        {
          key: 'gameroom',
          type: 'checkbox',
          templateOptions: {
            label: 'Cuarto de Juegos'
          }
        },
        {
          key: 'garage',
          type: 'checkbox',
          templateOptions: {
            label: 'Garage'
          }
        },
        {
          key: 'bedroom',
          type: 'checkbox',
          templateOptions: {
            label: 'Habitacion'
          }
        },
        {
          key: 'livingroom',
          type: 'checkbox',
          templateOptions: {
            label: 'Sala'
          }
        },
        {
          key: 'kitchen',
          type: 'checkbox',
          templateOptions: {
            label: 'Cocina'
          }
        },
        {
          key: 'yard',
          type: 'checkbox',
          templateOptions: {
            label: 'Patio'
          }
        },
      ]
    }
  ];

  constructor(
    private dataService: DataService
  ) {
    this.model = JSON.parse(this.dataService.getData());
  }

  onSubmit() {
    this.model = this.dataService.getEmptyModel();
    this.onFormChange(this.model);
  }

  onFormChange(event) {
    this.dataService.setData(event);
  }

}
