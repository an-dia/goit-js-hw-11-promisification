export const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

export const toggleUserState = (allUsers, userName) => {
  const promise = new Promise((resolve, reject) => {
     resolve(
         allUsers.map(user =>
       user.name === userName ? { ...user, active: !user.active } : user,)
       )
    const updatedUsers = resolve;
});
  return promise
};

export const logger = updatedUsers => console.table(updatedUsers);
