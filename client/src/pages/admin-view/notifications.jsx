import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

function AdminNotifications() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/admin/notifications");
      setNotifications(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch notifications");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleCreateNotification = async () => {
    if (!userId || !message) {
      alert("Please enter user ID and message");
      return;
    }
    try {
      await axios.post("/api/admin/notifications", { userId, message });
      setUserId("");
      setMessage("");
      fetchNotifications();
    } catch (err) {
      alert("Failed to create notification");
    }
  };

  const handleDeleteNotification = async (id) => {
    try {
      await axios.delete(`/api/admin/notifications/${id}`);
      fetchNotifications();
    } catch (err) {
      alert("Failed to delete notification");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Notifications</h1>
      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Notification message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        />
        <Button onClick={handleCreateNotification}>Create Notification</Button>
      </div>
      <h2 className="text-xl font-semibold mb-2">Existing Notifications</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <ul className="space-y-2">
        {notifications.map((notif) => (
          <li
            key={notif._id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              <p><strong>User ID:</strong> {notif.userId}</p>
              <p>{notif.message}</p>
              <p className="text-sm text-gray-500">
                {new Date(notif.createdAt).toLocaleString()}
              </p>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDeleteNotification(notif._id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminNotifications;
