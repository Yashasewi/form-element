import { LitElement } from "lit";
interface FormDataType {
    name: string | null;
    email: string | null;
    password?: string | null;
}
export declare class MyElement extends LitElement {
    FormData: FormDataType;
    changeValue: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private __changeValueFunction;
    private __onSubmitForm1;
    private __onSubmitForm2;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement;
    }
}
export {};
//# sourceMappingURL=my-element.d.ts.map