class Vehicles {
  type;
  price;
  width;

  constructor(type, price, width) {
    this.type = type;
    this.price = price;
    this.width = width;
  }

  get type() {
    return this.type;
  }
  set type(type) {
    this.type = type;
  }

  get price() {
    return this.price;
  }
  set price(price) {
    this.price = price;
  }

  get width() {
    return this.width;
  }
  set width(width) {
    this.width = width;
  }
}

class Parking{
  space
  slot
  widthParking

  constructor(space, slot, widthParking) {
    this.space = space;
    this.slot = slot;
    this.widthParking = widthParking;
  }

  get space() {
    return this.space;
  }
  set space(space) {
    this.space = space;
  }

  get slot() {
    return this.slot;
  }
  set slot(slot) {
    this.slot = slot;
  }

  get widthParking() {
    return this.widthParking;
  }
  set widthParking(widthParking) {
    this.widthParking = widthParking;
  }
}

class ParkingDetail{
  space
  timeIn
  timeOut
  vehicleType

  constructor(space, timeIn, timeOut,vehicleType) {
    this.space = space;
    this.timeIn = timeIn;
    this.timeOut = timeOut;
    this.vehicleType = vehicleType;
  }

  get space() {
    return this.space;
  }
  set space(space) {
    this.space = space;
  }

  get timeIn() {
    return this.timeIn;
  }
  set timeIn(timeIn) {
    this.timeIn = timeIn;
  }

  get timeOut() {
    return this.timeOut;
  }
  set timeOut(timeOut) {
    this.timeOut = timeOut;
  }

  get vehicleType() {
    return this.vehicleType;
  }
  set vehicleType(vehicleType) {
    this.vehicleType = vehicleType;
  }

  getFee(){
    //Total days = (Time Out - Time In)
    //if(total days <= 1 day) fee=vehicle.price
    //if(total days > 1 day) fee=vehicle.price * total days
  }

  checkSlot(){
    //total vehicles in space
    //if(total vehicles >=80) check failed
    //if(total vehicles <80)  check true
  }
}

