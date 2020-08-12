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

@customElement("contact-list")
export default class ContactList extends LitElement {
  @property({ type: Array }) private bookmarks: any = {};

  constructor() {
    super();
    this.bookmarks = [{ id: "one", photoURL: "photoURL" }];
  }

  firstUpdated() {}

  private changeAction(e: any) {
    let payLoad: any = e.target.value;
    switch (payLoad) {
      case "2": // call
        break;

      case "3": // message
        break;

      case "4": // assign
        break;

      case "5": // remove
        break;

      default:
        payLoad = "1"; // profile
    }

    //let sendAction: any = this.shadowRoot!.querySelector(payLoad);
    const user: any = e.target.name;
    const change: any = "input[id=" + user + "-" + payLoad + "]";
    const changeForm: any = this.shadowRoot!.querySelector(change);
    changeForm.checked = true;

    console.log(e.target.value);
    console.log(e.target.name);
    console.log(change);
    console.log(changeForm);
  }

  protected render(): TemplateResult {
    return html`
      <!-- OUTPUT BOOKMARK DATA -->
      <ul
        class="bookmark"
        style="
          margin:       0;
          padding:      0;
          width:        100%;
          list-style:   none;"
      >
        ${this.bookmarks.map(
          (bookmark: any) => html`
            <li
              style="
                height:                 64px;
                border-bottom:          1px solid black;"
            >
              <form
                name="${bookmark.id}"
                style="
                display:                grid;
                width:                  100%;
                grid-template-columns:  36px 1fr 30px;"
              >
                <img
                  src="${bookmark.photoURL}"
                  style="
                    height: 36px;
                    width:  36px;
                    margin: auto;"
                />

                <select
                  name="${bookmark.id}"
                  @change="${(e: any) => {
                    this.changeAction(e);
                  }}"
                  style="
                    max-width:      300px;
                    margin:         auto;
                    margin:         auto;
                    height:         100%;
                    width:          100%;
                    border:         0;
                    background:     transparent;
                    font-size:      0.875rem;
                    font-weight:    500;
                    letter-spacing: 0.0892857143em;"
                >
                  <option name="${bookmark.id}" value="1"
                    >${bookmark.company}</option
                  >
                  <option name="${bookmark.id}" value="2">Call</option>
                  <option name="${bookmark.id}" value="3">Message</option>
                  <option name="${bookmark.id}" value="4">Assign</option>
                  <option name="${bookmark.id}" value="5">Remove</option>
                </select>

                <!-- Profile -->
                <label
                  form="${bookmark.id}"
                  for="${bookmark.id}-1"
                  name="topic"
                >
                  <input
                    type="radio"
                    id="${bookmark.id}-1"
                    name="${bookmark.id}"
                    value="1"
                  />

                  <p>Profile</p>
                </label>

                <!-- Call -->
                <label
                  form="${bookmark.id}"
                  for="${bookmark.id}-2"
                  name="topic"
                >
                  <input
                    id="${bookmark.id}-2"
                    type="radio"
                    name="${bookmark.id}"
                    value="2"
                    style="display:none;"
                  />

                  <p>Call</p>
                </label>

                <!-- Message -->
                <label
                  form="${bookmark.id}"
                  for="${bookmark.id}-3"
                  name="topic"
                >
                  <input
                    id="${bookmark.id}-3"
                    type="radio"
                    name="${bookmark.id}"
                    value="3"
                    style="display:none;"
                  />

                  <p>Message</p>
                </label>

                <!-- Assign -->
                <label
                  form="${bookmark.id}"
                  for="${bookmark.id}-4"
                  name="topic"
                >
                  <input
                    id="${bookmark.id}-4"
                    type="radio"
                    name="${bookmark.id}"
                    value="4"
                    style="display:none;"
                  />

                  <p>Call</p>
                </label>

                <!-- Remove -->
                <label
                  form="${bookmark.id}"
                  for="${bookmark.id}-5"
                  name="topic"
                >
                  <input
                    id="${bookmark.id}-5"
                    type="radio"
                    name="${bookmark.id}"
                    value="5"
                    style="display:none;"
                  />

                  <p>Message</p>
                </label>
              </form>
            </li>
          `
        )}
      </ul>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: grid;
        width: 100%;
      }
      button {
        height: 48px;
        width: 48px;
      }
      .contact {
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      label {
        display: none;
      }

      input:checked + label {
        display: block;
        color: red;
        background-color: red;
      }
    `;
  }
}

// const allForms: any = this.shadowRoot!.querySelectorAll("form");
// console.log("allForms: ", allForms);
// console.log('sleceted index: ', e.target.value);
// console.log('sleceted index: ', e.target.name);
// const formName: any = e.target.name;
// console.log("sendAction: ", sendAction);
// let className:any  = e.target.className;
// let selected:any   = e.target.value;
// Get a reference to the first element in the form
// const formElement:any = this.shadowRoot!.querySelector('.gets');
// formElement.elements[0];
// Give it a name
// formElement.name = 'inputA';
// console.log(this.shadowRoot!.querySelector('.gets').elements['john'].value);
// form.elements + '.' + user .checked
// form.elements = user
// selectForm.forms.elements.email.placeholder
// console.log('selected 1: ', selected, 'selected 2: ', this._contacts.push(selected));
// let x:any = this.shadowRoot!.getElementById(selected);
// x.setAttribute("on", "");
// sendAction.style.backgroundColor = "black";
// sendAction.setAttribute("aboutTopic", selected )

/**
 *     // Listen for the event.
    this.addEventListener("build", (e: any) => {
      console.log("selected: ", e.target.value), false;
      this.dispatchEvent(
        new CustomEvent("awesome", {
          bubbles: true,
          detail: { text: () => textarea.value },
        })
      );
    });
 * 
 * 
 *            </form>

              <form
                id="\${bookmark.id}-exe"
                name="\${bookmark.id}"
                @change="\${(e: any) => {
                    this.changeAction(e);
                  }}"
                class="toExecute"
                style="
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr;"
              >
 * 
 */

//console.log(this.shadowRoot!.forms[index]);
// console.log(this.shadowRoot!.forms[index]);
// console.log("pushAction: ", sentAction.form.elements);
// check input[type=radio] id

/*
    // const changeForm:any = document.querySelector(toAction);
    const changeArea: any = document.querySelector(".toExecute"); // "" changeForm ".toExecute"

    changeForm.addEventListener("awesome", (e) => console.log(e.detail.text()));

    changeArea.addEventListener("change", () => {
      // Create and dispatch/trigger an event on the fly
      // Note: Optionally, we've also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element
      this.dispatchEvent(
        new CustomEvent("awesome", {
          bubbles: true,
          detail: { text: () => changeArea.value },
        })
      );
    });

        // console.log(sentAction.forms.elements[0]);

*/
