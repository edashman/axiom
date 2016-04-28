import { Button } from 'axiom/react';
import { Form, CheckBox, RadioButton, TextArea, TextInput } from 'axiom/react';

export default {
  id: 'form',
  path: 'form',
  group: 'components',
  components: [
    { Component: Form },
    { Component: CheckBox },
    { Component: RadioButton },
    { Component: TextArea },
    { Component: TextInput }
  ],

  sass: [
    '/components/form'
  ],
  examples: () => [{
    title: 'Text inputs',
    snippetLocation: true,
    children: [{
      type: 'grid',
      children: [{
        title: 'Standard text input',
        snippetContent: true,
        children: [{
          Component: TextInput,
          props: {
            placeholder: 'Standard input...',
          }
        }]
      }, {
        title: 'Disabled text input',
        snippetContent: true,
        children: [{
          Component: TextInput,
          props: {
            placeholder: 'Disabled input...',
            disabled: true,
          },
        }],
      }],
    }, {
      type: 'grid',
      snippetLocation: true,
      children: [{
        title: 'Success validation',
        snippetContent: true,
        children: [{
          Component: TextInput,
          props: {
            placeholder: 'Valid input',
            valid: true,
          },
        }],
      }, {
        title: 'Failed validation',
        snippetContent: true,
        children: [{
          Component: TextInput,
          props: {
            placeholder: 'Invalid input',
            invalid: true,
          },
        }],
      }]
    }],
  }, {
    title: 'Text inputs with additional Components',
    snippetLocation: true,
    children: [{
      title: 'Text input with an icon',
      snippetContent: true,
      children: [{
        Component: TextInput,
        props: {
          placeholder: 'Icon input...',
          icon: 'calendar',
        }
      }]
    }, {
      title: 'Text input with a Button',
      snippetContent: true,
      children: [{
        Component: TextInput,
        props: {
          placeholder: 'Button input...',
        },
        children: [{
          Component: Button,
          children: 'Submit',
          props: {
            color: 'primary',
          },
        }],
      }],
    }, {
      title: 'Text input with a Button and an Icon',
      snippetContent: true,
      children: [{
        Component: TextInput,
        props: {
          placeholder: 'Button input...',
          icon: 'calendar',
        },
        children: [{
          Component: Button,
          children: 'Submit',
          props: {
            color: 'primary',
          },
        }],
      }],
    }],
  }, {
    title: 'Text area',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: TextArea,
      props: {
        placeholder: 'Text area...',
      },
    }],
  }, {
    title: 'Radio buttons and Check boxes',
    children: [{
      title: 'Check boxes',
      snippetLocation: true,
      snippetContent: true,
      children: [{
        Component: CheckBox,
        children: 'Unchecked check box',
        props: {
          defaultChecked: false,
        },
      }, {
        Component: CheckBox,
        children: 'Checked check box',
        props: {
          defaultChecked: true,
        },
      }, {
        Component: CheckBox,
        children: 'Disabled check box',
        props: {
          disabled: true,
        },
      }],
    }, {
      title: 'Radio buttons',
      snippetLocation: true,
      snippetContent: true,
      children: [{
        Component: RadioButton,
        children: 'Unchecked radio button',
        props: {
          defaultChecked: false,
        },
      }, {
        Component: RadioButton,
        children: 'Checked radio button',
        props: {
          defaultChecked: true,
        },
      }, {
        Component: RadioButton,
        children: 'Disabled radio button',
        props: {
          disabled: true,
        },
      }],
    }],
  }],
};