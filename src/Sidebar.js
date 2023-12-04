// Sidebar.js

import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="sidebar-content">
      {users.length > 0 && (
        <div className="profile">
          <img
            src={users[0].picture.medium}
            alt="Profile Avatar"
            className="profile-avatar"
          />
          <div className="profile-info">
            <span className="profile-name">{users[0].name.first} {users[0].name.last}</span>
            <span className="profile-username">@{users[0].login.username}</span>
          </div>
        </div>
      )}
      <div className="trending">
        <h2>Trending Topics</h2>
        <ul>
          <li>#ReactJS</li>
          <li>#WebDevelopment</li>
          <li>#CodingLife</li>
          {/* Other trending topics */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
