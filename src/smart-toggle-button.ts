import { html, LitElement, property } from "lit-element";

class SmartToggleButton extends LitElement {

  @property({ type: Boolean, reflect: true })
  checked;

  @property({ type: Boolean, reflect: true })
  readonly;

  @property()
  items;

  @property({ type: String, reflect: true })
  itemNamePath;

  @property({ type: String, reflect: true })
  itemValuePath;

  render() {
    
    this.itemNamePath = this.itemNamePath || "name";
    this.itemValuePath = this.itemValuePath || "value";
    this.items = this.items || [{name: "On", value: "ON"}, {name: "Off", value: "OFF"}];
    console.log(this.items, this.items[0][this.itemNamePath]);
    return html`
      <style>
        .onoffswitch {
          position: relative; width: 90px;
          -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
        }
        .onoffswitch-checkbox {
          display: none;
        }
        .onoffswitch-label {
          display: block; overflow: hidden; cursor: pointer;
          border: 2px solid #999999; border-radius: 20px;
        }
        .onoffswitch-inner {
          display: block; width: 200%; margin-left: -100%;
          transition: margin 0.3s ease-in 0s;
        }
        .onoffswitch-inner:before, .onoffswitch-inner:after {
          display: block; float: left; width: 50%; height: 30px; padding: 0; line-height: 30px;
          font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
          box-sizing: border-box;
        }
        .onoffswitch-inner:before {
          content: "${this.items[0][this.itemNamePath]}";
          padding-left: 10px;
          background-color: var(--dfxo-switch-on-color, #34A7C1); color: #FFFFFF;
        }
        .onoffswitch-inner:after {
          content: "${this.items[1][this.itemNamePath]}";
          padding-right: 10px;
          background-color: var(--dfxo-switch-off-color, #EEEEEE); color: #999999;
          text-align: right;
        }
        .onoffswitch-switch {
          display: block; width: 18px; margin: 6px;
          background: #FFFFFF;
          position: absolute; top: 0; bottom: 0;
          right: 56px;
          border: 2px solid #999999; border-radius: 20px;
          transition: all 0.3s ease-in 0s; 
        }
        .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
          margin-left: 0;
        }
        .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
          right: 0px; 
        }
      </style>
      <div class="onoffswitch">
        <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" 
          ?checked="${this.checked}"
          ?readonly="${this.readonly}"
          @change="${(e) => this.dispatchEvent(new CustomEvent(e.type, e))}"
          @input="${(e) => this.dispatchEvent(new CustomEvent(e.type, e))}">
        <label class="onoffswitch-label" for="myonoffswitch">
          <span class="onoffswitch-inner"></span>
          <span class="onoffswitch-switch"></span>
        </label>
    </div>`;
  }
}

customElements.define("smart-toggle-button", SmartToggleButton);
