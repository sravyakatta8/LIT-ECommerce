const express = require("express");
const router = express.Router();
const notificationController = require("../../controllers/shop/notification-controller");

// Get notifications for a user
router.get("/:userId", notificationController.getUserNotifications);

// Mark notification as read
router.put("/read/:id", notificationController.markAsRead);

module.exports = router;
