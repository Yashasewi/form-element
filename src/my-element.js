var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.FormData = { name: "", email: "" };
        this.changeValue = false;
    }
    render() {
        var _a, _b, _c;
        return html `
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
            ? html `<div class="form1">
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
            : html ` <div class="form2">
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
                    <h1>Name: ${(_a = this.FormData) === null || _a === void 0 ? void 0 : _a.name}</h1>
                    <h1>Email: ${(_b = this.FormData) === null || _b === void 0 ? void 0 : _b.email}</h1>
                    <h1>
                        Password: ${((_c = this.FormData) === null || _c === void 0 ? void 0 : _c.password) || "not present"}
                    </h1>
                </div>
            </main>

            <p class="app-footer">🚽 Made with love by</p>
        `;
    }
    __changeValueFunction() {
        this.changeValue = !this.changeValue;
        this.FormData = { name: "", email: "" };
    }
    __onSubmitForm1() {
        var _a, _b;
        // e.preventDefault();
        const nameInput = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".name");
        const emailInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(".email");
        if (nameInput && emailInput) {
            const name = nameInput.value;
            const email = emailInput.value;
            this.FormData = {
                name,
                email,
            };
        }
    }
    __onSubmitForm2() {
        // e.preventDefault();
        var _a, _b, _c, _d, _e, _f;
        const name = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".name")) === null || _b === void 0 ? void 0 : _b.value;
        const email = (_d = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(".email")) === null || _d === void 0 ? void 0 : _d.value;
        const password = (_f = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector(".password")) === null || _f === void 0 ? void 0 : _f.value;
        this.FormData = {
            name,
            email,
            password,
        };
    }
};
MyElement.styles = css `
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
__decorate([
    property({ type: Object })
], MyElement.prototype, "FormData", void 0);
__decorate([
    property({ type: Boolean })
], MyElement.prototype, "changeValue", void 0);
MyElement = __decorate([
    customElement("my-element")
], MyElement);
export { MyElement };
