export interface DefineRoute {
  Path: string;
  Element: React.FC;
  menu: boolean;
  name: string;
  private: boolean;
}