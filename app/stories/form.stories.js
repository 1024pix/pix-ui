import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form/Exemple de formulaire',
};

export const form = (args) => {
  return {
    template: hbs`<form>
  <PixInput
    @id='firstName'
    @errorMessage={{this.genericErrorMessage}}
    @requiredLabel='champ obligatoire'
    @validationStatus={{this.validationStatus}}
  >
    <:label>Prénom</:label>
  </PixInput>
  <br />
  <PixInputPassword @id='password' @errorMessage={{this.genericErrorMessage}}>
    <:label>Mot de passe</:label>
  </PixInputPassword>
  <br />

  <PixMultiSelect
    @id='form__pix-multi-select'
    @onSelect={{this.onSelect}}
    @selected={{this.selected}}
    @options={{this.options}}
  >
    <:label>A quel point aimez-vous Pix UI ?</:label>
    <:placeholder>Votre notation en étoiles...</:placeholder>
    <:default as |star|>
      <PixStars @count={{star.value}} @total={{star.total}} />
    </:default>
  </PixMultiSelect>
  <br /><br />

  <PixMultiSelect
    @id='form__pix-multi-select-searchable'
    @onSelect={{this.onSelect}}
    @selected={{this.selected}}
    @isSearchable={{true}}
    @options={{this.optionsSearch}}
  >
    <:label>Choississez vos condiments</:label>
    <:placeholder>Mes condiments</:placeholder>
    <:default as |condiment|>
      {{condiment.label}}
    </:default>
  </PixMultiSelect>
  <br /><br />
  {{! template-lint-disable no-inline-styles }}

  <PixSelect
    @id='form__searchable-pix-select'
    @options={{this.selectOptions}}
    @isSearchable={{true}}
    @isValidationActive={{true}}
    placeholder='Fraises, Mangues...'
    style='width:100%'
  >
    <:label>Votre fruit préféré est :</:label>
  </PixSelect>
  <br />

  <PixTextarea
    @id='form__pix-textarea'
    @maxlength={{200}}
    @requiredLabel='Champ obligatoire'
    @errorMessage={{this.genericErrorMessage}}
  >
    <:label>Un commentaire ?</:label>
  </PixTextarea>
  <br />

  <label class='pix-form__label'> Votre légume préféré est : </label>
  <PixRadioButton @value='chou' name='légume'>
    <:label>Chou</:label>
  </PixRadioButton>
  <PixRadioButton @value='carotte' name='légume'>
    <:label>Carotte</:label>
  </PixRadioButton>

  <br />

  <PixCheckbox @id='spam-pub' @size='small'>
    <:label>Acceptez-vous de vous faire spammer de PUB ?</:label>
  </PixCheckbox>

  <br /><br />

  <ul class='pix-form__actions'>
    <li>
      <PixButtonLink
        @route=''
        @model=''
        @backgroundColor='transparent-light'
        @isBorderVisible={{true}}
      >
        Annuler
      </PixButtonLink>
    </li>
    <li>
      <PixButton @type='submit'>Envoyer mes réponses</PixButton>
    </li>
    <li>
      <PixButtonUpload @id='file-upload' accept='.csv'>
        Importer un fichier
      </PixButtonUpload>
    </li>
  </ul>
</form>`,
    context: args,
  };
};
form.args = {
  genericErrorMessage: '',
  selected: ['1', '4'],
  options: [
    { value: '1', total: 3 },
    { value: '2', total: 3 },
    { value: '3', total: 3 },
  ],
  optionsSearch: [
    { value: 'Cornichon', label: 'Cornichon' },
    { value: 'Ail', label: 'Ail' },
    { value: 'Oignon', label: 'Oignon' },
    { value: 'Aigre-Doux', label: 'Aigre-douc' },
    { value: 'Soja sucré', label: 'Soja sucré' },
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
};
