import { getScreen } from '@1024pix/ember-testing-library';
import { waitUntil } from '@ember/test-helpers';

export async function waitForDialog() {
  const screen = await getScreen();

  await waitUntil(() => screen.queryAllByRole('dialog').length > 0);
}

export async function waitForDialogClose() {
  const screen = await getScreen();

  await waitUntil(() => screen.queryAllByRole('dialog').length === 0);
}
