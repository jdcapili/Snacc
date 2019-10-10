export const fetchDmGroups = () =>
  $.ajax({
    method: "GET",
    url: "api/dm_groups"
  }); //should fetch channels currentUser is associated with

export const fetchDmGroup = dmGroupId =>
  $.ajax({
    method: "GET",
    url: `api/dm_groups/${dmGroupId}`
  });

export const createDmGroup = (user_ids) => {
  return $.ajax({
    method: "POST",
    url: "api/dm_groups",
    data: {
      dm_group: {user_ids}
    }
  });
};

export const deleteDmGroup = dmGroupId =>
  $.ajax({
    method: "DELETE",
    url: `api/dm_groups/${dmGroupId}`
});
