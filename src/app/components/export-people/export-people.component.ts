import { Component, OnInit, Input} from '@angular/core';
import {sectors} from './../../models/sector.model';
import { Send2MailchimpService } from 'src/app/services/send2-mailchimp.service';

@Component({
  selector: 'app-export-people',
  templateUrl: './export-people.component.html',
  styleUrls: ['./export-people.component.css']
})
export class ExportPeopleComponent implements OnInit {

  @Input() sectores: Array<string> = sectors;
  public sectoresSent: any = '';
  public sectoresNotSent: any = '';
  public checkSector: boolean[];
  public checkedArray: string[][] = [];

  constructor(protected serviceSendSector: Send2MailchimpService ) {
  }
  ngOnInit(): void {
    this.crearArray();
  }

  crearArray(){
    this.sectores.forEach((element: string) => {
      const arr: string[] = [element, 'false'];
      this.checkedArray.push(arr);
    });
  }

  onCheck(evt): void{
    let cont = 0;
    this.checkedArray.forEach((element: string[]) => {
      if (element[0] === evt) {
        if (this.checkedArray[cont][1] === 'true') {
          this.checkedArray[cont][1] = 'false';
          console.log(this.checkedArray[cont]);
        } else {
          this.checkedArray[cont][1] = 'true';
          console.log(this.checkedArray[cont]);
        }
      }
      cont += 1;
    });
  }

  sendSectors(){
    const sectoresTrue = [];
    let sectoresText = '';
    let cont = 0;
    this.checkedArray.forEach(element => {
      if (element[1] === 'true' ) {
        sectoresTrue.push(element[0]);
        sectoresText += element[0] + '-';
      }
      cont += 1;
    });
    this.sectoresSent = sectoresText;
    const SectorArray = {
      Sectores : sectoresTrue
    };
    console.log(SectorArray);
    this.serviceSendSector.postSectores(SectorArray)
    .subscribe(
      (data) => {
        // this.sectoresSent = data.Added;
        console.log(data);
        let text = '';
        let ntext = '';
        data['people added'].forEach(person => {
          text += 'Correo :' + person.email_address +
          ' Nombre: ' + person.merge_fields.FNAME + ' ' + person.merge_fields.LNAME;
        });
        data['people not added'].forEach(person => {
          ntext += 'Correo :' + person.email_address +
          ' Nombre: ' + person.merge_fields.FNAME + ' ' + person.merge_fields.LNAME + '\n';
        });
        this.sectoresSent = text;
        this.sectoresNotSent = ntext;
      },
      (error) => {
        this.sectoresSent = 'Error:';
        this.sectoresNotSent = error;
      }
    );
  }
}
