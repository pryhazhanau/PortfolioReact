export interface TypographyStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight?: number;
  lineHeight?: string;
  fontStyle?: string;
  letterSpacing?: string;
}

export const Typography: Record<string, TypographyStyle> = {
  Headline: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--headline)',
    fontWeight: 900,
    lineHeight: 'calc(var(--headline) * 1.1)',
  },
  Title: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--title)',
    fontWeight: 500
  },
  SubtitlePrimary: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--subtitle--primary)',
    fontWeight: 700,
  },
  SubtitleSecondary: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--subtitle)',
    fontWeight: 700,
  },
  BodyText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--body)',
    fontWeight: 400,
  },
  BodyTextBold: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--body)',
    fontWeight: 700,
  },
  Description: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--description)',
    fontWeight: 600,
  },
  Quote: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--quote)',
    fontWeight: 300,
    fontStyle: 'italic',
  },
  Caption: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--caption)',
    fontWeight: 400,
    letterSpacing: '-0.12px',
  },
};
