import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export const form = (args) => {
  return {
    template: hbs`
    <form>
      <PixInput @id='firstName' @label='Prénom' />
      <br>

      <PixMultiSelect
        @title="A quel point aimez vous Pix-UI ?"
        @id="form__pix-mutli-select"
        @onSelect={{onSelect}}
        @selected={{selected}}
        @options={{options}} as |star|
      >
        <PixStars @count={{star.value}} @total={{star.total}} />
      </PixMultiSelect>
      <br><br>

      <PixSelect
        @id="form__searchable-pix-select"
        @label="Votre fruit préféré est : "
        @options={{selectOptions}}
        @isSearchable={{true}}
        @isValidationActive={{true}}
        placeholder='Fraises, Mangues...'
      />
      <br>

      <PixTextarea @id="form__pix-textarea" @value="" @maxlength={{200}} />
      <br>

      <div class="pix-form__actions">
        <PixButton @triggerAction={{cancel}} @backgroundColor="transparent-light" @isBorderVisible={{true}}>
          Annuler
        </PixButton>
        <PixButton @type="submit">Envoyer mes réponses</PixButton>
      </div>
    </form>
    `,
    context: args,
  };
};
form.args = {
  selected: ['1','4'],
  options: [
    { value: '1', total: 3 },
    { value: '2', total: 3 },
    { value: '3', total: 3 },
  ],
  cancel: action('cancel'),
  onSelect: action('onSelect'),
  selectOptions: [
    { value: 'Figues', label: 'Figues' },
    { value: 'Bananes', label: 'Bananes' },
    { value: 'Noix', label: 'Noix' },
    { value: 'Papayes', label: 'Papayes' },
    { value: 'Fèves de chocolat', label: 'Fèves de chocolat' },
    { value: 'Dattes', label: 'Dattes' },
    { value: 'Mangues', label: 'Mangues' },
    { value: 'Jujube', label: 'Jujube' },
    { value: 'Avocat', label: 'Avocat' },
    { value: 'Fraises', label: 'Fraises' },
    { value: 'Kaki', label: 'Kaki' },
  ],
}
