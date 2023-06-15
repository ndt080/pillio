import { LightTheme, Theme } from '@shared/theme';

export const Typography = ({
  fonts,
  fontSizes,
  fontWeight,
}: Theme = LightTheme) => ({
  L2: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.L,
    fontWeight: fontWeight.SemiBold,
    lineHeight: 23,
  },
  L1: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.L,
    fontWeight: fontWeight.Medium,
    lineHeight: 23,
  },
  L0: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.L,
    fontWeight: fontWeight.Regular,
    lineHeight: 23,
  },
  M2: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.M,
    fontWeight: fontWeight.SemiBold,
    lineHeight: 21,
  },
  M1: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.M,
    fontWeight: fontWeight.Medium,
    lineHeight: 21,
  },
  M0: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.M,
    fontWeight: fontWeight.Regular,
    lineHeight: 21,
  },
  S2: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.S,
    fontWeight: fontWeight.SemiBold,
    lineHeight: 18,
    textTransform: 'uppercase',
  },
  S1: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.S,
    fontWeight: fontWeight.Medium,
    lineHeight: 18,
  },
  S0: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.S,
    fontWeight: fontWeight.Regular,
    lineHeight: 18,
  },
  XS2: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.XS,
    fontWeight: fontWeight.SemiBold,
    lineHeight: 16,
  },
  XS1: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.XS,
    fontWeight: fontWeight.Medium,
    lineHeight: 16,
  },
  XS0: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.XS,
    fontWeight: fontWeight.Regular,
    lineHeight: 16,
  },
});
