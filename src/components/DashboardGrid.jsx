import React from "react";
import { Link } from "react-router-dom";
import "./DashboardGrid.scss";
import NotificationBadge from "./NotificationBadge";

const DashboardGrid = () => {
  const buttons = [
    { text: "Add New Tenant", emoji: "➕", link: "/add-tenant", nots:0 },
    { text: "View Tenants", emoji: "👥", link: "/view-tenants" ,nots:18},
    { text: "Delete Tenants", emoji: "❌", link: "/delete-tenants" ,nots:0},
    { text: "View Complaints", emoji: "📋", link: "/view-complaints",nots:8 },
  ];

  return (
    <div className="dashboard-grid">
      {buttons.map((btn, index) => (
        <Link to={btn.link} key={index} className="grid-btn">
          <div><span className="emoji">{btn.emoji}</span>
          <span className="label">{btn.text}</span>
          <NotificationBadge count={btn.nots}/>
          </div>
          </Link>
      ))}
    </div>
  );
};

export default DashboardGrid;
