import TextBox from './TextBox'

export default {
  title: 'TextBox',
  component: TextBox
}

const Template = (args) => <TextBox {...args} />

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label'
}