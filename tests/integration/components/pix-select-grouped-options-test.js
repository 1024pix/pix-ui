import { module, test } from 'qunit';
import sinon from 'sinon';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import fillInByLabel from '../../helpers/fill-in-by-label';
import clickByLabel from '../../helpers/click-by-label';
import queryByLabel from '../../helpers/query-by-label';

module('Integration | Component | PixSelectGroupedOptions', function (hooks) {
  setupRenderingTest(hooks);

  module('when the select is not searchable', function () {
    test('it returns the selected value', async function (assert) {
      this.label = 'label';
      this.options = [
        { value: '1', label: 'Die Hard', category: 'action' },
        { value: '2', label: 'Alien', category: 'horreur' },
      ];
      this.categories = [
        { name: 'action', label: 'Action' },
        { name: 'horreur', label: 'Horreur' },
      ];
      this.onChange = sinon.stub();

      await render(hbs`
        <PixSelectGroupedOptions
            @id={{'select'}}
            @label={{this.label}}
            @options={{this.options}}
            @categories={{this.categories}}
            @onChange={{this.onChange}}
            @isSearchable={{false}}
          >
        </PixSelectGroupedOptions>
      `);
      await clickByLabel(this.label);
      await clickByLabel('Alien');

      sinon.assert.calledWith(this.onChange, '2');
      assert.ok(true);
    });
  });

  module('when the select is searchable', function () {
    test('it returns the selected value', async function (assert) {
      this.label = 'label';
      this.options = [
        { value: '1', label: 'Die Hard', category: 'action' },
        { value: '2', label: 'Alien', category: 'horreur' },
      ];
      this.categories = [
        { name: 'action', label: 'Action' },
        { name: 'horreur', label: 'Horreur' },
      ];
      this.onChange = sinon.stub();

      await render(hbs`
        <PixSelectGroupedOptions
            @id={{'select'}}
            @label={{this.label}}
            @options={{this.options}}
            @categories={{this.categories}}
            @onChange={{this.onChange}}
            @isSearchable={{true}}
          >
        </PixSelectGroupedOptions>
      `);
      await clickByLabel(this.label);
      await clickByLabel('Alien');

      sinon.assert.calledWith(this.onChange, '2');
      assert.ok(true);
    });

    test('it displays the selected value', async function (assert) {
      this.label = 'label';
      this.options = [
        { value: '1', label: 'Die Hard', category: 'action' },
        { value: '2', label: 'Inception', category: 'action' },
        { value: '3', label: 'Alien', category: 'horreur' },
      ];
      this.categories = [
        { name: 'action', label: 'Action' },
        { name: 'horreur', label: 'Horreur' },
      ];
      this.onChange = sinon.stub();

      await render(hbs`
      <PixSelectGroupedOptions
          @id={{'select'}}
          @label={{this.label}}
          @options={{this.options}}
          @categories={{this.categories}}
          @onChange={{this.onChange}}
          @isSearchable={{true}}
        >
      </PixSelectGroupedOptions>
    `);

      await clickByLabel(this.label);
      await clickByLabel('Inception');
      const input = await queryByLabel(this.label);

      assert.equal(input.value, 'Inception');
    });

    module('when the the user search an option', function () {
      test('it display matching value', async function (assert) {
        this.label = 'label';
        this.options = [
          { value: '1', label: 'Die Hard', category: 'action' },
          { value: '2', label: 'Inception', category: 'action' },
          { value: '3', label: 'AlieN', category: 'horreur' },
        ];
        this.categories = [
          { name: 'action', label: 'Action' },
          { name: 'horreur', label: 'Horreur' },
        ];
        this.onChange = sinon.stub();

        await render(hbs`
        <PixSelectGroupedOptions
            @id={{'select'}}
            @label={{this.label}}
            @options={{this.options}}
            @categories={{this.categories}}
            @onChange={{this.onChange}}
            @isSearchable={{true}}
          >
        </PixSelectGroupedOptions>
      `);
        await fillInByLabel(this.label, 'n');
        const dieHardOption = await queryByLabel('Die Hard');

        assert.contains('Inception');
        assert.contains('AlieN');
        assert.notOk(dieHardOption);
      });

      test('it display the searched value', async function (assert) {
        this.label = 'label';
        this.options = [
          { value: '1', label: 'Die Hard', category: 'action' },
          { value: '2', label: 'Inception', category: 'action' },
          { value: '3', label: 'AlieN', category: 'horreur' },
        ];
        this.categories = [
          { name: 'action', label: 'Action' },
          { name: 'horreur', label: 'Horreur' },
        ];
        this.onChange = sinon.stub();

        await render(hbs`
        <PixSelectGroupedOptions
            @id={{'select'}}
            @label={{this.label}}
            @options={{this.options}}
            @categories={{this.categories}}
            @onChange={{this.onChange}}
            @isSearchable={{true}}
          >
        </PixSelectGroupedOptions>
      `);
        await fillInByLabel(this.label, 'lie');

        assert.contains('lie');
      });

      test('it clear the searched value when the user stop searching an option', async function (assert) {
        this.label = 'label';
        this.options = [
          { value: '1', label: 'Die Hard', category: 'action' },
          { value: '2', label: 'Inception', category: 'action' },
          { value: '3', label: 'Alien', category: 'horreur' },
        ];
        this.categories = [
          { name: 'action', label: 'Action' },
          { name: 'horreur', label: 'Horreur' },
        ];
        this.onChange = sinon.stub();

        await render(hbs`
          <div>
            <label for='otherInput'>Other</label>
            <input id='otherInput' />
            <PixSelectGroupedOptions
                @id={{'select'}}
                @label={{this.label}}
                @options={{this.options}}
                @categories={{this.categories}}
                @onChange={{this.onChange}}
                @isSearchable={{true}}
              >
            </PixSelectGroupedOptions>
          </div>
        `);

        await fillInByLabel(this.label, 'cep');
        await fillInByLabel('Other', 'Je fais autre chose');
        await clickByLabel(this.label);

        const input = await queryByLabel(this.label);

        assert.equal(input.value, '');
      });
    });
  });
});
