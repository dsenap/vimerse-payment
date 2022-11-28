import React from 'react';

export default {
  title: 'Colors',
};

const Template = (args) => (
  <div>
    <div
      style={{
        height: '140px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid',
        backgroundColor: '#FE7A39',
      }}
    >
      <p>Primary color #FE7A39</p>
    </div>
    <div
      style={{
        height: '140px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid',
        backgroundColor: '#176EA5',
      }}
    >
      <p>Secondary color #176EA5</p>
    </div>
    <div
      style={{
        height: '140px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid',
        backgroundColor: '#F6F7F9',
      }}
    >
      Background color #F6F7F9
    </div>
  </div>
);

export const SiteColors = Template.bind({});
SiteColors.args = {
  text: 'sdsdsd',
};
