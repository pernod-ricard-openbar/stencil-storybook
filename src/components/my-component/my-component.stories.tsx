import readme from './readme.md';
export default {
  title: 'my-component',
  parameters:{
    notes: readme
  }
};
export const Default = () => `<my-component first="Bipbip" last="Wallace"></my-component>`;