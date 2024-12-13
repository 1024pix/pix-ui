import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ModalPage extends Controller {
  @tracked
  structure = this.structures[2];
  structures = [
    {
      value: 1,
      label: 'SCO Institut médico-éducatif professionnel Marguerite Sinclair',
    },
    {
      value: 2,
      label: "L'école du design",
    },
    {
      value: 3,
      label:
        "INSTITUT D'ENSEIGNEMENT TECHNIQUE DE MECANIQUE ET D'ELECTRICITE INSTITUT MARGUERITE MASSART",
    },
    {
      value: 4,
      label: 'un_super_d_organization_qui_ne_comporte_aucun_espace_oui_oui_c_est_du_vecu',
    },
    {
      value: 5,
      label: 'SCO Institut médico-éducatif professionnel Marguerite Sinclair',
    },
    {
      value: 6,
      label: "L'école du design",
    },
    {
      value: 7,
      label:
        "INSTITUT D'ENSEIGNEMENT TECHNIQUE DE MECANIQUE ET D'ELECTRICITE INSTITUT MARGUERITE MASSART",
    },
    {
      value: 8,
      label: 'un_super_d_organization_qui_ne_comporte_aucun_espace_oui_oui_c_est_du_vecu',
    },
  ];

  @action
  setStructure(option) {
    this.structure = option;
  }
}
