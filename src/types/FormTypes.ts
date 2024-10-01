export interface FormLayoutProps {
    title: string;
    description: string;
    onSubmit: (e: React.FormEvent) => void;
    children: React.ReactNode;
  }
  