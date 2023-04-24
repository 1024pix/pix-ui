import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export const form = (args) => {
  return {
    template: hbs`<form>
  <PixInput
    @id='firstName'
    @label='Prénom'
    @errorMessage={{this.genericErrorMessage}}
    @requiredLabel='champ obligatoire'
    @validationStatus={{this.validationStatus}}
  />
  <br />
  <PixInputPassword @id='password' @label='Mot de passe' @errorMessage={{this.genericErrorMessage}} />
  <br />

  <PixMultiSelect
    @innerText='Votre notation en étoiles...'
    @id='form__pix-multi-select'
    @label='A quel point aimez-vous Pix UI ?'
    @onSelect={{this.onSelect}}
    @selected={{this.selected}}
    @options={{this.options}}
    as |star|
  >
    <PixStars @count={{star.value}} @total={{star.total}} />
  </PixMultiSelect>
  <br /><br />

  <PixMultiSelect
    @innerText='Mes condiments'
    @id='form__pix-multi-select-searchable'
    @label='Choississez vos condiments'
    @onSelect={{this.onSelect}}
    @selected={{this.selected}}
    @isSearchable={{true}}
    @options={{this.optionsSearch}}
    as |condiment|
  >
    {{condiment.label}}
  </PixMultiSelect>
  <br /><br />

  <PixSelect
    @id='form__searchable-pix-select'
    @label='Votre fruit préféré est : '
    @options={{this.selectOptions}}
    @isSearchable={{true}}
    @isValidationActive={{true}}
    placeholder='Fraises, Mangues...'
    style='width:100%'
  />
  <br />

  <PixDropdown
    @id='form__searchable-pix-dropdown'
    @options={{this.selectOptions}}
    @placeholder='Choisir votre fruit'
    @isSearchable={{true}}
    @searchPlaceholder='Rechercher'
    @label='Votre fruit préféré est : '
    @clearLabel='Supprimer la sélection'
    @expandLabel='Ouvrir la liste'
    @collapseLabel='Réduire la liste'
  />
  <br />

  <PixTextarea
    @id='form__pix-textarea'
    @value=''
    @maxlength={{200}}
    @label='Un commentaire ?'
    @requiredLabel='Champ obligatoire'
    @errorMessage={{this.genericErrorMessage}}
  />
  <br />

  <label class='pix-form__label'> Votre légume préféré est : </label>
  <PixRadioButton @label='Chou' @value='chou' name='légume' />
  <PixRadioButton @label='Carotte' @value='carotte' name='légume' />
  <br />

  <PixCheckbox
    @id='spam-pub'
    @labelSize='small'
  >
    Acceptez-vous de vous faire spammer de PUB ?
  </PixCheckbox>

  <br /><br />

  <div class='pix-form__actions'>
    <PixButton
      @triggerAction={{this.cancel}}
      @backgroundColor='transparent-light'
      @isBorderVisible={{true}}
    >
      Annuler
    </PixButton>
    <PixButton @type='submit'>Envoyer mes réponses</PixButton>
  </div>
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
