import PixIcon from '../pix-icon';

<template>
  {{#if @iconBefore}}
    <PixIcon
      class="pix-button__icon pix-button__icon--before"
      @ariaHidden={{true}}
      @name={{@iconBefore}}
      @plainIcon={{@plainIconBefore}}
    />
  {{/if}}
  {{yield}}
  {{#if @iconAfter}}
    <PixIcon
      class="pix-button__icon pix-button__icon--after"
      @name={{@iconAfter}}
      @ariaHidden={{true}}
      @plainIcon={{@plainIconAfter}}
    />
  {{/if}}
</template>
