import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import * as d3 from 'd3';

import * as svcs from '../../services';
import * as models from '../../models';
import { ElementSchemaRegistry } from '@angular/compiler';


@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent implements OnInit,OnChanges {

  public cells:models.Child[];
  public cell:string="";

  constructor(private heatMapSvc: svcs.HeatMapService) {
    heatMapSvc.getHeatMapXmlPayload()
    .subscribe(res=>{
      let heatMapPayload:string = res;                    
      this.cells = heatMapSvc.convertXmlToCells(heatMapPayload);
    });
   }

  

  ngOnInit() {
    
  }

  ngOnChanges():void{
    console.log("change occured");
  }
  CreateHeatMap(){
    console.log('creating heat map');
    let selection = d3.select("#heatmap");
    let svgSelection = selection.append("svg")
                        .attr("width",1500)
                        .attr("height",700)
                        .attr("style","outline:thick solid black;");
                            
    let mouseOverDiv = d3.select(".mouseOverContent");

    let rectangles = svgSelection.selectAll("rect")
                                    .data(this.cells)
                                    .enter()
                                    .append("rect")
                                      .attr("x",function(d){
                                        return 10+d.properties.X*15;
                                      })
                                      .attr("y",function(d){
                                        return 20+d.properties.Y*10;
                                      })
                                      .attr("width",13)
                                      .attr("height",6)                                      
                                      .style("fill",function(d){
                                        if(d.properties.State == "bad")
                                          return "red";
                                        else
                                          return "green";
                                      })
                                      .on("mouseover",function(d){
                                        d3.select(this).style("fill","blue");
                                        mouseOverDiv.transition()
                                        .duration(200)
                                        .style("opacity", .9);
                                        mouseOverDiv.html(JSON.stringify(d))
                                        .style("left", (d3.event.pageX) + "px")
                                        .style("top", (d3.event.pageY - 75) + "px")
                                        .style("color", "black");
                                      })
                                      .on("mouseout",function(d){
                                        let color = "blue";
                                        if(d.properties.State == "bad")
                                          color="red";
                                        else
                                          color="green";
                                        d3.select(this).style("fill",color);
                                        mouseOverDiv.transition()
                                              .duration(200)
                                            .style("opacity", 0);
                                        })
                                      .on('mousedown',function(d){
                                        console.log("click handler started working "+new Date().getTime());
                                        document.getElementById("cellpara").innerHTML="before"+JSON.stringify(d);
                                        d.properties.State="good";
                                        document.getElementById("cellpara").innerHTML+="\nafter"+JSON.stringify(d);
                                        //d3.select(this).style("fill","green");                                        
                                        console.log("click handler completed "+new Date().getTime());
                                      });    
  //95 rows and 95 cols
  }

}
