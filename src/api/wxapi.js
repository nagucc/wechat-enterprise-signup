
/*
为指定用户添加一个标签
 */
export const addTagForUser = (tag, userId, wxapi) => new Promise((resolve, reject) => {
  wxapi.addTagUsers(tag, [userId], (err, result) => {
    if(err) {
      reject(err);
    }
    else resolve(result)
  });
});

/*
为指定用户添加多个标签
 */
export const addTagsForUser = (tags, userId, wxapi) => new Promise((resolve, reject) => {
  let promises = [];
  tags.forEach(tag => {
    promises.push(addTagForUser(tag, userId, wxapi));
  });
  Promise.all(promises).then(results => {
    resolve(results);
  }, errs => {
    reject(errs);
  });
});
