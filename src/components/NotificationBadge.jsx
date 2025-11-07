import React from "react";
import "./NotificationBadge.scss";

const NotificationBadge = ({ count }) => {
  return (
    <>
      {count > 0 && (
        <div className="notification-badge">
          <span className="badge">{count}</span>
        </div>
      )}
    </>
  );
};

export default NotificationBadge;
