import { array } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import Component from '@glimmer/component';

import PixIcon from './pix-icon';

export default class PixBreadcrumb extends Component {
  defaultModel = [];

  get links() {
    return this.args.links.map((link) => ({
      ...link,
      label: link.label.trim(),
    }));
  }

  <template>
    <nav class="pix-breadcrumb" ...attributes>
      <ol>
        {{#each this.links as |link|}}
          {{#if link.route}}
            <li>
              <LinkTo
                @route={{link.route}}
                @models={{if link.model (array link.model) this.defaultModel}}
              >
                {{link.label}}
              </LinkTo>
              <PixIcon @name="chevronRight" @ariaHidden={{true}} />
            </li>
          {{else}}
            <li aria-current="page">
              <p>{{link.label}}</p>
            </li>
          {{/if}}
        {{/each}}
      </ol>
    </nav>
  </template>
}
