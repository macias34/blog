import { r as redirect, f as fail } from '../../../chunks/index2.js';
import { l as loginUser } from '../../../chunks/user.model.js';

const load = (event) => {
  const user = event.locals.user;

  if (user) {
    throw redirect(302, "/");
  }
};

const actions = {
  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData());

    if (!formData.username || !formData.password) {
      return fail(400, {
        error: "Missing username or password",
      });
    }

    const { username, password } = formData;

    const { error, token } = await loginUser(username, password);

    if (error) {
      return fail(401, {
        error,
      });
    }

    // Set the cookie
    event.cookies.set("AuthorizationToken", `Bearer ${token}`, {
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
    });
    throw redirect(302, "/");
  },
};

export { actions, load };
