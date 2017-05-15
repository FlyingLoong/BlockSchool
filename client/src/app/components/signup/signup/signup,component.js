import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'background': 'transparent',
    'fontFamily': 'sans-serif'
  },
  'a': {
    'textDecoration': 'none',
    'color': '#666'
  },
  'process-bar': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 300 }],
    'width': [{ 'unit': 'px', 'value': 250 }],
    'opacity': '0.5',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'auto' }],
    'background': 'transparent'
  },
  'process-bar bg-line': {
    'height': [{ 'unit': 'px', 'value': 250 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0be' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 25 }],
    'left': [{ 'unit': 'px', 'value': 9 }],
    'zIndex': '1'
  },
  'process-bar process-status': {
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'process-bar dot': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': 'white',
    'textAlign': 'center',
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '50%',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    // vertical-align: middle;
    'position': 'relative',
    'zIndex': '2',
    'background': '#0be'
  },
  'process-bar transparent-dot': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '50%',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'position': 'relative',
    'zIndex': '2',
    'background': 'transparent'
  },
  'process-bar active': {
    'fontSize': [{ 'unit': 'px', 'value': 19 }],
    'fontWeight': 'bold',
    'color': 'black'
  }
});
