'use strict';
module.exports = function (options) {
  return function (hook) {
    // The authenticated user
    console.log(hook);
    const user = hook.params.user;
    // The actual message text
    const text = hook.data.text
    // Messages can't be longer than 400 characters
      .substring(0, 400)
      // Do some basic HTML escaping
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Override the original data
    hook.data = {
      text,
      // Set the user id
      userId: user._id,
      // Add the current time via `getTime`
      createdAt: new Date().getTime()
    };
    console.log(hook);
  };
};
