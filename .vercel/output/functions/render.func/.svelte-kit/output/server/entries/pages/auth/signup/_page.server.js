import { c as createUser } from '../../../../chunks/user.model.js';
import { e as error, f as fail, r as redirect } from '../../../../chunks/index2.js';

async function load({ fetch, locals }) {
  const user = locals.user;

  if (!user) {
    throw error(401, {
      message: "You must be logged in to view this page",
    });
  }
}

const actions = {
  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData());

    if (!formData.username || !formData.password) {
      return fail(400, { error: "Missing username or password." });
    }

    const { username, password } = formData;

    const { error } = await createUser(username, password);

    if (error) {
      return fail(500, { error });
    }

    throw redirect(302, "/auth");
  },
};

export { actions, load };
