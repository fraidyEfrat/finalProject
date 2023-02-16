const express = require("express");
const DonationRouter=express.Router();

const donationController=require("../controllers/donationController");


DonationRouter.route("/")
    .get(donationController.getAllDonations)
    .post(donationController.addNewDonation);

DonationRouter.route("/:iddonation")
    .delete(donationController.deleteDonationById);


module.exports=DonationRouter;