import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { guidFor } from '@ember/object/internals';

import Panel from './pix-tabs-panel';
import Tab from './pix-tabs-tab';

export default class PixTabsComponent extends Component {
  @service elementHelper;

  Panel = Panel;
  Tab = Tab;

  @tracked currentTabIndex = this.args.initialTabIndex || 0;
  @tracked hasScrollableTablist = false;
  @tracked isLeftArrowVisible = false;
  @tracked isRightArrowVisible = false;

  elements = {
    tabs: null,
    tablist: null,
  };

  constructor(...args) {
    super(...args);

    this.elementHelper.waitForElement(this.id).then(() => {
      this.elements.tabs = document.querySelectorAll(`#${this.id} [role='tab']`);
      this.elements.tablist = document.querySelector(`#${this.id} [role='tablist'] > div`);

      this.handleResponsiveTablist();
      window.addEventListener('resize', this.handleResponsiveTablist);

      this.elements.tablist.addEventListener('scroll', this.handleTablistArrowsVisibility);
    });
  }

  get id() {
    if (this.args.id) return this.args.id;
    return 'pix-tabs-' + guidFor(this);
  }

  @action
  handleTablistKeyUp(event) {
    let nextTabIndex = [...this.elements.tabs].findIndex((tab) => {
      return tab === document.activeElement;
    });

    switch (event.key) {
      case 'ArrowRight':
        if (nextTabIndex === this.elements.tabs.length - 1) {
          nextTabIndex = 0;
        } else {
          nextTabIndex = nextTabIndex + 1;
        }
        break;
      case 'ArrowLeft':
        if (nextTabIndex === 0) {
          nextTabIndex = this.elements.tabs.length - 1;
        } else {
          nextTabIndex = nextTabIndex - 1;
        }
        break;
    }

    const tabToFocus = document.getElementById(this.id + '-' + nextTabIndex);
    tabToFocus.focus();

    if (this.hasScrollableTablist) this.handleKeyupFocusScroll(tabToFocus);
  }

  @action
  handleTabChange(tabIndex) {
    if (tabIndex !== this.currentTabIndex) {
      this.currentTabIndex = tabIndex;
      this.args.onTabChange && this.args.onTabChange(tabIndex);
    }
  }

  @action
  handleResponsiveTablist() {
    this.hasScrollableTablist =
      this.elements.tablist.scrollWidth > this.elements.tablist.clientWidth;

    if (this.hasScrollableTablist) {
      this.handleTablistArrowsVisibility();

      const currentTab = this.elements.tabs[this.currentTabIndex];
      this.scrollToTab(currentTab, 'instant');
    } else {
      this.isLeftArrowVisible = false;
      this.isRightArrowVisible = false;
    }
  }

  @action
  handleTablistArrowsVisibility() {
    const maxScrollLeft = this.elements.tablist.scrollWidth - this.elements.tablist.clientWidth;

    switch (Math.round(this.elements.tablist.scrollLeft)) {
      case 0:
        this.isLeftArrowVisible = false;
        this.isRightArrowVisible = true;
        break;
      case maxScrollLeft:
        this.isLeftArrowVisible = true;
        this.isRightArrowVisible = false;
        break;
      default:
        this.isLeftArrowVisible = true;
        this.isRightArrowVisible = true;
    }
  }

  @action
  handleArrowClick(direction) {
    let nextTabOverflowing;

    if (direction === 'left') {
      nextTabOverflowing = [...this.elements.tabs]
        .reverse()
        .find((tab) => tab.offsetLeft < this.elements.tablist.scrollLeft);
    } else {
      nextTabOverflowing = [...this.elements.tabs].find((tab) => {
        return (
          tab.offsetLeft + tab.clientWidth >
          this.elements.tablist.scrollLeft + this.elements.tablist.clientWidth
        );
      });
    }

    this.scrollToTab(nextTabOverflowing);
  }

  @action
  handleKeyupFocusScroll(tabToFocus) {
    const leftOverflowing = tabToFocus.offsetLeft - this.elements.tablist.scrollLeft < 0;
    const rightOverflowing =
      tabToFocus.offsetLeft + tabToFocus.clientWidth >
      tabToFocus.scrollLeft + this.elements.tablist.clientWidth;

    if (leftOverflowing || rightOverflowing) {
      if (tabToFocus.offsetLeft === 0) {
        this.elements.tablist.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        this.scrollToTab(tabToFocus);
      }
    }
  }

  scrollToTab(tabToFocus, behavior = 'smooth') {
    const centeredTabPosition =
      tabToFocus.offsetLeft +
      0.5 * tabToFocus.clientWidth -
      0.5 * this.elements.tablist.clientWidth;

    this.elements.tablist.scrollTo({
      left: centeredTabPosition,
      behavior: behavior,
    });
  }
}
