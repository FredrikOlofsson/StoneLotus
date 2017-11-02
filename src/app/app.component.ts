import { Component } from '@angular/core';
import 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shadowOffsetX = -2; 
  shadowOffsetY = -3;
  referenceIcon = L.icon({
    iconUrl: '../assets/icons/Marker.png',
    shadowUrl: '../assets/icons/Marker-shadow.png',

    iconSize:     [(512/5), (512/5)], // size of the icon
    shadowSize:   [(512/5), (512/5)], // size of the shadow
    iconAnchor:   [(512/5)/2, (512/5)], // point of the icon which will correspond to marker's location
    shadowAnchor: [((512/5)/2)-this.shadowOffsetX, (512/5)+this.shadowOffsetY],  // the same for the shadow
    popupAnchor:  [0, -95] // point from which the popup should open relative to the iconAnchor
  });
  circleIcon = L.icon({
    iconUrl: '../assets/icons/circle.png',
    shadowUrl: '../assets/icons/circle-shadow.png',

    iconSize:     [100, 100], // size of the icon
    shadowSize:   [10, 10], // size of the shadow
    iconAnchor:   [50, 50], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
  });
  saltIcon = L.icon({
    iconUrl: '../assets/icons/icon_Salt_Basin.png',
    shadowUrl: '../assets/icons/icon_Salt_Basin_Shadow.png',

    iconSize:     [210/3, 115/3], // size of the icon
    shadowSize:   [210/3, 115/3], // size of the shadow
    iconAnchor:   [(210/3)/2, (115/3)/2], // point of the icon which will correspond to marker's location
    shadowAnchor: [((210/3)/2)-this.shadowOffsetX, ((115/3)/2)+this.shadowOffsetY],  // the same for the shadow
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
  });
  mileStoneIcon = L.icon({
    iconUrl: '../assets/icons/Icon_Milestone.png',
    shadowUrl: '../assets/icons/Icon_Milestone_Shadow.png',

    iconSize:     [156/4, 250/4], // size of the icon
    shadowSize:   [156/4, 250/4], // size of the shadow
    iconAnchor:   [(156/4)/2, (250/4)/1.6], // point of the icon which will correspond to marker's location
    shadowAnchor: [((156/4)/2)+this.shadowOffsetX, ((250/4)/1.6)+this.shadowOffsetY],  // the same for the shadow
    popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
  });
  roadSignIcon = L.icon({
    iconUrl: '../assets/icons/Icon_Roadsign.png',
    shadowUrl: '../assets/icons/Icon_Roadsign_Shadow.png',

    iconSize:     [(82/2.5), (170/2.5)], // size of the icon
    shadowSize:   [(82/2.5), (170/2.5)], // size of the shadow
    iconAnchor:   [((82/2.5)/2)+4, (((170/2.5))/1.6)+8], // point of the icon which will correspond to marker's location
    shadowAnchor: [((82/2.5)/2)-this.shadowOffsetX, (((170/2.5))/1.6)-this.shadowOffsetY],  // the same for the shadow
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
  });
  iconFlag = L.icon({
    iconUrl: '../assets/icons/Icon_Flag.png',
    shadowUrl: '../assets/icons/Icon_Flag_Shadow.png',

    iconSize:     [(120/2), (168/2)], // size of the icon
    shadowSize:   [(120/2), (168/2)], // size of the shadow
    iconAnchor:   [(120/2)/4,(168/2)-10], // point of the icon which will correspond to marker's location
    shadowAnchor: [((120/2)/4)-this.shadowOffsetX, ((168/2)-12)-this.shadowOffsetY],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
  });
  
  ngOnInit(){
    //Variables

    //Map Object

    //Reference the tiles
    var mymap = L.map('mapid').setView([12, 113], 4);
    L.tileLayer('../assets/tiles/{z}/{x}/{y}.png', {
      attribution: 'Haven and hearth map',
      noWrap: true,
      minZoom: 2,
      maxZoom: 5
  }).addTo(mymap);
  //Markers and Popups
  var refmarker = L.marker([12, 113], {draggable: true, icon: this.referenceIcon}).addTo(mymap).bindPopup("Reference Marker");
  refmarker.on('dragend', function(e) {
  refmarker.getPopup().setContent("Reference Marker: " + "<br>" + refmarker.getLatLng().toString());
  refmarker.openPopup()});
  //Resources
  var resource_salt = L.marker([-7.31, 119.22], {draggable: false, icon: this.saltIcon}).addTo(mymap).bindPopup("Salt");
  var milestone_8 = L.marker([-3.51, 130.25], {draggable: false, icon: this.mileStoneIcon}).addTo(mymap).bindPopup("Milestone!");
  var milestone_2 = L.marker([-22.91, 147.12], {draggable: false, icon: this.mileStoneIcon}).addTo(mymap).bindPopup("Milestone!");
  var milestone_3 = L.marker([-3.60, 77.21], {draggable: false, icon: this.mileStoneIcon}).addTo(mymap).bindPopup("Milestone!");
  var roadsign_1 = L.marker([-14, 100], {draggable: false, icon: this.roadSignIcon}).addTo(mymap).bindPopup("RoadSign 1!");
  var roadsign_2 = L.marker([-14, 102], {draggable: false, icon: this.roadSignIcon}).addTo(mymap).bindPopup("RoadSign 2!");
  var roadsign_3 = L.marker([-16, 101], {draggable: false, icon: this.roadSignIcon}).addTo(mymap).bindPopup("RoadSign 3!");
  var roadsign_4 = L.marker([-16, 103], {draggable: false, icon: this.roadSignIcon}).addTo(mymap).bindPopup("RoadSign 4!");
  var roadsign_5 = L.marker([-43, 113], {draggable: false, icon: this.roadSignIcon}).addTo(mymap).bindPopup("RoadSign 5!");
  var roadsign_6 = L.marker([-34.92, 97.60], {draggable: false, icon: this.roadSignIcon}).addTo(mymap).bindPopup("RoadSign 6!");
  var roadsign_7 = L.marker([-1, 106], {draggable: false, icon: this.roadSignIcon}).addTo(mymap).bindPopup("RoadSign 7!");
  var roadsign_8 = L.marker([-1, 108], {draggable: false, icon: this.roadSignIcon}).addTo(mymap).bindPopup("RoadSign 8!");
  var roadsign_9 = L.marker([-1, 82], {draggable: false, icon: this.roadSignIcon}).addTo(mymap).bindPopup("RoadSign 9!");

  var roadsign_1_destination = L.marker([-7.30, 124.80], {draggable: false, icon: this.iconFlag}).addTo(mymap).bindPopup("[Chinese]!");
  var roadsign_2_destination = L.marker([-41, 113], {draggable: false, icon: this.iconFlag}).addTo(mymap).bindPopup("Southern Lazyness!");
  var roadsign_3_destination = L.marker([-26.5, 84.4], {draggable: false, icon: this.iconFlag}).addTo(mymap).bindPopup("[Chinese]!");
  var roadsign_4_destination = L.marker([-3, 107], {draggable: false, icon: this.iconFlag}).addTo(mymap).bindPopup("[Chinese]!");
  var roadsign_5_destination = L.marker([-3, 109], {draggable: false, icon: this.iconFlag}).addTo(mymap).bindPopup("[Chinese]!");
  var roadsign_6_destination = L.marker([-29.80, 93.86], {draggable: false, icon: this.iconFlag}).addTo(mymap).bindPopup("Dash!");
  var roadsign_7_destination = L.marker([0, 118], {draggable: false, icon: this.iconFlag}).addTo(mymap).bindPopup("7!");
  var roadsign_8_destination = L.marker([-2.63, 83.93], {draggable: false, icon: this.iconFlag}).addTo(mymap).bindPopup("8!");
  var roadsign_9_destination = L.marker([-42, 92], {draggable: false, icon: this.iconFlag}).addTo(mymap).bindPopup("9!");

  

  //Layer Groups 
  var lg_resources = L.layerGroup([resource_salt]);
  var lg_flags = L.layerGroup([roadsign_1_destination, roadsign_2_destination, roadsign_3_destination, 
                              roadsign_4_destination, roadsign_5_destination, roadsign_6_destination, 
                              roadsign_7_destination, roadsign_8_destination, roadsign_9_destination]
  );
  var overlays = {
    "Natural Resources" : lg_resources,
    "Flags": lg_flags
  }
  //Add Layer Controll 
  L.control.layers(null, overlays).addTo(mymap);

  }
}