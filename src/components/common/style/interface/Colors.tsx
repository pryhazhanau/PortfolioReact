export interface Color {
  hex: string;
  var: string;
}

export const Colors: Record<string, Color> = {
  VelaroAccent: { hex: '#65FFAC', var: 'var(--velaro--accent)' },
  VelaroLight: { hex: '#ABFFD2', var: "var(--velaro--light)" },
  VelaroUltraLight: { hex: '#D8FFEA', var: 'var(--velaro--ultra--light)' },
  VelaroText: { hex: '#30F6AF', var: 'var(--velaro--text)' },
  AluminorGray: { hex: '#F6F6F6', var: 'var(--aluminor--gray)' },
  TitaniumGray: { hex: '#B1B1B1', var: 'var(--titanium--gray)' },
  SpaceroGray: { hex: '#4F4F4F', var: 'var(--spacero--gray)' },
  BackgroundPrimary: { hex: '#000000', var: 'var(--background--primary)' },
  BackgroundSecondary: { hex: '#222222', var: 'var(--background--secondary)' },
  StrokeBlack: { hex: '#1A1A1A', var: 'var(--stroke--black)' },
}
  