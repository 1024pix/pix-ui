import PixTableColumn from './PixTableColumn.vue';
import PixTable from '../PixTable/PixTable.vue';

import { cleanup, screen } from '@testing-library/vue';
import { render } from '@test/test-utils.jsx';
import { afterEach, describe, expect, test, vi } from 'vitest';

describe('Integration | Component | pix-table-column', function () {
  afterEach(() => {
    cleanup();
  });

  const data = [
    {
      name: 'jean',
      description: 'fort au jungle speed',
      age: 15,
    },
    {
      name: 'brian',
      description: 'travail au peach pit',
      age: 25,
    },
  ];

  test('should warn when provided incorrect type', async function () {
    // given
    const spy = vi.spyOn(console, 'warn');

    // when
    await render(
      <PixTable
        caption='Ceci est le caption de notre table'
        data={data}
        v-slots={{
          columns: ({ row, context}) => (
            <PixTableColumn
              context={context}
              type="wrongType"
              v-slots={{
                header: () => "Nom",
                cell: () => row.name,
              }}
            />
          )
        }}
      />
    );
    screen.debug()

    // then
    expect(spy).toHaveBeenCalled();
    spy.mockRestore()
  });
});
