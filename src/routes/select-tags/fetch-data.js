import fetch from '../../core/fetch';

export const addTags = async tags => {
  let res = await fetch('/api/signup/add-tags', {
    credentials:'same-origin',
    method: 'PUT',
    body: JSON.stringify({tags}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  let result = await res.json();
  if(result.ret === 0){
    return result.data;
  } else {
    throw result.msg;
  }
}

export const getSelectableTags = async () => {
  try {
    const res = await fetch(`/api/signup/selectable-tags`);
    const taglist = await res.json();
    return taglist.data;
  } catch (e) {
    return Promise.reject(e);
  }
}
