import "./index.ts";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const contacts = () => html` <contact-list></contact-list> `;
