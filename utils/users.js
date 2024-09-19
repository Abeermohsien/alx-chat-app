const users = [];

// show user jsointing
function userJoin(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

// returning user curr
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// return user leave chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// return user room
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
