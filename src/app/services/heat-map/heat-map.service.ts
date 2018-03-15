import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {parseString,Parser} from 'xml2js';
import 'rxjs/add/operator/map';

import * as d3 from 'd3';
import * as models from '../../models';

@Injectable()
export class HeatMapService {

  constructor(private http: HttpClient) { }

  getHeatMapXmlPayload():Observable<string>{
    console.log("in heat map service");
    return this.http.get('assets/heatmap.xml',{responseType:"text"})
              .map((rslt:string)=>{
                return rslt;
              }              
            );
  }


  convertXmlToCells(payload:string):models.Child[]{
    let data : models.Child[]=[];
    let jsonData;
    //let parser = new Parser({explicitArray:false});
    parseString(payload, {trim:true,explicitArray:false}, function(err,result){
      console.log('converted with xml2js');
      
      let childJSON = result['Envelope']['Body']['OperationInfo']['Parent']['ChildCollection'];
      //let designChild = child['Properties'];
      let childCollection = childJSON['Child'];
      
        for(let i=0; i<childCollection.length; i++){
          let currentChild = childCollection[i];
          let XNode = currentChild.Properties.Property.filter(obj=>{
            if(obj.$['name'] == "X")
              return true;
            else 
              return false;
          });
          
          let YNode = currentChild.Properties.Property.filter(obj=>{
            if(obj.$['name']=="Y")
              return true;
            else
              return false;
          });
          let StateNode = currentChild.Properties.Property.filter(obj=>{
            if(obj.$['name']=="State")
              return true;
            else
              return false;  
          });
          let properties:models.Properties={
            X:parseInt(XNode[0].$.value,10),            
            Y:parseInt(YNode[0].$.value,10),
            State:StateNode[0].$.value
          };
          let child:models.Child={
            $:currentChild.$,
            properties:properties
          };
          data.push(child);
      }            
    });
    return data;
  }


}
