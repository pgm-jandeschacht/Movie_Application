import Button from './Button'
 
export default {
  title:  'Button',
  component: Button
}

const Template = (args) => <Button {...args}></Button>

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'This is a button'
}

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'This is a button'
}

