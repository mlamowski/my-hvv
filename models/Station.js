class Station {

  id
  station
  stationObject

  constructor(stationObject) {
    this.stationObject = stationObject;
    this.id = stationObject.id;
    this.station = stationObject.combinedName;
  }



}

export default Station;