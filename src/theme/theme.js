import { createTheme } from '@material-ui/core/styles';
import breakpoints from './breakpoints';
import colors from './colors';

const theme = createTheme({
  palette: {
    ...colors,
  },
  breakpoints: {
    values: breakpoints,
  },
  typography: {
    allVariants: {
      color: colors.text.light,
      letterSpacing: 'initial',
      fontFamily: '"Inter", sans-serif',
    },
    h1: {
      fontSize: '60px',
      lineHeight: '72px',
      fontWeight: 600,
      color: colors.text.text,
      [`@media (max-width: 768px)`]: {
        fontSize: 34,
        lineHeight: '40px',
      },
    },
    h2: {
      fontSize: '48px',
      lineHeight: '50px',
      fontWeight: 600,
      [`@media (max-width: 768px)`]: {
        fontSize: 34,
        lineHeight: '40px',
      },
    },
    h3: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 700,
      color: colors.text.h3,
      '& > b': {
        fontWeight: 500,
      },
      [`@media (max-width: 768px)`]: {
        fontSize: 28,
        lineHeight: '36px',
      },
    },
    h4: {
      fontSize: 24,
      lineHeight: '28px',
      fontWeight: 500,
    },
    h5: {
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: 500,
      color: colors.text.text,
    },
    body1: {
      fontSize: 16,
      lineHeight: '26px',
      color: colors.text.body1,
      '& > b': {
        fontWeight: 600,
      },
    },
    body2: {
      fontSize: 14,
      lineHeight: '24px',
      '& > b': {
        fontWeight: 600,
      },
    },
    caption: {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        lineHeight: '100%',
        '@media (min-width: 992px)': {
          paddingLeft: 60,
          paddingRight: 60,
        },
        '@media (min-width: 600px)': {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
      maxWidthLg: {
        '@media (min-width: 1260px)': {
          maxWidth: 1260,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: '0',
        '&:hover': {
          backgroundColor: 'transparent',
          '@media (hover: none)': {
            backgroundColor: 'transparent !important',
          },
        },
        '&:hover path': {
          fill: colors.secondary.main,
          '@media (hover: none)': {
            fill: 'currentColor',
          },
        },
        '&:hover svg': {
          fill: colors.secondary.main,
          '@media (hover: none)': {
            fill: 'currentColor',
          },
        },
      },
    },
    MuiLink: {
      root: {
        color: colors.text.light,
        cursor: 'pointer',
        '&.active': {
          color: `${colors.secondary.main} !important`,
          pointerEvents: 'none',
          '& > *': {
            color: 'inherit !important',
          },
        },
        '&:hover': {
          color: `${colors.secondary.main} !important`,
          '& > *': {
            color: 'inherit',
          },
        },
        '&:focus': {
          color: `${colors.text.light}`,
          '& > *': {
            color: 'inherit',
          },
        },
        '@media (hover: none)': {
          color: `${colors.text.light}!important`,
        },
        '@media (focus: none)': {
          color: `${colors.text.light}!important`,
        },
      },
      underlineHover: {
        '&:hover': {
          textDecoration: 'none',
        },
        '&:focus': {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      root: {
        '&.backBtn .MuiButton-startIcon': {
          position: 'static',
        },
      },
      label: {
        width: 'auto',
        height: 'auto',
        lineHeight: '100%',
        textAlign: 'center',
      },
      contained: {
        boxShadow: 'none',
        borderRadius: 84,
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: '500',
        textTransform: 'initial',
        letterSpacing: 'initial',
        minHeight: 34,
        minWidth: 90,
        textAlign: 'center',
        '&.Mui-disabled': {
          background: colors.background.disabled,
          color: colors.background.default,
        },
      },
      outlined: {
        borderRadius: 34,
        fontSize: '16px',
        lineHeight: '18px',
        fontWeight: '700',
        textTransform: 'initial',
        letterSpacing: '0.01px',
        minHeight: 34,
        minWidth: 110,
        justifyContent: 'center !important',
        textAlign: 'center',
        '&.Mui-disabled': {
          color: colors.background.disabled,
          borderColor: colors.background.disabled,
        },
      },
      outlinedPrimary: {
        minWidth: 110,
        borderColor: colors.primary.outlined,
        border: `2px solid ${colors.primary.outlined}`,
        color: colors.primary.outlined,
        '&:hover': {
          backgroundColor: colors.primary.outHover,
          border: `2px solid ${colors.primary.outlined}`,
          '@media (hover: none)': {
            backgroundColor: `${colors.background.default}!important`,
          },
        },
        '&.Mui-disabled': {
          color: colors.background.disabled,
          border: `2px solid ${colors.background.disabled}`,
        },
      },
      outlinedSecondary: {
        borderColor: colors.primary.main,
        color: colors.primary.main,
        minWidth: 75,
        width: 103,
        height: 66,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 24,
        borderRadius: 4,
        '&:hover': {
          backgroundColor: colors.primary.squareOutHover,
          borderColor: colors.primary.squareOutlined,
          // '@media (hover: none)': {
          //   backgroundColor: `${colors.background.white}`,
          // },
          '&.Mui-disabled': {
            color: colors.background.disabled,
            border: `2px solid ${colors.background.disabled}`,
          },
        },
        // '@media (hover: none)': {
        //   backgroundColor: `${colors.primary.squareOutHover}!important`,
        // },
      },
      containedPrimary: {
        color: colors.background.default,
        '&:hover': {
          backgroundColor: colors.primary.hover,
          boxShadow: 'none',
        },
        '&:focus': {
          background: colors.primary.hover,
          boxShadow: 'none',
        },
        '@media (hover: none)': {
          background: `${colors.primary.main}`,
        },
        '@media (focus: none)': {
          background: `${colors.primary.hover}!important`,
        },
      },
      containedSecondary: {
        minHeight: 38,
        '&:hover': {
          backgroundColor: colors.secondary.hover,
          boxShadow: 'none',
        },
        '&:focus': {
          backgroundColor: colors.secondary.hover,
          boxShadow: 'none',
        },
        '@media (hover: none)': {
          backgroundColor: '#1970E0 !important',
        },
        '@media (focus: none)': {
          backgroundColor: '#1970E0 !important',
        },
      },
      sizeSmall: {
        height: 66,
        width: 92,
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 400,
        borderRadius: 4,
        '&:hover': {
          backgroundColor: colors.primary.squareOutActive,
          boxShadow: 'none',
        },
        '@media (hover: none)': {
          backgroundColor: `${colors.primary.squareOutActive}!important`,
        },
      },
      sizeLarge: {
        height: 46,
        width: 192,
        fontSize: '16px',
        lineHeight: '18px',
        fontWeight: 700,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 84,
      },
      startIcon: {
        top: -10,
        right: -10,
        position: 'absolute',
        margin: 0,
        marginRight: '0',
      },
      endIcon: {
        margin: 0,
        marginLeft: '0',
      },
      text: {
        fontSize: 16,
        padding: 0,
        fontWeight: 400,
        lineHeight: 26,
        textTransform: 'none',
        minWidth: 71,
        minHeight: 26,
        color: colors.secondary.main,
        textAlign: 'center',
      },
      textPrimary: {
        color: colors.secondary.main,
        '&:hover': {
          color: colors.primary.main,
          backgroundColor: 'transparent',
        },
        '&:hover path': {
          fill: colors.primary.main,
          backgroundColor: colors.background.default,
        },
        '@media (hover: none)': {
          color: colors.secondary.main,
        },
      },
    },
    MuiFormControl: {
      root: {
        minWidth: '134px',
        maxWidth: '470px',
        width: '100%',
        height: '46px',
        '&.readOnly': {
          '& > div': {
            background: colors.other.readOnly,
          },
          '& input': {
            color: '#636B75!important',
            paddingRight: 65,
          },
          '& > div > fieldset': {
            borderWidth: '1px !important',
            borderColor: '#C8C8C8 !important',
          },
          '& > label': {
            background: 'none',
            color: colors.field.label,
            '& span': {
              display: 'block',
              top: '15px',
              zIndex: -1,
              width: '115%',
              left: '50%',
              transform: 'translateX(-50%)',
              position: 'absolute',
              height: '2px',
              background: colors.other.readOnly,
            },
          },
        },
        '&.copy': {
          position: 'relative',
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        fontSize: '16px',
        lineHeight: '26px',
        color: colors.field.label,
        fontWeight: 400,
        padding: '0 5px',
        cursor: 'text',
        width: '50px',
      },
      shrink: {
        color: colors.text.caption,
        zIndex: '1',
        background: colors.background.default,
      },
    },
    MuiFormLabel: {
      root: {
        width: '50px',
        lineHeight: '26px',
        color: colors.text.light,
        '&.Mui-focused': {
          color: colors.secondary.main,
        },
        '&.Mui-disabled': {
          borderColor: colors.background.disabled,
        },
        '&.Mui-error': {
          borderColor: colors.error.main,
          color: colors.error.main,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: '12px',
        lineHeight: '18px',
        paddingTop: 4,
        color: colors.text.light,
        '&.Mui-disabled': {
          borderColor: colors.background.disabled,
        },
      },
    },
    MuiInputBase: {
      root: {
        height: '46px',
      },
      input: {
        fontSize: '16px',
        lineHeight: '26px',
        color: colors.field.text,
      },
      placeholder: {},
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          borderColor: colors.background.black,
        },
      },
      '&:focus': {
        borderColor: colors.secondary.hover,
      },
    },
    MuiOutlinedInput: {
      root: {
        height: '48px',
        borderRadius: 2,
        '&.Mui-focused fieldset': {
          borderColor: '#176EA5 !important',
        },
        // '&.Mui-focused input': {
        //   borderColor: '#176EA5!important',
        // },
        '& fieldset': {
          borderColor: colors.field.enabled,
          borderRadius: 2,
        },
        '&.Mui-disabled fieldset': {
          borderColor: colors.background.disabled,
        },
        '&.Mui-error fieldset': {
          borderColor: `${colors.error.main} !important`,
        },
      },
      input: {
        padding: '14px',
        height: '24px',
        paddingRight: '42px !important',
        '&::placeholder': {
          color: colors.text.placeholder,
          opacity: 1,
        },
      },
      adornedEnd: {
        paddingRight: '0',
      },
    },
    MuiFocused: {
      color: colors.background.hover,
    },
    MuiSnackbar: {
      root: {
        '@media (min-width: 600px)': {
          maxWidth: '600px',
        },
      },
    },
    MuiBackdrop: {
      root: {
        transition: 'none !important',
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: colors.tooltip.background,
        color: colors.tooltip.text,
        fontSize: 14,
        fontWeight: 400,
        maxWidth: 329,
        padding: '10px 10px 10px 0px',
      },
      arrow: {
        color: colors.tooltip.background,
      },
      // popper: {
      //   backgroundColor: colors.tooltip.background,
      // },
    },
    MuiDrawer: {
      root: {
        width: 270,
      },
      paper: {
        width: 270,
      },
    },
  },
});

export default theme;
