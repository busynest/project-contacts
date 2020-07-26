// By Bram Kragten @bramkragten

import {
  LitElement,
  html,
  css,
  CSSResult,
  customElement,
  property,
  TemplateResult,
} from "lit-element";

@customElement("my-counter")
export default class MyCounter extends LitElement {
  @property({ type: Number }) public count = 0;

  public inc(): void {
    this.count++;
  }

  public dec(): void {
    this.count--;
  }

  protected render(): TemplateResult {
    return html`
      <button>Face</button>
      <button>Mail</button>
      <button>Phone</button>
    `;
  }

  static get styles(): CSSResult {
    return css`
      * {
        font-size: 200%;
      }

      button {
      }
    `;
  }
}
