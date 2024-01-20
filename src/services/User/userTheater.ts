import { HttpStatusCodes } from "src/constants/status_codes";
import logger from "src/logger";
import { ServiceResponse } from "src/models";
import * as theater from "src/database/lib/user/userTheater"
import { sendMail } from "src/utils/emaiMessage";
import { getSingleTheaterAuth } from "src/database/lib/admin/adminTheater";

const TAG = "services.admin.theater";

export async function bookingSlots(data){
  logger.info(`${TAG}.bookingSlots() ==> `, data);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );

  let mailOptions = {
    from:process.env.ADMIN_EMAIL,
    to: [data.customerEmail,process.env.ADMIN_EMAIL],
    subject: 'Sending Email using Node.js',
    html:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Slot Booking</title>
        <!-- Add Bootstrap CSS link -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <style>
            /* Add custom styles here */
            body {
                font-family: Arial, sans-serif;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="row mt-4">
                <div class="col-md-6 offset-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">Slot Booking</h2>
                            <!-- Confirmation message -->
                            <div id="confirmationMessage" class="text-success">
                                Booking successful!<br>
                                Name: ${data.customerName}<br>
                                Price:${data.price}<br>
                                Theater:${data.theaterName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `
  };
  try {
    let confirm=await sendMail(mailOptions)
    if(confirm){
      let theaterData:any=await getSingleTheaterAuth(data.theaterUid)
      if(theaterData){
        const res = await theater.bookingSlots({...data,theaterId:theaterData[0].id});
        serviceResponse.message="slot books !"
        serviceResponse.data = {...data};
      }
    }
   else{
    serviceResponse.statusCode=HttpStatusCodes.BAD_REQUEST,
    serviceResponse.message="please check your email !"
    // serviceResponse.data = {...data};
   }
     
   

} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.bookingSlots`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}



export async function getListBookedSlots(){
    logger.info(`${TAG}.getListMessage() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await theater.getListBookedSlots();
      serviceResponse.message="message !"
      serviceResponse.data = [...res];
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getListBookedSlots`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }

  
export async function getSingleBookedSlots(bookedDate){
    logger.info(`${TAG}.getSingleBookedSlots() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await theater.getSingleBookedSlots(bookedDate);
      serviceResponse.message="message !"
      serviceResponse.data = [...res];
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getSingleBookedSlots`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }
  
export async function getBookedTIming(bookedDate){
    logger.info(`${TAG}.getBookedTIming() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await theater.getBookedTIming(bookedDate);
      serviceResponse.message="message !"
      serviceResponse.data = [...res];
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getBookedTIming`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }

  
export async function deleteSingleBookedSlots(bookedDate){
    logger.info(`${TAG}.deleteSingleBookedSlots() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await theater.deleteSingleBookedSlots(bookedDate);
      serviceResponse.message="message !"
      serviceResponse.data = [...res];
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.deleteSingleBookedSlots`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }