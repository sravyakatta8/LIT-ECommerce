const express = require("express");
const router = express.Router();
const notificationController = require("../../controllers/admin/notification-controller");

// Create notification
router.post("/", notificationController.createNotification);

// Get all notifications
router.get("/", notificationController.getAllNotifications);

// Delete notification
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;
