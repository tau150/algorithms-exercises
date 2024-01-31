// Given an array of staff shifts, return a weekly calendar representation for data visualization with the overlaps for role.
// At the end we want some data structure to draw our weekly working calendar.


const staff = [
  {id: 'A', role: 'Cashier', shifts: [{start: "10:00", end: "14:00"}, {start: "11:00", end: "15:00"}, {start: "8:00", end: "13:00"}, {start: "10:00", end: "14:00"}, {start: "10:00", end: "19:00"}]},
  {id: 'B', role: 'Cashier', shifts: [{start: "10:00", end: "19:00"}, {start: "16:00", end: "20:00"}, {start: "14:00", end: "21:00"}, {start: "12:00", end: "20:00"}, {start: "15:00", end: "22:00"}]},
  {id: 'C', role: 'Waitress', shifts: [{start: "10:00", end: "14:00"}, {start: "10:00", end: "14:00"}, {start: "12:00", end: "19:00"}, {start: "12:00", end: "19:00"}, {start: "12:00", end: "19:00"}]},
  {id: 'D', role: 'Manager', shifts: [{start: "10:00", end: "14:00"}, {start: "10:00", end: "14:00"}, {start: "12:00", end: "19:00"}, {start: "12:00", end: "19:00"}, {start: "12:00", end: "19:00"}]}
]

const WEEKDAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

function generateDay(){
  const slots = Array.from({ length: 25 }, (_, index) => {
    const time = index.toString();
    return { time, events: [] };
  })

 return { slots }
}

function parseHours(shifts){

  return shifts.map(shift => {
    const start = Number(shift.start.split(":")[0])
    const end =  Number(shift.end.split(":")[0])

    return Array.from({ length: end - start }, (_, index) => start + index);

  })
}

function getDayName(index){
 return WEEKDAYS[index];
}


function fillSlot(slot, employee){
  if(slot.events.length > 0){
    const isOverlap = slot.events.some(event => event.role === employee.role && event.id !== employee.id)
    const prevOverlapEvents = slot.events.reduce( (acc, event) => {
      if(!event.isOverlap && event.role === employee.role){
        event.isOverlap = true
      }
      return [...acc, event]
    }, [] )

    slot.events = [...prevOverlapEvents, {  id: employee.id, role: employee.role, isOverlap, } ]
  }else{
    slot.events = [  {id:employee.id, role: employee.role, isOverlap: false} ]
  }
}

function fillCalendarDay(calendar, weekHours, employee){
  for(let i = 0 ; i < weekHours.length; i++){
    const dayName = getDayName(i)
    const { slots } = calendar[dayName]
    const dayHours = weekHours[i];
    const slotsToFill = slots.filter(slot => Number(slot.time) >= dayHours[0] && Number(slot.time) <= dayHours[dayHours.length - 1]);
    slotsToFill.forEach(slot => fillSlot(slot, employee))
  }

  return calendar

}

function generateCalendar(){
   return WEEKDAYS.reduce( (acc, current) => {
    return { ...acc, [current]: generateDay()}
   }, {} )
}

function shiftsCalendar(staff) {
  const calendar = generateCalendar()

  for(let employee of staff){
    const { shifts }  = employee;
    const parsedHours = parseHours(shifts)
    fillCalendarDay(calendar, parsedHours, employee)
  }

  return calendar;
}

shiftsCalendar(staff)

