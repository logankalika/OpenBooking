import `admin_panel.js`
/* require express (node.js) */
const express = require(`express`);

/* require express (node.js) for app representing server application backend */
const app = express();

/* requires postgres client */ 
 const { Pool } = require(`pg`); 


app.get(`total_past_appointments`, function(request, response) {
	
	/* determines the date for reference to show upcoming appointments not previous */
	const today = new Date();
	
	/* inline script to get the total number of upcoming appointments */
	/* creates new array called pastAppointments to use with filters to check the condition */
	const pastAppointments = appointments.filter(appointment => {

		/* convert string to javascript date object with the newdate constructor */
		const appointmentDate = new Date(appointment.date);

		/* show the date of the appointment if its before today*/
		return appointmentDate < today;
	
	/* returns the number of total past appointments */
	return pastAppointments.length;
	

app.get(`total_upcoming_appointments`, function(request, response) {

	/* determines the date for reference to show upcoming appointments not previous */
	const today = new Date();
	
	/* inline script to get the total number of upcoming appointments */ 
	/* creates new array called upcomingAppointments to use with filters to check the condition */
	const upcomingAppointments = appointments.filter(appointment => {
		
		/* convert string to javascript date object with the newdate constructor */
		const appointmentDate = new Date(appointment.date);
	
		/* show the date of the appointment if its after today */
		return appointmentDate > today;

	/* return the number of total upcoming appointment */
	return upcomingAppointments.length;
