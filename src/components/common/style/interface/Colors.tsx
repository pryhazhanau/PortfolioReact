export interface Color {
  hex: string;
  var: string;
}

export const Colors: Record<string, Color> = {
  VelaroAccent: { hex: '#65FFAC', var: 'var(--velaro--accent)' },
  VelaroLight: { hex: '#ABFFD2', var: "var(--velaro--light)" },
  VelaroUltraLight: { hex: '#D8FFEA', var: 'var(--velaro--ultra--light)' },
  Voyaro: { hex: '#30F6AF', var: 'var(--velaro--text)' },
  AluminorGray: { hex: '#F6F6F6', var: 'var(--aluminor--gray)' },
  TitaniumGray: { hex: '#9A9A9A', var: 'var(--titanium--gray)' },
  SpaceroGray: { hex: '#4F4F4F', var: 'var(--spacero--gray)' },
  BackgroundPrimary: { hex: '#000000', var: 'var(--background--primary)' },
  BackgroundSecondary: { hex: '#222222', var: 'var(--background--secondary)' },
  Palendro: { hex: '#181B1C', var: 'var(--palendro)' },
}
  