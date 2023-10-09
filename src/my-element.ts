import { createComponent } from "@lit-labs/react";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import React from "react";
interface FormDataType {
    name: string | null;
    email: string | null;
    password?: string | null;
}
@customElement("form-element-compo")
export class MyElement extends LitElement {
    @property({ type: Object })
    FormData: FormDataType = { name: "", email: "" };

    @property({ type: Boolean })
    changeValue = false;

    render() {
        return html`
            <main>
                <h1>
                    Form which has button and change ui according to that button
                </h1>
                <div>
                    <button @click=${this.__changeValueFunction}>
                        Yo click me bro
                    </button>
                </div>
                <div>
                    ${this.changeValue
                        ? html`<div class="form1">
                              <input
                                  type="text"
                                  class="name"
                                  placeholder="Enter your name"
                              />
                              <input
                                  type="text"
                                  class="email"
                                  placeholder="Enter your email"
                              />
                              <button @click=${this.__onSubmitForm1}>
                                  Submit
                              </button>
                          </div>`
                        : html` <div class="form2">
                              <input
                                  type="text"
                                  class="name"
                                  placeholder="Enter your name"
                              />
                              <input
                                  type="text"
                                  class="email"
                                  placeholder="Enter your email"
                              />
                              <input
                                  type="text"
                                  class="password"
                                  placeholder="Enter your password"
                              />
                              <button @click=${this.__onSubmitForm2}>
                                  Submit
                              </button>
                          </div>`}
                </div>

                <div>
                    <h1>Form Data</h1>
                    <h1>Name: ${this.FormData?.name}</h1>
                    <h1>Email: ${this.FormData?.email}</h1>
                    <h1>
                        Password: ${this.FormData?.password || "not present"}
                    </h1>
                </div>
            </main>

            <p class="app-footer">🚽 Made with love by</p>
        `;
    }

    private __changeValueFunction() {
        this.changeValue = !this.changeValue;
        this.FormData = { name: "", email: "" };
    }

    private __onSubmitForm1() {
        // e.preventDefault();
        const nameInput = this.shadowRoot?.querySelector(
            ".name"
        ) as HTMLInputElement | null;
        const emailInput = this.shadowRoot?.querySelector(
            ".email"
        ) as HTMLInputElement | null;

        if (nameInput && emailInput) {
            const name = nameInput.value;
            const email = emailInput.value;

            this.FormData = {
                name,
                email,
            };
        }
    }

    private __onSubmitForm2() {
        // e.preventDefault();

        const name = (
            this.shadowRoot?.querySelector(".name") as HTMLInputElement
        )?.value;
        const email = (
            this.shadowRoot?.querySelector(".email") as HTMLInputElement
        )?.value;
        const password = (
            this.shadowRoot?.querySelector(".password") as HTMLInputElement
        )?.value;

        this.FormData = {
            name,
            email,
            password,
        };
    }
    static styles = css`
        :host {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            font-size: 10px;
            color: #1a2b42;
            max-width: 960px;
            margin: 0 auto;
            text-align: center;
            background-color: var(--form-element-background-color);
        }

        main {
            flex-grow: 1;
        }

        .app-footer {
            font-size: calc(12px + 0.5vmin);
            align-items: center;
        }

        .app-footer a {
            margin-left: 5px;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "form-element-compo": MyElement;
    }
}

export const MyFormElement = createComponent({
    react: React,
    elementClass: MyElement,
    tagName: "form-element-compo",
});
