import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'content-block': {
    'display': 'block',
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'center': {
    'display': 'table',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'home-hr': {
    'backgroundColor': 'black',
    'height': [{ 'unit': 'px', 'value': 3 }]
  },
  'p-header': {
    'fontSize': [{ 'unit': 'px', 'value': 50 }],
    'color': 'black'
  },
  'p-content': {
    'display': 'block'
  },
  'unversity-log': {
    'width': [{ 'unit': 'px', 'value': 115 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'horizontal-small-blocks': {
    'width': [{ 'unit': 'px', 'value': 85 }],
    'height': [{ 'unit': 'px', 'value': 55 }]
  },
  'vertical-small-blocks': {
    'width': [{ 'unit': 'px', 'value': 55 }],
    'height': [{ 'unit': 'px', 'value': 85 }]
  },
  'pricing-table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 450 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'lightgray' }]
  },
  'pricing-table pricing-table-content': {
    'position': 'relative',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 450 }],
    'textAlign': 'center'
  },
  'pricing-table column-split': {
    'width': [{ 'unit': 'px', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 430 }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'lightgray' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'pricing-table pricing-table-content purchase-button': {
    'position': 'absolute',
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'team-member-pic': {
    'width': [{ 'unit': 'px', 'value': 280 }],
    'height': [{ 'unit': 'px', 'value': 300 }]
  },
  'footer': {
    'color': 'lightgray'
  }
});
