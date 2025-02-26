import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TablePage extends Controller {
  @tracked
  nameSortOrder = null;
  @tracked
  numSortOrder = null;

  variant = 'orga';

  @tracked
  data = [
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

  caption = 'Titre de mon tableau';

  @action
  onNameSort() {
    this.resetOrders('name');
    if (this.nameSortOrder === 'asc') {
      this.data = this.data.sort((a, b) => b.name.localeCompare(a.name));
      this.nameSortOrder = 'desc';
    } else {
      this.data = this.data.sort((a, b) => a.name.localeCompare(b.name));
      this.nameSortOrder = 'asc';
    }
  }

  @action
  onClick() {}

  @action
  onNumSort() {
    this.resetOrders('num');
    if (this.numSortOrder === 'asc') {
      this.data = this.data.sort((a, b) => b.age - a.age);
      this.numSortOrder = 'desc';
    } else {
      this.data = this.data.sort((a, b) => a.age - b.age);
      this.numSortOrder = 'asc';
    }
  }

  resetOrders(except) {
    for (const key of ['num', 'name']) {
      if (key === except) continue;
      this[`${key}SortOrder`] = null;
    }
  }
}
